// 3D表示の本体：カメラ、移動と当たり判定、町の人の動き、調べられる物の検出、空気感の変化。
// ゲームのルールは一切持たない。WorldView（いまの町の見え方）を受け取って映すだけ。
import * as THREE from 'three';
import type { Scenario } from '../core/scenario';
import type { NpcView, SpotView, WorldView } from '../core/types';
import { animate, buildCharacter, setPose, type Character } from './characters';
import { Controls, type ControlEls } from './controls';
import type { MapDef, Rect } from './mapTypes';
import { makeTextures } from './textures';
import { buildTown, type Town } from './town';

export type Quality = 'low' | 'mid' | 'high';
export interface Prompt { id: string; label: string; verb: string }
export interface EngineCallbacks { onPrompt(p: Prompt | null): void; onZone(zone: string): void; onAction(): void; onMenu(): void; onStep(): void }

const CELL = 0.5, EYE = 1.62, RADIUS = 0.3;
const PAL = [
  { top: 0x5d9bd6, bot: 0xdbe7ee, fog: 0xd0dfe8, near: 70, far: 260, sun: 0xfff2d8, sunI: 2.5, hemi: 1.55 },
  { top: 0x6f9cc4, bot: 0xd8dcd8, fog: 0xccd4d2, near: 55, far: 210, sun: 0xfff0d4, sunI: 2.2, hemi: 1.5 },
  { top: 0x7d8890, bot: 0xbdb5a2, fog: 0xaea690, near: 28, far: 130, sun: 0xffe2b8, sunI: 1.3, hemi: 1.15 },
  { top: 0x5e6266, bot: 0x948a78, fog: 0x8a826f, near: 14, far: 80, sun: 0xd8c8b0, sunI: 0.75, hemi: 0.95 },
];
const DUSK = { top: 0x2c3560, bot: 0xd8885a, fog: 0xa87a62, sun: 0xff8a4a };

interface Actor { view: NpcView; ch: Character; x: number; z: number; face: number; walking: number; node: number; tx: number; tz: number; wait: number; speed: number }

export class Game3D {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(70, 1, 0.12, 520);
  private controls: Controls;
  private town: Town;
  private map: MapDef;
  private sun = new THREE.DirectionalLight(0xffffff, 2.4);
  private hemi = new THREE.HemisphereLight(0xdfeeff, 0x8a7a60, 1.5);
  private grid: Uint8Array; private gw: number; private gh: number;
  private actors = new Map<string, Actor>();
  private markers = new Map<string, THREE.Object3D>();
  private spots: SpotView[] = [];
  private pos = { x: 0, z: 0 }; private vel = { x: 0, z: 0 };
  private yaw = 0; private pitch = 0;
  private focusT: { yaw: number; pitch: number; t: number } | null = null;
  private blocked = false; private mode: 'title' | 'play' = 'title';
  private view: WorldView | null = null;
  private atmo = { phase: 0, dusk: 0 };
  private zone = ''; private promptId = '';
  private stepAcc = 0; private zoneT = 0; private time = 0; private last = 0;
  private quality: Quality = 'mid'; private scale = 1; private slow = 0;
  private disposed = false;
  private c1 = new THREE.Color(); private c2 = new THREE.Color(); private c3 = new THREE.Color();

