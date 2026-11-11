// マップ定義（MapDef）から中世の町を組み立てる。動かない物は材質ごとに1つのメッシュへ結合し、描画回数を抑える。
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { WorldView } from '../core/types';
import type { BuildingDef, Face, MapDef, PropDef, Rect } from './mapTypes';
import type { Textures } from './textures';

type Geo = THREE.BufferGeometry;
type Put = (mat: string, g: Geo) => void;

const TINTS = [0xe6cfa0, 0xeadcbc, 0xd9ab88, 0xd2c8b2, 0xe2bd72];

function makeMaterials(t: Textures) {
  const L = (o: THREE.MeshLambertMaterialParameters) => new THREE.MeshLambertMaterial(o);
  const m: Record<string, THREE.Material> = {
    stone: L({ map: t.stone }),
    stoneDark: L({ map: t.stone, color: 0xa9a294 }),
    slab: L({ map: t.stone, color: 0xd8d0c0 }),
    roof: L({ map: t.roof, color: 0xb9573a, side: THREE.DoubleSide }),
    wood: L({ map: t.wood, color: 0x8a6238 }),
    woodDark: L({ map: t.wood, color: 0x4d3420 }),
    floorWood: L({ map: t.wood, color: 0x9a7a52 }),
    cobble: L({ map: t.cobble }),
    dirt: L({ map: t.dirt }),
    grass: L({ map: t.grass }),
    cloth: L({ color: 0xe6dfcf }),
    shroud: L({ color: 0xd4cdbb }),
    straw: L({ color: 0xc9ae62 }),
    dark: L({ color: 0x17130f }),
    iron: L({ color: 0x55565a }),
    red: L({ color: 0x8a3030 }),
    green: L({ color: 0x4f6f3a }),
    blue: L({ color: 0x3d5a80 }),
    bread: L({ color: 0xb98a4a }),
    gold: L({ color: 0xd0a030 }),
    leaf: L({ color: 0x2f4a2a }),
    hill: L({ color: 0x7c8a52 }),
    glow: new THREE.MeshBasicMaterial({ color: 0xfff0c8 }),
    flame: new THREE.MeshBasicMaterial({ color: 0xffa040 }),
    smoke: new THREE.MeshBasicMaterial({ color: 0x8a8478, transparent: true, opacity: 0.35, depthWrite: false }),
  };
  TINTS.forEach((c, i) => { m['plaster' + i] = L({ map: t.plaster, color: c }); });
  return m;
}

/** ワールド座標に合わせてUVを貼った箱（テクスチャが伸びない） */
function wbox(w: number, h: number, d: number, tile = 2): THREE.BoxGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv as THREE.BufferAttribute;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) { const k = f * 4 + i; uv.setXY(k, uv.getX(k) * dims[f][0] / tile, uv.getY(k) * dims[f][1] / tile); }
  return g;
}
const at = (g: Geo, x: number, y: number, z: number, ry = 0): Geo => { if (ry) g.rotateY(ry); return g.translate(x, y, z); };

class Batch {
  private parts = new Map<string, Geo[]>();
  put: Put = (mat, g) => {
    const n = g.index ? g.toNonIndexed() : g;
    if (!this.parts.has(mat)) this.parts.set(mat, []);
    this.parts.get(mat)!.push(n);
  };
  /** 位置と向きをずらして置くための put を作る */
  placed(x: number, z: number, ry = 0, y = 0): Put { return (mat, g) => this.put(mat, at(g, x, y, z, ry)); }
  build(mats: Record<string, THREE.Material>, shadows = true): THREE.Group {
    const group = new THREE.Group();
    for (const [k, list] of this.parts) {
      const mesh = new THREE.Mesh(mergeGeometries(list), mats[k]);
      mesh.castShadow = shadows && k !== 'glow' && k !== 'flame'; mesh.receiveShadow = shadows;
      group.add(mesh);
    }
    return group;
  }
}

// 屋根（切妻）。棟が x 方向のものを作り、必要なら回す
function gable(w: number, d: number, rise: number, oh: number): { roof: Geo; ends: Geo } {
  const hw = w / 2 + oh, hd = d / 2, hdo = hd + oh;
  const drop = rise * oh / hd;
  const P: number[] = [], U: number[] = [];
  const slope = Math.hypot(hdo, rise + drop);
  const quad = (z: number) => {
    const v = [[-hw, -drop, z], [hw, -drop, z], [hw, rise, 0], [-hw, rise, 0]];
    const u = [[0, 0], [2 * hw / 2, 0], [2 * hw / 2, slope / 2], [0, slope / 2]];
    for (const i of [0, 1, 2, 0, 2, 3]) { P.push(...v[i]); U.push(...u[i]); }
  };
  quad(-hdo); quad(hdo);
  const roof = new THREE.BufferGeometry();
  roof.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  roof.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  roof.computeVertexNormals();
  const E: number[] = [], EU: number[] = [];
  const x = w / 2;
  for (const [a, b, c] of [[[x, 0, hd], [x, 0, -hd], [x, rise, 0]], [[-x, 0, hd], [-x, rise, 0], [-x, 0, -hd]]]) { E.push(...a, ...b, ...c); EU.push(a[2] / 2, a[1] / 2, b[2] / 2, b[1] / 2, c[2] / 2, c[1] / 2); }
  const ends = new THREE.BufferGeometry();
  ends.setAttribute('position', new THREE.Float32BufferAttribute(E, 3));
  ends.setAttribute('uv', new THREE.Float32BufferAttribute(EU, 2));
  ends.computeVertexNormals();
  return { roof, ends };
}

