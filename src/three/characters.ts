// 人物の簡易3Dモデル。部品を頂点カラーつきで結合し、1人あたり数回の描画で済ませる。
// 本格的なモデルに差し替えるときは buildCharacter の中身だけを入れ替えればよい。
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export interface Look {
  kind?: 'human' | 'cat';
  /** 身長（m） */
  h: number;
  /** 体格。1が標準 */
  w?: number;
  skin: number;
  hair: number;
  hairStyle?: 'short' | 'long' | 'bald' | 'tonsure' | 'bun' | 'bowl' | string;
  head?: 'coif' | 'veil' | 'wimple' | 'hood' | 'cap' | 'straw' | 'helmet' | string;
  headColor?: number;
  beard?: number;
  top: number;
  bottom?: number;
  /** 丈の長い服（女性の服、聖職者や医師の長衣） */
  long?: boolean;
  apron?: number;
  cloak?: number;
  belt?: number;
  /** 前かがみの度合い */
  stoop?: number;
  prop?: 'spear' | 'staff' | 'basket' | string;
  child?: boolean;
}

const material = new THREE.MeshLambertMaterial({ vertexColors: true });
const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false });
const shadowGeo = new THREE.CircleGeometry(0.38, 12).rotateX(-Math.PI / 2);

type Part = THREE.BufferGeometry;
function tint(g: THREE.BufferGeometry, color: number): Part {
  const c = new THREE.Color(color);
  const ng = g.index ? g.toNonIndexed() : g;
  const n = ng.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  ng.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  ng.deleteAttribute('uv');
  return ng;
}
const box = (w: number, h: number, d: number, x: number, y: number, z: number, color: number) => tint(new THREE.BoxGeometry(w, h, d).translate(x, y, z), color);
const cyl = (rt: number, rb: number, h: number, x: number, y: number, z: number, color: number, seg = 8) => tint(new THREE.CylinderGeometry(rt, rb, h, seg).translate(x, y, z), color);
const ball = (r: number, x: number, y: number, z: number, color: number, sy = 1, sz = 1) => tint(new THREE.SphereGeometry(r, 10, 8).scale(1, sy, sz).translate(x, y, z), color);
const dome = (r: number, x: number, y: number, z: number, color: number, sy = 1) => tint(new THREE.SphereGeometry(r, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.55).scale(1, sy, 1).translate(x, y, z), color);
const mesh = (parts: Part[]) => new THREE.Mesh(mergeGeometries(parts), material);

export interface Character {
  root: THREE.Group;
  /** 体（向き・姿勢を変える部分） */
  body: THREE.Group;
  armL?: THREE.Object3D; armR?: THREE.Object3D; legL?: THREE.Object3D; legR?: THREE.Object3D;
  height: number;
  phase: number;
}

function buildCat(look: Look): Character {
  const root = new THREE.Group(), body = new THREE.Group();
  const c = look.top;
  body.add(mesh([
    ball(0.13, 0, 0.13, 0, c, 1, 1.5), ball(0.085, 0, 0.26, 0.15, c),
    box(0.04, 0.07, 0.03, -0.045, 0.34, 0.15, c), box(0.04, 0.07, 0.03, 0.045, 0.34, 0.15, c),
    cyl(0.018, 0.022, 0.3, 0.1, 0.1, -0.18, c, 5).rotateZ(-0.9),
    box(0.02, 0.02, 0.01, -0.03, 0.275, 0.228, 0xd8c040), box(0.02, 0.02, 0.01, 0.03, 0.275, 0.228, 0xd8c040),
  ]));
  root.add(body);
  return { root, body, height: 0.35, phase: 0 };
}