  constructor(private els: ControlEls, private sc: Scenario, private cb: EngineCallbacks) {
    this.map = sc.map;
    const touch = matchMedia('(pointer: coarse)').matches;
    this.renderer = new THREE.WebGLRenderer({ canvas: els.canvas, antialias: !touch, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.scene.fog = new THREE.Fog(0xd0dfe8, 70, 260);
    this.camera.rotation.order = 'YXZ';

    this.town = buildTown(this.map, makeTextures());
    this.scene.add(this.town.group);
    this.scene.add(this.hemi, this.sun, this.sun.target);
    const sc2 = this.sun.shadow; sc2.mapSize.set(2048, 2048);
    Object.assign(sc2.camera, { left: -48, right: 48, top: 44, bottom: -44, near: 1, far: 160 }); sc2.bias = -0.0015; sc2.normalBias = 0.05;

    // 当たり判定用の格子。歩ける範囲を塗り、家具や露店を抜く
    const b = this.map.bounds;
    this.gw = Math.round((b.x1 - b.x0) / CELL); this.gh = Math.round((b.z1 - b.z0) / CELL);
    this.grid = new Uint8Array(this.gw * this.gh);
    const fill = (r: Rect, v: number, pad = 0) => {
      for (let j = 0; j < this.gh; j++) for (let i = 0; i < this.gw; i++) {
        const x = b.x0 + (i + 0.5) * CELL, z = b.z0 + (j + 0.5) * CELL;
        if (x > r.x0 - pad && x < r.x1 + pad && z > r.z0 - pad && z < r.z1 + pad) this.grid[j * this.gw + i] = v;
      }
    };
    for (const r of this.map.walk) fill(r, 1);
    for (const p of this.map.props) if (p.solid && p.fromPhase === undefined && p.untilPhase === undefined) fill({ x0: p.x - p.solid[0] / 2, z0: p.z - p.solid[1] / 2, x1: p.x + p.solid[0] / 2, z1: p.z + p.solid[1] / 2 }, 0, 0.05);
    for (const s of this.map.stalls) fill({ x0: s.x - 1.5, z0: s.z - 0.6, x1: s.x + 1.5, z1: s.z + 0.6 }, 0, 0.1);

    this.controls = new Controls(els);
    this.controls.onAction = () => cb.onAction();
    this.controls.onMenu = () => cb.onMenu();
    this.place(this.map.spawn.x, this.map.spawn.z, this.map.spawn.yaw);
    this.applyAtmosphere(1);
    this.resize = this.resize.bind(this);
    addEventListener('resize', this.resize); addEventListener('orientationchange', this.resize);
    this.setQuality(touch ? 'mid' : 'high');
    this.resize();
    this.renderer.setAnimationLoop((ms) => this.frame(ms));
  }

  // ---------- 外から呼ぶもの ----------
  setView(v: WorldView) {
    this.view = v;
    this.town.setView(v);
    const seen = new Set<string>();
    for (const n of v.npcs) {
      seen.add(n.id);
      let a = this.actors.get(n.id);
      if (!a) {
        const look = this.sc.cast[n.look] ?? this.sc.cast.folk1;
        const ch = buildCharacter(look);
        this.scene.add(ch.root);
        a = { view: n, ch, x: n.x, z: n.z, face: n.face, walking: 0, node: 0, tx: 0, tz: 0, wait: 0, speed: 1.1 + (hash(n.id) % 5) * 0.09 };
        if (n.wander) { a.node = hash(n.id) % this.map.waypoints.length; const w = this.map.waypoints[a.node]; a.x = w.x + off(n.id, 1); a.z = w.z + off(n.id, 2); this.pickNext(a); }
        this.actors.set(n.id, a);
        setPose(ch, n.pose, look);
      } else if (a.view.pose !== n.pose) setPose(a.ch, n.pose, this.sc.cast[n.look]);
      if (!n.wander) { a.x = n.x; a.z = n.z; if (a.view.pose !== n.pose || a.view.x !== n.x) a.face = n.face; }
      a.view = n;
    }
    for (const [id, a] of this.actors) if (!seen.has(id)) { this.scene.remove(a.ch.root); this.actors.delete(id); }
    // 拾える物の目印
    this.spots = v.spots;
    const live = new Set(v.spots.filter((s) => s.marker).map((s) => s.id));
    for (const s of v.spots) if (s.marker && !this.markers.has(s.id)) { const m = makeMarker(s.kind); m.position.set(s.x, 0, s.z); this.scene.add(m); this.markers.set(s.id, m); }
    for (const [id, m] of this.markers) if (!live.has(id)) { this.scene.remove(m); this.markers.delete(id); }
  }
  setBlocked(bk: boolean) { if (bk && !this.blocked) this.controls.release(); this.blocked = bk; this.controls.enabled = !bk; if (bk) this.setPrompt(null); }
  setMode(m: 'title' | 'play') { this.mode = m; if (m === 'title') this.controls.release(); }
  setSensitivity(v: number) { this.controls.sensitivity = v; }
  setQuality(q: Quality) {
    this.quality = q; this.scale = 1;
    const shadows = q === 'high';
    this.renderer.shadowMap.enabled = shadows; this.sun.castShadow = shadows; this.town.setShadows(shadows);
    this.scene.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.Material | undefined; if (m) m.needsUpdate = true; });
    this.resize();
  }
  place(x: number, z: number, yaw: number) {
    this.pos.x = x; this.pos.z = z; this.yaw = yaw; this.pitch = 0; this.vel.x = this.vel.z = 0; this.focusT = null;
    this.zone = this.zoneAt(x, z);
  }
  getPose() { return { x: this.pos.x, z: this.pos.z, yaw: this.yaw }; }
  /** 話し相手のほうへ、ゆっくり向き直る */
  focus(id: string) {
    const a = this.actors.get(id); const s = this.spots.find((x) => x.id === id);
    const tx = a ? a.x : s?.x, tz = a ? a.z : s?.z;
    if (tx === undefined || tz === undefined) return;
    const dy = a ? (a.view.pose === 'lie' ? 0.3 : a.ch.height * (a.view.pose === 'sit' ? 0.7 : 0.92)) - EYE : -0.5;
    const d = Math.hypot(tx - this.pos.x, tz - this.pos.z);
    this.focusT = { yaw: Math.atan2(-(tx - this.pos.x), -(tz - this.pos.z)), pitch: Math.max(-0.7, Math.min(0.3, Math.atan2(dy, Math.max(0.6, d)))), t: 0.5 };
    if (a && a.view.pose === 'stand') a.face = Math.atan2(this.pos.x - a.x, this.pos.z - a.z);
  }
  dispose() {
    this.disposed = true;
    this.renderer.setAnimationLoop(null);
    removeEventListener('resize', this.resize); removeEventListener('orientationchange', this.resize);
    this.controls.dispose(); this.renderer.dispose();
  }