const FACE: Record<Face, { ry: number; nx: number; nz: number }> = {
  n: { ry: Math.PI, nx: 0, nz: -1 }, s: { ry: 0, nx: 0, nz: 1 }, e: { ry: Math.PI / 2, nx: 1, nz: 0 }, w: { ry: -Math.PI / 2, nx: -1, nz: 0 },
};
/** 建物の面の上の点（along はその面に沿った座標：n/s面はx、e/w面はz） */
function onFace(r: Rect, f: Face, along: number, out = 0) {
  const F = FACE[f];
  const x = f === 'e' ? r.x1 : f === 'w' ? r.x0 : along;
  const z = f === 's' ? r.z1 : f === 'n' ? r.z0 : along;
  return { x: x + F.nx * out, z: z + F.nz * out, ry: F.ry };
}
const faceSpan = (r: Rect, f: Face): [number, number] => (f === 'n' || f === 's' ? [r.x0, r.x1] : [r.z0, r.z1]);

// ---------------- 小物 ----------------
function buildProp(kind: string, put: Put, anim: THREE.Object3D[], mats: Record<string, THREE.Material>) {
  const box = (m: string, w: number, h: number, d: number, x: number, y: number, z: number, ry = 0) => put(m, at(wbox(w, h, d, 1.5), x, y, z, ry));
  const cyl = (m: string, rt: number, rb: number, h: number, x: number, y: number, z: number, seg = 10) => put(m, new THREE.CylinderGeometry(rt, rb, h, seg).translate(x, y, z));
  const ball = (m: string, r: number, x: number, y: number, z: number, sx = 1, sy = 1, sz = 1) => put(m, new THREE.SphereGeometry(r, 8, 6).scale(sx, sy, sz).translate(x, y, z));
  const flame = (x: number, y: number, z: number, s: number) => { const f = new THREE.Mesh(new THREE.ConeGeometry(0.22 * s, 0.6 * s, 6), mats.flame); f.position.set(x, y, z); f.userData.flame = s; anim.push(f); };
  switch (kind) {
    case 'well':
      cyl('stone', 1.0, 1.05, 0.9, 0, 0.45, 0, 12); cyl('dark', 0.82, 0.82, 0.02, 0, 0.91, 0, 12);
      box('wood', 0.14, 2.3, 0.14, -0.95, 1.15, 0); box('wood', 0.14, 2.3, 0.14, 0.95, 1.15, 0); box('wood', 2.3, 0.14, 0.14, 0, 2.25, 0);
      cyl('woodDark', 0.16, 0.13, 0.26, 0.2, 1.05, 0.3, 8);
      break;
    case 'notice':
      box('woodDark', 0.1, 2.1, 0.1, -0.7, 1.05, 0); box('woodDark', 0.1, 2.1, 0.1, 0.7, 1.05, 0); box('wood', 1.5, 1.0, 0.06, 0, 1.55, 0);
      box('cloth', 0.42, 0.55, 0.02, -0.35, 1.58, 0.04); box('cloth', 0.5, 0.38, 0.02, 0.3, 1.66, 0.04); box('cloth', 0.3, 0.3, 0.02, 0.38, 1.26, 0.04);
      break;
    case 'barrel': cyl('wood', 0.36, 0.33, 0.9, 0, 0.45, 0); cyl('iron', 0.375, 0.375, 0.05, 0, 0.25, 0); cyl('iron', 0.385, 0.385, 0.05, 0, 0.68, 0); break;
    case 'crates': box('wood', 0.8, 0.8, 0.8, 0, 0.4, 0.25, 0.2); box('wood', 0.6, 0.6, 0.6, 0.05, 1.1, 0.2, -0.3); box('wood', 0.6, 0.5, 0.6, 0, 0.25, -0.5); break;
    case 'fire':
      cyl('stoneDark', 0.7, 0.75, 0.16, 0, 0.08, 0, 10);
      box('woodDark', 0.9, 0.14, 0.14, 0, 0.22, 0, 0.5); box('woodDark', 0.9, 0.14, 0.14, 0, 0.22, 0, -0.6); box('woodDark', 0.8, 0.14, 0.14, 0, 0.34, 0, 1.6);
      flame(0, 0.65, 0, 1.3); flame(0.15, 0.5, 0.1, 0.8);
      for (let i = 0; i < 4; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.45, 6, 5), mats.smoke); s.userData.smoke = i / 4; s.position.set(0, 1, 0); anim.push(s); }
      break;
    case 'cart':
      box('wood', 1.5, 0.12, 2.6, 0, 0.85, 0); box('wood', 0.08, 0.4, 2.6, -0.75, 1.05, 0); box('wood', 0.08, 0.4, 2.6, 0.75, 1.05, 0);
      put('woodDark', new THREE.CylinderGeometry(0.6, 0.6, 0.1, 12).rotateZ(Math.PI / 2).translate(-0.88, 0.6, 0.2)); put('woodDark', new THREE.CylinderGeometry(0.6, 0.6, 0.1, 12).rotateZ(Math.PI / 2).translate(0.88, 0.6, 0.2));
      box('wood', 0.08, 0.08, 1.6, -0.5, 0.8, 2.0); box('wood', 0.08, 0.08, 1.6, 0.5, 0.8, 2.0);
      ball('shroud', 0.3, -0.3, 1.1, -0.2, 1, 0.7, 2.8); ball('shroud', 0.3, 0.32, 1.12, 0.15, 1, 0.7, 2.6); ball('shroud', 0.28, 0, 1.38, 0, 1, 0.7, 2.7);
      break;
    case 'handcart':
      box('wood', 0.9, 0.1, 1.4, 0, 0.6, 0); box('wood', 0.06, 0.3, 1.4, -0.45, 0.78, 0); box('wood', 0.06, 0.3, 1.4, 0.45, 0.78, 0);
      put('woodDark', new THREE.CylinderGeometry(0.4, 0.4, 0.08, 10).rotateZ(Math.PI / 2).translate(-0.54, 0.4, 0)); put('woodDark', new THREE.CylinderGeometry(0.4, 0.4, 0.08, 10).rotateZ(Math.PI / 2).translate(0.54, 0.4, 0));
      box('wood', 0.06, 0.06, 0.9, -0.35, 0.7, 1.1); box('wood', 0.06, 0.06, 0.9, 0.35, 0.7, 1.1);
      break;
    case 'bench': box('wood', 1.5, 0.08, 0.4, 0, 0.44, 0); box('woodDark', 0.1, 0.44, 0.36, -0.6, 0.22, 0); box('woodDark', 0.1, 0.44, 0.36, 0.6, 0.22, 0); break;
    case 'laundry':
      put('woodDark', new THREE.CylinderGeometry(0.015, 0.015, 3.6, 4).rotateZ(Math.PI / 2).translate(0, 3.7, 0));
      box('cloth', 0.9, 0.8, 0.02, -1.0, 3.3, 0); box('red', 0.6, 0.9, 0.02, 0.1, 3.25, 0); box('cloth', 0.7, 0.6, 0.02, 1.05, 3.4, 0);
      break;
    case 'rubbish': ball('dark', 0.5, 0, 0.12, 0, 1.3, 0.4, 1); box('woodDark', 0.7, 0.1, 0.5, 0.4, 0.1, 0.3, 0.5); ball('straw', 0.3, -0.4, 0.12, 0.3, 1, 0.5, 1); break;
    case 'wool': ball('cloth', 0.5, -0.3, 0.42, 0, 1.1, 0.85, 0.9); ball('cloth', 0.45, 0.45, 0.38, 0.05, 1, 0.85, 0.9); ball('cloth', 0.4, 0.05, 1.0, 0, 1, 0.8, 0.9); break;
    case 'hearth':
      box('stone', 0.9, 1.1, 2.0, 0.1, 0.55, 0); box('dark', 0.5, 0.7, 1.2, -0.18, 0.5, 0); box('stone', 0.7, 1.9, 1.6, 0.2, 2.05, 0);
      box('woodDark', 0.5, 0.1, 0.1, -0.25, 0.2, 0, 0.3); flame(-0.25, 0.42, 0, 0.7); flame(-0.2, 0.36, 0.2, 0.5);
      cyl('iron', 0.2, 0.16, 0.22, -0.3, 0.75, -0.25, 8);
      break;
    case 'table':
      box('wood', 1.9, 0.08, 1.1, 0, 0.76, 0);
      for (const [x, z] of [[-0.85, -0.45], [0.85, -0.45], [-0.85, 0.45], [0.85, 0.45]]) box('woodDark', 0.09, 0.76, 0.09, x, 0.38, z);
      for (const [x, z] of [[-0.5, -0.25], [0.5, -0.2], [0, 0.3]]) cyl('cloth', 0.11, 0.07, 0.07, x, 0.84, z, 8);
      ball('bread', 0.14, 0.05, 0.85, -0.1, 1.3, 0.6, 1); cyl('gold', 0.025, 0.03, 0.2, -0.7, 0.9, 0.3, 5);
      for (const [x, z] of [[-0.5, -1.0], [0.5, -1.0], [0, 1.0]]) { cyl('wood', 0.2, 0.2, 0.06, x, 0.45, z, 8); cyl('woodDark', 0.05, 0.07, 0.45, x, 0.22, z, 5); }
      break;
    case 'bed':
      box('woodDark', 1.9, 0.35, 2.4, 0, 0.2, 0); box('straw', 1.75, 0.16, 2.25, 0, 0.45, 0); box('red', 1.75, 0.08, 1.5, 0, 0.56, -0.35); box('cloth', 1.3, 0.12, 0.4, 0, 0.6, 0.85); box('woodDark', 1.9, 0.9, 0.1, 0, 0.5, 1.2);
      break;
    case 'cot': box('woodDark', 1.9, 0.28, 0.95, 0, 0.16, 0); box('straw', 1.8, 0.14, 0.85, 0, 0.36, 0); box('green', 1.2, 0.07, 0.85, -0.3, 0.46, 0); box('cloth', 0.35, 0.1, 0.6, 0.65, 0.48, 0); break;
    case 'chest':
      box('woodDark', 0.95, 0.6, 0.6, 0, 0.3, 0); box('iron', 0.97, 0.06, 0.62, 0, 0.5, 0);
      ball('straw', 0.3, 0.9, 0.3, 0.1, 1, 1.1, 1); ball('straw', 0.26, 1.35, 0.26, 0.0, 1, 1.1, 1); cyl('wood', 0.2, 0.18, 0.5, 0.95, 0.25, 0.75, 8);
      break;
    case 'shelf':
      box('wood', 1.6, 0.06, 0.3, 0, 1.3, 0); box('wood', 1.6, 0.06, 0.3, 0, 1.8, 0);
      cyl('bread', 0.1, 0.08, 0.2, -0.5, 1.43, 0, 7); cyl('stoneDark', 0.09, 0.09, 0.24, 0, 1.45, 0, 7); cyl('cloth', 0.1, 0.07, 0.12, 0.5, 1.39, 0, 7);
      box('green', 0.08, 0.5, 0.08, -0.4, 2.2, 0.05); box('green', 0.08, 0.45, 0.08, 0.3, 2.2, 0.05);
      break;
    case 'altar':
      box('slab', 2.6, 0.95, 1.0, 0, 0.475, 0); box('cloth', 2.7, 0.04, 1.1, 0, 0.97, 0); box('red', 0.8, 0.5, 0.02, 0, 0.6, 0.52);
      box('gold', 0.1, 1.3, 0.1, 0, 1.65, -0.2); box('gold', 0.6, 0.1, 0.1, 0, 1.95, -0.2);
      cyl('gold', 0.03, 0.05, 0.4, -0.9, 1.2, 0, 6); cyl('gold', 0.03, 0.05, 0.4, 0.9, 1.2, 0, 6); cyl('glow', 0.02, 0.03, 0.12, -0.9, 1.46, 0, 5); cyl('glow', 0.02, 0.03, 0.12, 0.9, 1.46, 0, 5);
      break;
    case 'pew': box('wood', 3.4, 0.07, 0.42, 0, 0.45, 0); box('woodDark', 3.4, 0.5, 0.06, 0, 0.7, -0.2); box('woodDark', 0.08, 0.45, 0.4, -1.6, 0.22, 0); box('woodDark', 0.08, 0.45, 0.4, 1.6, 0.22, 0); break;
    case 'candles':
      cyl('iron', 0.03, 0.2, 1.2, 0, 0.6, 0, 6); box('iron', 0.6, 0.04, 0.3, 0, 1.2, 0);
      for (const x of [-0.2, 0, 0.2]) { cyl('cloth', 0.025, 0.025, 0.2, x, 1.32, 0, 5); cyl('glow', 0.02, 0.03, 0.08, x, 1.46, 0, 5); }
      break;
    case 'body': ball('shroud', 0.3, 0, 0.2, 0, 1, 0.65, 2.9); ball('shroud', 0.16, 0, 0.24, 0.72, 1, 1, 1); break;
  }
}