export function buildCharacter(look: Look): Character {
  if (look.kind === 'cat') return buildCat(look);
  const H = look.h, W = look.w ?? 1, child = !!look.child;
  const headR = child ? 0.115 : 0.105;
  const headY = H - headR - 0.01;
  const shoulderY = headY - headR - 0.07;
  const hipY = H * 0.5;
  const sw = 0.2 * W * (child ? 0.8 : 1); // 肩の半幅
  const legColor = look.bottom ?? 0x4a4038;
  const parts: Part[] = [];

  // 胴と服
  const torsoH = shoulderY - hipY + 0.06;
  parts.push(cyl(sw * 0.82, sw * 0.95 * (W > 1.15 ? 1.15 : 1), torsoH, 0, hipY + torsoH / 2, 0, look.top, 10));
  parts.push(ball(sw * 0.86, 0, shoulderY + 0.02, 0, look.top, 0.45, 0.8));
  if (look.long) parts.push(cyl(sw * 0.95, sw * 1.45, hipY - 0.04, 0, hipY / 2 + 0.04, 0, look.top, 10));
  else parts.push(cyl(sw * 0.97, sw * 1.2, 0.26 * (H / 1.7), 0, hipY - 0.1 * (H / 1.7), 0, look.top, 10));
  if (look.belt !== undefined) parts.push(cyl(sw * 0.99, sw * 0.99, 0.05, 0, hipY + 0.07, 0, look.belt, 10));
  if (look.apron !== undefined) parts.push(box(sw * 1.3, (look.long ? hipY * 0.75 : 0.5) + 0.2, 0.02, 0, hipY - (look.long ? hipY * 0.25 : 0.1), sw * (look.long ? 1.18 : 1.02), look.apron));
  if (look.cloak !== undefined) parts.push(tint(new THREE.CylinderGeometry(sw * 1.05, sw * 1.5, shoulderY - hipY * 0.55, 10, 1, true, Math.PI * 0.5, Math.PI).translate(0, (shoulderY + hipY * 0.55) / 2, -0.03), look.cloak));

  // 首と頭
  parts.push(cyl(0.045, 0.05, 0.08, 0, headY - headR - 0.02, 0, look.skin, 6));
  parts.push(ball(headR, 0, headY, 0, look.skin, 1.12, 1));
  parts.push(box(0.022, 0.022, 0.012, -0.038, headY + 0.012, headR * 0.93, 0x1a1410), box(0.022, 0.022, 0.012, 0.038, headY + 0.012, headR * 0.93, 0x1a1410));
  parts.push(box(0.02, 0.035, 0.03, 0, headY - 0.015, headR * 0.98, look.skin));
  // 髪
  const hs = look.hairStyle ?? 'short';
  if (hs !== 'bald' && hs !== 'tonsure') parts.push(dome(headR * 1.06, 0, headY + 0.012, -0.008, look.hair, 1.12));
  if (hs === 'tonsure') parts.push(cyl(headR * 1.04, headR * 1.04, 0.045, 0, headY + 0.03, -0.005, look.hair, 10));
  if (hs === 'bald') parts.push(cyl(headR * 1.03, headR * 1.03, 0.04, 0, headY - 0.005, -0.012, look.hair, 10));
  if (hs === 'long') parts.push(box(headR * 1.7, 0.2, 0.05, 0, headY - 0.1, -headR * 0.8, look.hair));
  if (hs === 'bun') parts.push(ball(0.05, 0, headY + 0.02, -headR * 1.05, look.hair));
  if (hs === 'bowl') parts.push(cyl(headR * 1.08, headR * 1.1, 0.07, 0, headY + 0.015, -0.005, look.hair, 10));
  if (look.beard !== undefined) parts.push(ball(headR * 0.72, 0, headY - headR * 0.72, headR * 0.42, look.beard, 0.8, 0.7));
  // かぶり物
  const hc = look.headColor ?? 0xd8d0c0;
  switch (look.head) {
    case 'coif': parts.push(dome(headR * 1.1, 0, headY + 0.005, -0.012, hc, 1.2)); break;
    case 'veil': parts.push(dome(headR * 1.14, 0, headY + 0.01, -0.01, hc, 1.15), box(headR * 2.1, 0.3, 0.04, 0, headY - 0.14, -headR * 0.95, hc)); break;
    case 'wimple': parts.push(dome(headR * 1.14, 0, headY + 0.01, -0.01, hc, 1.15), box(headR * 2.1, 0.26, 0.04, 0, headY - 0.12, -headR * 0.95, hc), cyl(headR * 1.02, sw * 0.7, 0.1, 0, headY - headR - 0.03, 0, hc, 10)); break;
    case 'hood': parts.push(dome(headR * 1.2, 0, headY, -0.02, hc, 1.2), cyl(headR * 1.1, sw * 1.05, 0.13, 0, shoulderY + 0.04, 0, hc, 10)); break;
    case 'cap': parts.push(cyl(headR * 0.95, headR * 1.08, 0.07, 0, headY + headR * 0.95, 0, hc, 10)); break;
    case 'straw': parts.push(cyl(headR * 2.1, headR * 2.2, 0.015, 0, headY + headR * 0.75, 0, hc, 14), cyl(headR * 0.8, headR * 1.0, 0.09, 0, headY + headR * 1.05, 0, hc, 10)); break;
    case 'helmet': parts.push(dome(headR * 1.13, 0, headY + 0.01, 0, hc, 1.15), cyl(headR * 1.3, headR * 1.35, 0.02, 0, headY + 0.02, 0, hc, 12)); break;
  }

  const body = new THREE.Group();
  body.add(mesh(parts));
  const root = new THREE.Group();
  root.add(body);

  // 腕（肩を支点に振る）
  const armLen = (shoulderY - hipY) * 1.05 + 0.12;
  const arm = (side: number) => {
    const g = new THREE.Group();
    g.position.set(side * (sw + 0.035), shoulderY, 0);
    g.add(mesh([cyl(0.045 * W, 0.04 * W, armLen, 0, -armLen / 2, 0, look.top, 6), ball(0.042, 0, -armLen - 0.02, 0, look.skin)]));
    g.rotation.z = side * 0.07;
    body.add(g);
    return g;
  };
  const armL = arm(-1), armR = arm(1);
  // 脚
  let legL: THREE.Object3D | undefined, legR: THREE.Object3D | undefined;
  const leg = (side: number) => {
    const g = new THREE.Group();
    g.position.set(side * sw * 0.45, hipY, 0);
    const len = hipY;
    g.add(mesh([cyl(0.06 * W, 0.045 * W, len - 0.04, 0, -len / 2 + 0.02, 0, legColor, 6), box(0.085, 0.06, 0.2, 0, -len + 0.03, 0.04, 0x2e2218)]));
    body.add(g);
    return g;
  };
  if (!look.long) { legL = leg(-1); legR = leg(1); }
  else body.add(mesh([box(0.085, 0.05, 0.16, -0.07, 0.025, 0.08, 0x2e2218), box(0.085, 0.05, 0.16, 0.07, 0.025, 0.08, 0x2e2218)]));

  // 持ち物
  if (look.prop === 'spear') {
    armR.add(mesh([cyl(0.014, 0.014, 2.2, 0, -armLen + 0.55, 0.05, 0x5a4028, 5), tint(new THREE.ConeGeometry(0.035, 0.2, 5).translate(0, -armLen + 1.75, 0.05), 0xa8adb4)]));
  } else if (look.prop === 'staff') {
    armR.add(mesh([cyl(0.015, 0.018, 1.25, 0, -armLen + 0.35, 0.06, 0x5a4028, 5)]));
    armR.rotation.x = -0.25;
  } else if (look.prop === 'basket') {
    armL.add(mesh([cyl(0.13, 0.1, 0.13, 0, -armLen - 0.1, 0.05, 0x9a7a45, 8), tint(new THREE.TorusGeometry(0.1, 0.012, 4, 10, Math.PI).translate(0, -armLen - 0.04, 0.05), 0x7a5a30)]));
  }
  if (look.stoop) body.rotation.x = look.stoop;

  const sh = new THREE.Mesh(shadowGeo, shadowMat);
  sh.position.y = 0.02; sh.scale.setScalar(W);
  root.add(sh);
  return { root, body, armL, armR, legL, legR, height: H, phase: Math.random() * 6 };
}