  // ---------- 内部 ----------
  private resize() {
    const w = innerWidth, h = innerHeight;
    const cap = this.quality === 'low' ? 1 : this.quality === 'mid' ? 1.5 : 2;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, cap) * this.scale);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.fov = w >= h ? 68 : 84;
    this.camera.far = this.quality === 'low' ? 320 : 520;
    this.camera.updateProjectionMatrix();
  }
  private zoneAt(x: number, z: number) { for (const zn of this.map.zones) if (x >= zn.rect.x0 && x <= zn.rect.x1 && z >= zn.rect.z0 && z <= zn.rect.z1) return zn.id; return ''; }
  private free(x: number, z: number, r = RADIUS) {
    const b = this.map.bounds;
    const i0 = Math.floor((x - r - b.x0) / CELL), i1 = Math.floor((x + r - b.x0) / CELL), j0 = Math.floor((z - r - b.z0) / CELL), j1 = Math.floor((z + r - b.z0) / CELL);
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      if (i >= 0 && j >= 0 && i < this.gw && j < this.gh && this.grid[j * this.gw + i]) continue;
      const cx = b.x0 + i * CELL, cz = b.z0 + j * CELL;
      const nx = Math.max(cx, Math.min(x, cx + CELL)), nz = Math.max(cz, Math.min(z, cz + CELL));
      if ((x - nx) ** 2 + (z - nz) ** 2 < r * r) return false;
    }
    for (const s of this.town.solids) if (s.active) {
      const nx = Math.max(s.rect.x0, Math.min(x, s.rect.x1)), nz = Math.max(s.rect.z0, Math.min(z, s.rect.z1));
      if ((x - nx) ** 2 + (z - nz) ** 2 < r * r) return false;
    }
    return true;
  }
  private pickNext(a: Actor) {
    const links = this.map.links.filter((l) => l[0] === a.node || l[1] === a.node).map((l) => (l[0] === a.node ? l[1] : l[0]));
    const next = links[Math.floor(Math.random() * links.length)] ?? a.node;
    a.node = next; const w = this.map.waypoints[next];
    a.tx = w.x + (Math.random() - 0.5) * 1.3; a.tz = w.z + (Math.random() - 0.5) * 1.3;
  }
  private setPrompt(p: Prompt | null) { const id = p ? p.id + p.verb : ''; if (id !== this.promptId) { this.promptId = id; this.cb.onPrompt(p); } }

  private frame(ms: number) {
    if (this.disposed) return;
    const dt = Math.min(0.05, (ms - this.last) / 1000 || 0.016); this.last = ms; this.time += dt;
    const t = this.time;
    // 重いときは描画解像度を少しずつ下げる
    if (dt > 0.034) this.slow += dt; else this.slow = Math.max(0, this.slow - dt * 0.5);
    if (this.slow > 2.5 && this.scale > 0.62) { this.scale *= 0.85; this.slow = 0; this.resize(); }

    if (this.mode === 'title') {
      const a = t * 0.05;
      this.camera.position.set(Math.sin(a) * 30, 15, Math.cos(a) * 30 + 2);
      this.camera.lookAt(0, 3, -2);
    } else {
      this.movePlayer(dt);
      this.camera.position.set(this.pos.x, EYE, this.pos.z);
      this.camera.rotation.set(this.pitch, this.yaw, 0);
    }
    this.updateActors(dt, t);
    for (const m of this.markers.values()) { m.children[0].rotation.y = t * 1.5; m.children[1].scale.setScalar(1 + Math.sin(t * 4) * 0.12); }
    this.town.update(t);
    this.applyAtmosphere(dt * 0.8);
    if (this.mode === 'play' && !this.blocked) {
      this.detect();
      this.zoneT -= dt;
      if (this.zoneT <= 0) { this.zoneT = 0.2; const z = this.zoneAt(this.pos.x, this.pos.z); if (z !== this.zone) { this.zone = z; if (z) this.cb.onZone(z); } }
    }
    this.town.sky.position.copy(this.camera.position);
    this.renderer.render(this.scene, this.camera);
  }

  private movePlayer(dt: number) {
    const c = this.controls;
    if (this.focusT) {
      const f = this.focusT, k = Math.min(1, dt * 7);
      let dy = f.yaw - this.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
      this.yaw += dy * k; this.pitch += (f.pitch - this.pitch) * k;
      f.t -= dt; if (f.t <= 0) this.focusT = null;
    }
    let ix = 0, iz = 0, run = false;
    if (!this.blocked) {
      c.read(); ix = c.moveX; iz = c.moveZ; run = c.run;
      this.yaw += c.yawDelta; this.pitch = Math.max(-1.25, Math.min(1.25, this.pitch + c.pitchDelta));
    }
    c.yawDelta = c.pitchDelta = 0;
    const sp = run ? 6.4 : 4.4;
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    const tx = (cos * ix + sin * iz) * sp, tz = (-sin * ix + cos * iz) * sp;
    // 急に動き出さず、急に止まらない
    const k = Math.min(1, dt * 11);
    this.vel.x += (tx - this.vel.x) * k; this.vel.z += (tz - this.vel.z) * k;
    const nx = this.pos.x + this.vel.x * dt, nz = this.pos.z + this.vel.z * dt;
    const ox = this.pos.x, oz = this.pos.z;
    if (this.free(nx, this.pos.z)) this.pos.x = nx; else this.vel.x = 0;
    if (this.free(this.pos.x, nz)) this.pos.z = nz; else this.vel.z = 0;
    // 立っている人をすり抜けない
    for (const a of this.actors.values()) {
      if (a.view.wander || a.view.look === 'cat') continue;
      const rr = a.view.pose === 'lie' ? 0.75 : 0.72;
      const ax = a.x, az = a.view.pose === 'lie' ? a.z : a.z;
      const dx = this.pos.x - ax, dz = this.pos.z - az, d = Math.hypot(dx, dz);
      if (d < rr && d > 0.001) { const px = ax + dx / d * rr, pz = az + dz / d * rr; if (this.free(px, pz)) { this.pos.x = px; this.pos.z = pz; } else { this.pos.x = ox; this.pos.z = oz; } }
    }
    this.stepAcc += Math.hypot(this.pos.x - ox, this.pos.z - oz);
    if (this.stepAcc > 1.5) { this.stepAcc = 0; this.cb.onStep(); }
  }

  private updateActors(dt: number, t: number) {
    for (const a of this.actors.values()) {
      const v = a.view;
      const dxp = this.pos.x - a.x, dzp = this.pos.z - a.z, dp = Math.hypot(dxp, dzp);
      const near = this.mode === 'play' && dp < 2.4;
      if (v.wander) {
        const talking = this.blocked && near;
        if (a.wait > 0 || (near && dp < 1.3) || talking) { a.wait -= dt; a.walking += (0 - a.walking) * Math.min(1, dt * 8); if (near) a.face = turn(a.face, Math.atan2(dxp, dzp), dt * 5); }
        else {
          const dx = a.tx - a.x, dz = a.tz - a.z, d = Math.hypot(dx, dz);
          if (d < 0.25) { if (Math.random() < 0.3) a.wait = 1 + Math.random() * 4; this.pickNext(a); }
          else { a.x += dx / d * a.speed * dt; a.z += dz / d * a.speed * dt; a.face = turn(a.face, Math.atan2(dx, dz), dt * 6); a.walking += (1 - a.walking) * Math.min(1, dt * 6); }
        }
      } else if (v.pose === 'stand' && near && v.look !== 'cat') a.face = turn(a.face, Math.atan2(dxp, dzp), dt * 3.5);
      else if (v.pose === 'stand' && !near) a.face = turn(a.face, v.face, dt * 2);
      a.ch.root.position.set(a.x, 0, a.z); a.ch.root.rotation.y = a.face;
      animate(a.ch, t, a.walking, v.pose);
    }
  }

  private detect() {
    let best: Prompt | null = null, score = 9;
    const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw);
    const test = (id: string, label: string, verb: string, x: number, z: number, reach: number) => {
      const dx = x - this.pos.x, dz = z - this.pos.z, d = Math.hypot(dx, dz);
      if (d > reach) return;
      const dot = d < 0.5 ? 1 : (dx * fx + dz * fz) / d;
      if (dot < 0.3) return;
      const sc = d + (1 - dot) * 2.2;
      if (sc < score) { score = sc; best = { id, label, verb }; }
    };
    for (const a of this.actors.values()) if (a.view.talk) test(a.view.id, a.view.label, a.view.look === 'cat' ? 'なでる' : a.view.pose === 'lie' ? '様子を見る' : '話す', a.x, a.z, 2.6);
    for (const s of this.spots) test(s.id, s.label, s.verb, s.x, s.z, s.marker ? 2.3 : 2.2);
    this.setPrompt(best);
  }

  private applyAtmosphere(k: number) {
    const v = this.view;
    const tp = v ? v.phase : 0, td = v ? v.dusk : 0;
    this.atmo.phase += (tp - this.atmo.phase) * Math.min(1, k);
    this.atmo.dusk += (td - this.atmo.dusk) * Math.min(1, k);
    const p = Math.max(0, Math.min(2.999, this.atmo.phase)), i = Math.floor(p), f = p - i;
    const A = PAL[i], B = PAL[i + 1] ?? PAL[i];
    const mix = (a: number, b: number, out: THREE.Color) => out.setHex(a).lerp(this.c3.setHex(b), f);
    const dk = Math.max(0, (this.atmo.dusk - 0.35) / 0.65);
    const top = mix(A.top, B.top, this.c1).clone().lerp(this.c3.setHex(DUSK.top), dk * 0.8);
    const bot = mix(A.bot, B.bot, this.c2).clone().lerp(this.c3.setHex(DUSK.bot), dk * 0.75);
    const fog = this.scene.fog as THREE.Fog;
    mix(A.fog, B.fog, fog.color).lerp(this.c3.setHex(DUSK.fog), dk * 0.6);
    fog.near = A.near + (B.near - A.near) * f; fog.far = A.far + (B.far - A.far) * f;
    mix(A.sun, B.sun, this.sun.color).lerp(this.c3.setHex(DUSK.sun), dk * 0.8);
    this.sun.intensity = (A.sunI + (B.sunI - A.sunI) * f) * (1 - dk * 0.6);
    this.hemi.intensity = (A.hemi + (B.hemi - A.hemi) * f) * (1 - dk * 0.4);
    const el = 0.95 - this.atmo.dusk * 0.6;
    this.sun.position.set(Math.cos(el) * 60 - 20, Math.sin(el) * 80, 30);
    this.sun.target.position.set(0, 0, 0);
    // 空のグラデーション
    const g = this.town.sky.geometry as THREE.BufferGeometry, pos = g.attributes.position, col = g.attributes.color as THREE.BufferAttribute;
    const key = top.getHex() * 31 + bot.getHex();
    if (g.userData.key !== key) {
      g.userData.key = key;
      for (let n = 0; n < pos.count; n++) { const h = Math.max(0, Math.min(1, pos.getY(n) / 400 * 1.6 + 0.08)); this.c3.copy(bot).lerp(top, Math.pow(h, 0.55)); col.setXYZ(n, this.c3.r, this.c3.g, this.c3.b); }
      col.needsUpdate = true;
    }
  }
}