export interface Town {
  group: THREE.Group;
  sky: THREE.Mesh;
  /** 段階で出たり消えたりする当たり判定 */
  solids: { rect: Rect; active: boolean }[];
  setView(v: WorldView): void;
  update(t: number): void;
  setShadows(on: boolean): void;
  lights: THREE.PointLight[];
}

export function buildTown(map: MapDef, tex: Textures): Town {
  const mats = makeMaterials(tex);
  const group = new THREE.Group();
  const batch = new Batch();
  const anim: THREE.Object3D[] = [];
  const boards: Record<string, THREE.Object3D> = {};
  const phased: { obj: THREE.Object3D; from: number; until: number; solid?: { rect: Rect; active: boolean } }[] = [];
  const solids: Town['solids'] = [];

  // ---- 地面 ----
  const flat = (mat: string, r: Rect, y: number, tile: number) => {
    const w = r.x1 - r.x0, d = r.z1 - r.z0;
    const g = new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2);
    const uv = g.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (r.x0 + uv.getX(i) * w) / tile, (r.z0 + uv.getY(i) * d) / tile);
    batch.put(mat, g.translate((r.x0 + r.x1) / 2, y, (r.z0 + r.z1) / 2));
  };
  flat('grass', { x0: -260, z0: -260, x1: 260, z1: 260 }, -0.2, 6);
  flat('dirt', { x0: -39, z0: -33, x1: 39, z1: 33 }, -0.08, 4);
  flat('dirt', { x0: 38.5, z0: -3.5, x1: 200, z1: 3.5 }, -0.04, 4);
  map.walk.forEach((r, i) => flat(r.floor === 'dirt' ? 'dirt' : r.floor === 'wood' ? 'floorWood' : r.floor === 'slab' ? 'slab' : 'cobble', r, 0.001 * (i + 1), r.floor === 'wood' ? 1.6 : 3));

  // ---- 建物 ----
  const door = (b: BuildingDef, f: Face, along: number, w = 1.2, jut = 0) => {
    const p = onFace(b.rect, f, along, jut);
    const put = batch.placed(p.x, p.z, p.ry);
    put('stoneDark', wbox(w + 0.5, 2.5, 0.12, 1.5).translate(0, 1.25, 0.03));
    put('woodDark', wbox(w, 2.15, 0.1, 1.2).translate(0, 1.075, 0.09));
    put('iron', new THREE.BoxGeometry(0.06, 0.16, 0.05).translate(w * 0.32, 1.05, 0.16));
    put('slab', wbox(w + 0.7, 0.12, 0.5, 1.5).translate(0, 0.06, 0.25));
    // 板で打ちつけた状態（必要になったら見せる）
    const g = boards[b.id] ?? (boards[b.id] = new THREE.Group());
    for (const [rot, y] of [[0.5, 1.25], [-0.5, 1.15], [0.05, 0.6]]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, 0.17, 0.05), mats.wood);
      m.position.set(p.x + FACE[f].nx * 0.2, y, p.z + FACE[f].nz * 0.2); m.rotation.set(0, p.ry, 0); m.rotateZ(rot);
      g.add(m);
    }
  };
  const windowsOn = (b: BuildingDef, f: Face, jut: number) => {
    const [a0, a1] = faceSpan(b.rect, f), len = a1 - a0;
    const n = Math.max(1, Math.floor(len / 3.3));
    for (let i = 0; i < n; i++) {
      const along = a0 + (i + 0.5) * len / n;
      if (b.h >= 5) {
        const p = onFace(b.rect, f, along, jut), put = batch.placed(p.x, p.z, p.ry);
        put('dark', new THREE.BoxGeometry(0.8, 1.05, 0.06).translate(0, 4.25, 0.01));
        put('wood', wbox(0.4, 1.05, 0.05, 1).translate(-0.62, 4.25, 0.04)); put('wood', wbox(0.4, 1.05, 0.05, 1).translate(0.62, 4.25, 0.04));
        put('stoneDark', wbox(1.0, 0.08, 0.16, 1).translate(0, 3.7, 0.06));
        if (b.timber) { put('woodDark', wbox(0.14, b.h - 3, 0.06, 1).translate(-len / n / 2 + 0.07, 3 + (b.h - 3) / 2, 0.02)); put('woodDark', wbox(0.14, b.h - 3, 0.06, 1).translate(len / n / 2 - 0.07, 3 + (b.h - 3) / 2, 0.02)); }
      }
      if (!(b.doors ?? []).some((d) => d.face === f && Math.abs(d.at - along) < 1.6)) {
        const p = onFace(b.rect, f, along, 0), put = batch.placed(p.x, p.z, p.ry);
        put('dark', new THREE.BoxGeometry(0.6, 0.7, 0.06).translate(0, 1.9, 0.01));
        put('iron', new THREE.BoxGeometry(0.04, 0.7, 0.04).translate(-0.12, 1.9, 0.04)); put('iron', new THREE.BoxGeometry(0.04, 0.7, 0.04).translate(0.12, 1.9, 0.04));
      }
    }
  };
  const crenels = (r: Rect, y: number, mat: string) => {
    const w = r.x1 - r.x0, d = r.z1 - r.z0;
    const along = (len: number, fn: (t: number) => void) => { const n = Math.max(2, Math.round(len / 1.7)); for (let i = 0; i < n; i++) fn(-len / 2 + (i + 0.5) * len / n); };
    const cx = (r.x0 + r.x1) / 2, cz = (r.z0 + r.z1) / 2;
    if (w >= d) along(w, (t) => { batch.put(mat, wbox(0.85, 0.9, 0.5).translate(cx + t, y + 0.45, r.z0 + 0.25)); if (d > 2) batch.put(mat, wbox(0.85, 0.9, 0.5).translate(cx + t, y + 0.45, r.z1 - 0.25)); });
    if (d >= w || d > 2) along(d, (t) => { batch.put(mat, wbox(0.5, 0.9, 0.85).translate(r.x0 + 0.25, y + 0.45, cz + t)); if (w > 2) batch.put(mat, wbox(0.5, 0.9, 0.85).translate(r.x1 - 0.25, y + 0.45, cz + t)); });
  };

  for (const b of map.buildings) {
    const r = b.rect, w = r.x1 - r.x0, d = r.z1 - r.z0, cx = (r.x0 + r.x1) / 2, cz = (r.z0 + r.z1) / 2;
    const wall = b.style === 'house' ? 'plaster' + (b.tint ?? 0) : 'stone';
    if (b.style === 'wall') { batch.put('stone', wbox(w, b.h, d, 3).translate(cx, b.h / 2, cz)); crenels(r, b.h, 'stone'); continue; }
    if (b.style === 'tower') {
      batch.put('stone', wbox(w, b.h, d, 3).translate(cx, b.h / 2, cz)); crenels(r, b.h, 'stone');
      if (b.id === 'tower') {
        for (const f of ['n', 's', 'e', 'w'] as Face[]) { const [a0, a1] = faceSpan(r, f); const p = onFace(r, f, (a0 + a1) / 2, 0.01); batch.placed(p.x, p.z, p.ry)('dark', new THREE.BoxGeometry(1.1, 2.2, 0.05).translate(0, b.h - 2.6, 0)); }
        batch.put('roof', new THREE.ConeGeometry(w * 0.55, 3.2, 4).rotateY(Math.PI / 4).translate(cx, b.h + 1.6, cz));
      }
      for (const f of b.windows ?? []) { const [a0, a1] = faceSpan(r, f); const p = onFace(r, f, (a0 + a1) / 2, 0.01); batch.placed(p.x, p.z, p.ry)('dark', new THREE.BoxGeometry(0.5, 1.4, 0.05).translate(0, 6, 0)); }
      continue;
    }
    const T = 0.5;
    if (b.enterable) {
      // 壁を一枚ずつ立て、戸口を開ける
      for (const f of ['n', 's', 'e', 'w'] as Face[]) {
        const [a0, a1] = faceSpan(r, f);
        const d0 = (b.doors ?? []).find((x) => x.face === f);
        const seg = (s0: number, s1: number, y0: number, y1: number) => {
          if (s1 - s0 < 0.05) return;
          const len = s1 - s0, mid = (s0 + s1) / 2;
          const horiz = f === 'n' || f === 's';
          const g = horiz ? wbox(len, y1 - y0, T, 2.5) : wbox(T, y1 - y0, len, 2.5);
          const px = horiz ? mid : f === 'e' ? r.x1 - T / 2 : r.x0 + T / 2;
          const pz = horiz ? (f === 's' ? r.z1 - T / 2 : r.z0 + T / 2) : mid;
          batch.put(wall, g.translate(px, (y0 + y1) / 2, pz));
        };
        if (d0) { const dw = (d0.w ?? 1.2) / 2; const top = b.style === 'church' ? 3.4 : 2.25; seg(a0, d0.at - dw, 0, b.h); seg(d0.at + dw, a1, 0, b.h); seg(d0.at - dw, d0.at + dw, top, b.h); }
        else seg(a0, a1, 0, b.h);
      }
      if (b.ceil && b.style !== 'church') batch.put('woodDark', wbox(w - 2 * T, 0.12, d - 2 * T, 1.2).translate(cx, b.ceil + 0.06, cz));
      for (const d0 of b.doors ?? []) {
        // 開いたままの戸
        const p = onFace(r, d0.face, d0.at + (d0.w ?? 1.2) / 2 + 0.02, 0.5);
        if (b.style !== 'church') batch.put('woodDark', at(wbox(0.08, 2.15, 1.0, 1.2), p.x, 1.08, p.z, p.ry + 0.25));
      }
    } else {
      batch.put(wall, wbox(w, 3, d, 2.5).translate(cx, 1.5, cz));
      const jut = b.style === 'house' ? 0.16 : 0;
      batch.put(wall, wbox(w + jut * 2, b.h - 3, d + jut * 2, 2.5).translate(cx, 3 + (b.h - 3) / 2, cz));
      if (b.style === 'house') batch.put('woodDark', wbox(w + jut * 2 + 0.06, 0.2, d + jut * 2 + 0.06, 1.5).translate(cx, 3, cz));
    }
    const jut = b.style === 'house' && !b.enterable ? 0.16 : 0;
    // 屋根
    const ridge = b.ridge ?? 'x';
    const rw = (ridge === 'x' ? w : d) + jut * 2, rd = (ridge === 'x' ? d : w) + jut * 2;
    const rise = Math.min(b.style === 'church' ? 4.2 : 3.2, rd * 0.34);
    const g = gable(rw, rd, rise, 0.5);
    const ry = ridge === 'x' ? 0 : Math.PI / 2;
    batch.put('roof', at(g.roof, cx, b.h, cz, ry));
    batch.put(wall, at(g.ends, cx, b.h, cz, ry));
    for (const d0 of b.doors ?? []) if (!b.enterable) door(b, d0.face, d0.at, d0.w);
    for (const f of b.windows ?? []) windowsOn(b, f, jut + 0.01);
    if (b.style === 'church') {
      // 正面のバラ窓と十字、内側の明かり窓
      const p = onFace(r, 's', cx, 0.02), put = batch.placed(p.x, p.z, p.ry);
      put('stoneDark', new THREE.CylinderGeometry(1.5, 1.5, 0.12, 20).rotateX(Math.PI / 2).translate(0, 6.6, 0));
      put('glow', new THREE.CylinderGeometry(1.15, 1.15, 0.14, 20).rotateX(Math.PI / 2).translate(0, 6.6, 0));
      put('stoneDark', wbox(3.8, 3.9, 0.14, 2).translate(0, 1.95, 0));
      put('dark', new THREE.BoxGeometry(3.0, 3.4, 0.2).translate(0, 1.7, -0.16));
      batch.put('stone', wbox(0.25, 1.6, 0.25).translate(cx, b.h + rise + 0.8, r.z1 - 0.3)); batch.put('stone', wbox(0.9, 0.25, 0.25).translate(cx, b.h + rise + 1.1, r.z1 - 0.3));
      batch.put('glow', new THREE.CylinderGeometry(1.1, 1.1, 0.06, 20).rotateX(Math.PI / 2).translate(cx, 6.6, r.z1 - T - 0.04));
      for (let z = r.z0 + 3; z < r.z1 - 2; z += 4.2) for (const sx of [-1, 1]) {
        batch.put('glow', new THREE.BoxGeometry(0.06, 2.6, 0.7).translate(cx + sx * (w / 2 - T - 0.04), 4.6, z));
        batch.put('dark', new THREE.BoxGeometry(0.06, 2.6, 0.7).translate(cx + sx * (w / 2 + 0.02), 4.6, z));
      }
    }
    if (b.id === 'home') {
      for (const [x, z, rot] of [[r.x0 + T + 0.04, cz - 1, 0], [cx + 1.5, r.z1 - T - 0.04, Math.PI / 2], [r.x0 + T + 0.04, cz + 2.2, 0]] as [number, number, number][])
        batch.put('glow', at(new THREE.BoxGeometry(0.06, 0.9, 0.7), x, 1.9, z, rot));
    }
  }
  // 門の上のアーチと、西の通用門
  batch.put('stone', wbox(2.5, 3, 6, 3).translate(map.gate.x + 0.4, 6.5, map.gate.z));
  batch.put('woodDark', wbox(0.12, 1.9, 1.1, 1.2).translate(-36.95, 0.95, 0)); batch.put('stoneDark', wbox(0.1, 2.3, 1.6, 1.5).translate(-36.99, 1.15, 0));

  // ---- 小物（常にあるものは結合、段階で変わるものは個別のグループ） ----
  for (const p of map.props as PropDef[]) {
    const dyn = p.fromPhase !== undefined || p.untilPhase !== undefined;
    if (!dyn) {
      const live: THREE.Object3D[] = [];
      buildProp(p.kind, batch.placed(p.x, p.z, p.rot ?? 0), live, mats);
      if (live.length) { const hold = new THREE.Group(); hold.position.set(p.x, 0, p.z); hold.rotation.y = p.rot ?? 0; live.forEach((o) => hold.add(o)); group.add(hold); anim.push(...live); }
      continue;
    }
    const b2 = new Batch(); const local: THREE.Object3D[] = [];
    buildProp(p.kind, b2.put, local, mats);
    const g = b2.build(mats, false);
    for (const o of local) g.add(o);
    anim.push(...local);
    g.position.set(p.x, 0, p.z); g.rotation.y = p.rot ?? 0;
    const solid = p.solid ? { rect: { x0: p.x - p.solid[0] / 2, z0: p.z - p.solid[1] / 2, x1: p.x + p.solid[0] / 2, z1: p.z + p.solid[1] / 2 }, active: false } : undefined;
    if (solid) solids.push(solid);
    phased.push({ obj: g, from: p.fromPhase ?? 0, until: p.untilPhase ?? 99, solid });
    group.add(g);
  }
  // ---- 露店 ----
  const stalls: Record<string, { awning: THREE.Object3D; goods: THREE.Object3D[] }> = {};
  for (const s of map.stalls) {
    const put = batch.placed(s.x, s.z, s.face);
    put('wood', wbox(3, 0.1, 1.2, 1.5).translate(0, 0.9, 0));
    for (const [x, z] of [[-1.4, -0.5], [1.4, -0.5], [-1.4, 0.5], [1.4, 0.5]]) put('woodDark', wbox(0.1, z < 0 ? 2.7 : 2.3, 0.1, 1).translate(x, (z < 0 ? 2.7 : 2.3) / 2, z));
    const holder = new THREE.Group(); holder.position.set(s.x, 0, s.z); holder.rotation.y = s.face; group.add(holder);
    const awn = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.05, 1.7), new THREE.MeshLambertMaterial({ color: s.color }));
    awn.position.set(0, 2.5, 0.05); awn.rotation.x = 0.25; holder.add(awn);
    const goods: THREE.Object3D[] = [];
    const add = (mat: string, g: Geo) => { const m = new THREE.Mesh(g, mats[mat]); holder.add(m); goods.push(m); };
    for (let i = 0; i < 8; i++) {
      const x = -1.2 + (i % 4) * 0.8, z = i < 4 ? -0.25 : 0.28;
      if (s.goods === 'bread') add(i % 3 === 2 ? 'straw' : 'bread', new THREE.SphereGeometry(i % 3 === 2 ? 0.22 : 0.17, 7, 5).scale(1.3, i % 3 === 2 ? 1.2 : 0.6, 1).translate(x, i % 3 === 2 ? 1.18 : 1.04, z));
      else if (s.goods === 'herbs') add(i % 2 ? 'green' : 'woodDark', i % 2 ? new THREE.ConeGeometry(0.13, 0.4, 6).rotateZ(1.3).translate(x, 1.03, z) : new THREE.BoxGeometry(0.4, 0.12, 0.25).translate(x, 1.01, z));
      else if (s.goods === 'cloth') add(['red', 'blue', 'cloth', 'green'][i % 4], new THREE.CylinderGeometry(0.11, 0.11, 0.7, 8).rotateX(Math.PI / 2).translate(x, 1.06, z));
      else add(['green', 'cloth', 'red', 'bread'][i % 4], new THREE.SphereGeometry(0.13, 6, 5).translate(x, 1.07, z));
    }
    stalls[s.id] = { awning: awn, goods };
  }

  // ---- 門の扉 ----
  const leaves = [-1, 1].map((side) => {
    const pivot = new THREE.Group(); pivot.position.set(map.gate.x, 0, map.gate.z + side * 3);
    const m = new THREE.Mesh(wbox(0.22, 5, 3, 1.5).translate(0, 2.5, -side * 1.5), mats.woodDark); pivot.add(m);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.25, 2.8).translate(-0.16, 1.6, -side * 1.5), mats.iron); pivot.add(bar);
    group.add(pivot); return { pivot, side };
  });

  // ---- 遠景：丘と糸杉 ----
  let sd = 11; const rr = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
  for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2 + rr(), dist = 150 + rr() * 80, rad = 60 + rr() * 50; batch.put('hill', new THREE.SphereGeometry(rad, 10, 6).scale(1, 0.32 + rr() * 0.15, 1).translate(Math.cos(a) * dist, -6, Math.sin(a) * dist)); }
  for (let i = 0; i < 46; i++) {
    const a = rr() * Math.PI * 2, dist = 52 + rr() * 60, x = Math.cos(a) * dist * 1.15, z = Math.sin(a) * dist;
    if (Math.abs(z) < 5 && x > 0) continue;
    const h = 7 + rr() * 6;
    batch.put('leaf', new THREE.ConeGeometry(0.9 + rr() * 0.5, h, 6).translate(x, h / 2 + 0.6, z)); batch.put('woodDark', new THREE.CylinderGeometry(0.15, 0.2, 1.2, 5).translate(x, 0.6, z));
  }

  const staticGroup = batch.build(mats);
  group.add(staticGroup);
  for (const g of Object.values(boards)) { g.visible = false; group.add(g); }

  // ---- 空 ----
  const skyGeo = new THREE.SphereGeometry(400, 16, 10);
  skyGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(skyGeo.attributes.position.count * 3), 3));
  const sky = new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
  sky.renderOrder = -1;
  group.add(sky);

  // ---- 屋内の灯り ----
  const hearth = new THREE.PointLight(0xffa860, 14, 11, 1.6); hearth.position.set(-27, 1.3, 7.5);
  const altar = new THREE.PointLight(0xffd9a0, 22, 20, 1.5); altar.position.set(0, 3, -25);
  group.add(hearth, altar);

  let phase = -1;
  return {
    group, sky, solids, lights: [hearth, altar],
    setView(v) {
      if (v.phase !== phase) {
        phase = v.phase;
        for (const p of phased) { const on = phase >= p.from && phase < p.until; p.obj.visible = on; if (p.solid) p.solid.active = on; }
      }
      for (const [id, g] of Object.entries(boards)) g.visible = v.boarded.includes(id);
      for (const [id, st] of Object.entries(stalls)) {
        const state = v.stalls[id] ?? 'closed';
        st.awning.visible = state !== 'closed';
        st.goods.forEach((g, i) => { g.visible = state === 'open' || (state === 'sparse' && i % 3 === 0); });
      }
      for (const l of leaves) l.pivot.rotation.y = v.gateClosed ? 0 : -l.side * 1.35;
    },
    update(t) {
      for (const o of anim) {
        if (o.userData.flame) { const s = o.userData.flame as number; o.scale.set(1 + Math.sin(t * 13 + s * 9) * 0.15, 1 + Math.sin(t * 17 + s * 5) * 0.25, 1 + Math.cos(t * 11 + s) * 0.15); }
        else if (o.userData.smoke !== undefined) { const k = (t * 0.22 + o.userData.smoke) % 1; o.position.set(Math.sin(k * 5 + o.userData.smoke * 9) * 0.5 * k, 0.9 + k * 6, k * 1.2); o.scale.setScalar(0.5 + k * 2.2); (o as THREE.Mesh).visible = true; }
      }
      hearth.intensity = 13 + Math.sin(t * 9) * 1.5 + Math.sin(t * 23) * 0.8;
    },
    setShadows(on) { staticGroup.traverse((o) => { if ((o as THREE.Mesh).isMesh) { o.castShadow = on; o.receiveShadow = on; } }); },
  };
}