/** 姿勢を当てはめる */
export function setPose(c: Character, pose: 'stand' | 'lie' | 'sit', look: Look) {
  const b = c.body;
  b.rotation.set(look.stoop ?? 0, 0, 0); b.position.set(0, 0, 0);
  if (c.legL && c.legR) { c.legL.rotation.x = 0; c.legR.rotation.x = 0; }
  if (pose === 'lie') { b.rotation.x = -Math.PI / 2; b.position.set(0, 0.22, c.height * 0.5); }
  else if (pose === 'sit' && look.kind !== 'cat') {
    b.position.y = -c.height * 0.2;
    if (c.legL && c.legR) { c.legL.rotation.x = -1.4; c.legR.rotation.x = -1.4; }
  }
}

/** 歩行と立ち姿の小さな動き */
export function animate(c: Character, t: number, walking: number, pose: string) {
  if (pose !== 'stand') return;
  const sw = Math.sin(t * 7 + c.phase) * 0.55 * walking;
  if (c.legL && c.legR) { c.legL.rotation.x = sw; c.legR.rotation.x = -sw; }
  if (c.armL && c.armR) { c.armL.rotation.x = -sw * 0.6; if (!c.armR.children.length || c.armR.children.length < 2) c.armR.rotation.x = sw * 0.6; }
  c.body.position.y = walking > 0.1 ? Math.abs(Math.sin(t * 7 + c.phase)) * 0.025 : Math.sin(t * 1.6 + c.phase) * 0.004;
}