function hash(s: string) { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
const off = (id: string, k: number) => ((hash(id + k) % 100) / 100 - 0.5) * 1.2;
function turn(a: number, b: number, k: number) { let d = b - a; d = Math.atan2(Math.sin(d), Math.cos(d)); return a + d * Math.min(1, k); }

const ringMat = new THREE.MeshBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.75, depthWrite: false });
const itemMats: Record<string, THREE.Material> = {
  wood: new THREE.MeshLambertMaterial({ color: 0x7a5530 }), coins: new THREE.MeshLambertMaterial({ color: 0xd8b040, emissive: 0x4a3a10 }),
  herbs: new THREE.MeshLambertMaterial({ color: 0x4f8a3a }), basket: new THREE.MeshLambertMaterial({ color: 0xa8824a }), bundle: new THREE.MeshLambertMaterial({ color: 0xcfc6b0 }),
};
function makeMarker(kind: string): THREE.Object3D {
  const g = new THREE.Group();
  const geo = kind === 'wood' ? new THREE.CylinderGeometry(0.09, 0.09, 0.7, 6).rotateZ(Math.PI / 2)
    : kind === 'coins' ? new THREE.CylinderGeometry(0.1, 0.1, 0.04, 10)
    : kind === 'herbs' ? new THREE.ConeGeometry(0.2, 0.45, 6)
    : kind === 'basket' ? new THREE.CylinderGeometry(0.25, 0.18, 0.25, 8)
    : new THREE.SphereGeometry(0.28, 8, 6).scale(1.2, 0.7, 1);
  const item = new THREE.Mesh(geo, itemMats[kind] ?? itemMats.bundle); item.position.y = kind === 'herbs' ? 0.25 : 0.16;
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.5, 20).rotateX(-Math.PI / 2), ringMat); ring.position.y = 0.03;
  g.add(item, ring);
  return g;
}
