// 架空の町カステルヴェント（トスカーナの丘の上の小さな町）。座標はメートル、xが東、zが南。
import type { MapDef } from '../../three/mapTypes';

const R = (x0: number, z0: number, x1: number, z1: number) => ({ x0, z0, x1, z1 });

export const map: MapDef = {
  bounds: R(-42, -36, 42, 36),
  walk: [
    R(-12, -9, 12, 9), // 広場（市場）
    { ...R(-7, -10, 7, -9), floor: 'slab' }, // 教会の前
    { ...R(-1.5, -10.5, 1.5, -10), floor: 'slab', inside: true }, // 教会の扉
    { ...R(-6.5, -29.5, 6.5, -10.5), floor: 'slab', inside: true }, // 教会の中
    R(-37, -2.5, -12, 2.5), // 西の通り
    R(12, -3, 38.5, 3), // 東の大通り〜門
    { ...R(-24.5, 2.5, -21, 31), floor: 'dirt' }, // 路地
    { ...R(-21, 26, -13, 31), floor: 'dirt' }, // 路地奥の空き地
    { ...R(-30.5, 2.5, -29, 3), floor: 'wood', inside: true }, // 自宅の戸口
    { ...R(-34.5, 3, -25.5, 12), floor: 'wood', inside: true }, // 自宅の中
  ],
  buildings: [
    { id: 'home', rect: R(-35, 2.5, -25, 12.5), h: 5.6, style: 'house', ridge: 'x', tint: 0, timber: true, enterable: true, ceil: 3, doors: [{ face: 'n', at: -29.75, w: 1.5 }], windows: ['n', 'e'] },
    { id: 'teresa', rect: R(-21, 2.5, -12, 11), h: 5.8, style: 'house', ridge: 'x', tint: 1, doors: [{ face: 'n', at: -17 }], windows: ['n', 'e', 'w'] },
    { id: 'pietro', rect: R(-35, 12.5, -24.5, 23), h: 5.4, style: 'house', ridge: 'z', tint: 2, timber: true, doors: [{ face: 'e', at: 18 }], windows: ['e'] },
    { id: 'houseB', rect: R(-35, 23, -24.5, 32), h: 6, style: 'house', ridge: 'z', tint: 3, doors: [{ face: 'e', at: 27 }], windows: ['e'] },
    { id: 'houseA1', rect: R(-21, 11, -12, 18.5), h: 6.4, style: 'house', ridge: 'z', tint: 4, timber: true, doors: [{ face: 'w', at: 15 }], windows: ['w'] },
    { id: 'empty', rect: R(-21, 18.5, -12, 26), h: 5.6, style: 'house', ridge: 'z', tint: 0, doors: [{ face: 's', at: -17 }, { face: 'w', at: 22 }], windows: ['w', 's'] },
    { id: 'houseC', rect: R(-13, 26, -1, 32), h: 6, style: 'stone', ridge: 'x', windows: ['w'] },
    { id: 'n1', rect: R(-37, -12, -29, -2.5), h: 6, style: 'house', ridge: 'x', tint: 2, doors: [{ face: 's', at: -33 }], windows: ['s'] },
    { id: 'n2', rect: R(-29, -13, -20.5, -2.5), h: 6.8, style: 'house', ridge: 'x', tint: 1, timber: true, doors: [{ face: 's', at: -25 }], windows: ['s'] },
    { id: 'n3', rect: R(-20.5, -11.5, -12, -2.5), h: 5.6, style: 'house', ridge: 'x', tint: 3, doors: [{ face: 's', at: -16 }], windows: ['s', 'e'] },
    { id: 'canonica', rect: R(-12, -19, -7, -9), h: 5.2, style: 'stone', ridge: 'z', doors: [{ face: 's', at: -9.5 }], windows: ['s'] },
    { id: 'church', rect: R(-7, -30, 7, -10), h: 9.5, style: 'church', ridge: 'z', enterable: true, ceil: 8.5, doors: [{ face: 's', at: 0, w: 3 }] },
    { id: 'tower', rect: R(7, -17, 12, -9), h: 18, style: 'tower', windows: ['s'] },
    { id: 'workshop', rect: R(12, -14, 25, -3), h: 6.4, style: 'house', ridge: 'x', tint: 4, timber: true, doors: [{ face: 's', at: 19, w: 1.8 }], windows: ['s', 'w'] },
    { id: 'e1', rect: R(25, -12, 36, -3), h: 5.6, style: 'house', ridge: 'x', tint: 1, doors: [{ face: 's', at: 30 }], windows: ['s'] },
    { id: 'e2', rect: R(12, 3, 23.5, 13), h: 6.2, style: 'house', ridge: 'x', tint: 0, timber: true, doors: [{ face: 'n', at: 17 }], windows: ['n', 'w'] },
    { id: 'guard', rect: R(23.5, 3, 36, 11), h: 5, style: 'stone', ridge: 'x', doors: [{ face: 'n', at: 31 }], windows: ['n'] },
    { id: 'tavern', rect: R(-12, 9, 0, 19), h: 6.6, style: 'house', ridge: 'x', tint: 3, timber: true, doors: [{ face: 'n', at: -6, w: 1.6 }], windows: ['n'] },
    { id: 's2', rect: R(0, 9, 12, 18), h: 5.6, style: 'house', ridge: 'x', tint: 2, doors: [{ face: 'n', at: 6 }], windows: ['n'] },
    // 町を囲む壁
    { id: 'wallN', rect: R(-39, -33.5, 39, -32), h: 8, style: 'wall' },
    { id: 'wallS', rect: R(-39, 32, 39, 33.5), h: 8, style: 'wall' },
    { id: 'wallW', rect: R(-39, -33.5, -37, 33.5), h: 8, style: 'wall' },
    { id: 'wallE1', rect: R(38, -33.5, 39.5, -3), h: 8, style: 'wall' },
    { id: 'wallE2', rect: R(38, 3, 39.5, 33.5), h: 8, style: 'wall' },
    { id: 'gateT1', rect: R(36.5, -7, 40.5, -3), h: 12, style: 'tower' },
    { id: 'gateT2', rect: R(36.5, 3, 40.5, 7), h: 12, style: 'tower' },
  ],
  props: [
    // 広場
    { kind: 'well', x: 0, z: 0.5, solid: [2.5, 2.5] },
    { kind: 'notice', x: 10.6, z: -8.6, rot: 0 },
    { kind: 'barrel', x: -11, z: 7.6, solid: [1, 1] },
    { kind: 'barrel', x: -10, z: 8.2, solid: [1, 1] },
    { kind: 'crates', x: 11, z: 7.8, solid: [1, 1.5], untilPhase: 3 },
    { kind: 'fire', x: -3.5, z: 1.5, fromPhase: 2, solid: [1.5, 1.5] },
    { kind: 'fire', x: 24, z: 0, fromPhase: 3, solid: [1.5, 1.5] },
    { kind: 'cart', x: 8.5, z: -1.5, rot: 0.5, fromPhase: 2, solid: [2, 3] },
    { kind: 'bench', x: -17, z: 2.1, rot: 0 },
    // 路地
    { kind: 'barrel', x: -21.6, z: 9, solid: [1, 1] },
    { kind: 'crates', x: -24, z: 24.5, solid: [1, 1.5] },
    { kind: 'handcart', x: -24, z: 15.2, rot: 0.2, solid: [1, 2] },
    { kind: 'laundry', x: -22.75, z: 12, untilPhase: 2 },
    { kind: 'laundry', x: -22.75, z: 21, untilPhase: 3 },
    { kind: 'rubbish', x: -14.5, z: 30, fromPhase: 1 },
    // 東の通り
    { kind: 'barrel', x: 13, z: -2.4, solid: [1, 1] },
    { kind: 'wool', x: 22.5, z: -2.3, solid: [1.5, 1], untilPhase: 3 },
    { kind: 'crates', x: 31.5, z: 2.3, solid: [1, 1.5] },
    // 自宅
    { kind: 'hearth', x: -26, z: 7.5, solid: [1, 2] },
    { kind: 'table', x: -30, z: 8, solid: [2, 1.5] },
    { kind: 'bed', x: -33.5, z: 10.75, solid: [2, 2.5] },
    { kind: 'cot', x: -26.5, z: 11.4, solid: [2, 1] },
    { kind: 'chest', x: -33.9, z: 3.5, solid: [1, 1] },
    { kind: 'shelf', x: -27.5, z: 3.25 },
    // 教会
    { kind: 'altar', x: 0, z: -28.2, solid: [3, 1.5] },
    { kind: 'pew', x: -3.5, z: -14, solid: [3.5, 0.5] },
    { kind: 'pew', x: 3.5, z: -14, solid: [3.5, 0.5] },
    { kind: 'pew', x: -3.5, z: -17, solid: [3.5, 0.5] },
    { kind: 'pew', x: 3.5, z: -17, solid: [3.5, 0.5] },
    { kind: 'pew', x: -3.5, z: -20, solid: [3.5, 0.5] },
    { kind: 'pew', x: 3.5, z: -20, solid: [3.5, 0.5] },
    { kind: 'candles', x: -5.6, z: -26 },
    { kind: 'candles', x: 5.6, z: -26 },
    // 流行が進むと、戸口に亡骸が出される
    { kind: 'body', x: -13.4, z: 2, rot: 1.5, fromPhase: 2 },
    { kind: 'body', x: -21.6, z: 19.5, rot: 0.1, fromPhase: 2 },
    { kind: 'body', x: 21, z: 2.5, rot: 1.6, fromPhase: 2 },
    { kind: 'body', x: -31.5, z: -2, rot: 1.5, fromPhase: 3 },
    { kind: 'body', x: 28.5, z: -2.5, rot: 1.6, fromPhase: 3 },
    { kind: 'body', x: -24, z: 28, rot: 0, fromPhase: 3 },
    { kind: 'body', x: 2.5, z: 8.4, rot: 1.5, fromPhase: 3 },
  ],
  stalls: [
    { id: 'beppe', x: -6, z: -5, face: 0, color: 0xa8402f, goods: 'bread' },
    { id: 'gina', x: 6, z: -5, face: 0, color: 0x4d6b3c, goods: 'herbs' },
    { id: 'cloth', x: -6, z: 6, face: Math.PI, color: 0x3d5a80, goods: 'cloth' },
    { id: 'veg', x: 6, z: 6, face: Math.PI, color: 0xc9a13b, goods: 'veg' },
  ],
  zones: [
    { id: 'home', rect: R(-34.5, 3, -25.5, 12) },
    { id: 'market', rect: R(-11, -8, 11, 8) },
    { id: 'church', rect: R(-6.5, -29.5, 6.5, -11.5) },
    { id: 'alley', rect: R(-24.5, 6, -13, 31) },
    { id: 'gate', rect: R(28, -3, 38.5, 3) },
    { id: 'street', rect: R(-37, -2.5, -14, 2.5) },
  ],
  waypoints: [
    { x: -34, z: 0 }, { x: -22.75, z: 0 }, { x: -14, z: 0 }, { x: -9, z: 0 }, { x: 0, z: -6.8 }, { x: 9, z: 0 },
    { x: 0, z: 8 }, { x: 20, z: 0.5 }, { x: 33, z: -0.5 }, { x: -22.75, z: 14 }, { x: -22.75, z: 27.5 }, { x: -17, z: 28.5 },
  ],
  links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [3, 6], [6, 5], [5, 7], [7, 8], [1, 9], [9, 10], [10, 11]],
  spotPoints: [
    { x: -24, z: 7 }, { x: -21.5, z: 16.5 }, { x: -24, z: 21.5 }, { x: -19, z: 30.3 }, { x: -14, z: 27 },
    { x: -36.3, z: -2 }, { x: -33, z: 2 }, { x: -11.3, z: -8.3 }, { x: 11.3, z: 5 }, { x: 30, z: -2.5 },
    { x: 15.5, z: 2.5 }, { x: -6.3, z: -9.6 }, { x: 5.8, z: -12 }, { x: 34.5, z: -2.5 }, { x: -18.5, z: -2 },
  ],
  spawn: { x: -32.3, z: 9.2, yaw: -0.93 },
  gate: { x: 38.6, z: 0 },
};

/** NPC・調べられる物の定位置。face は向き（0=南、π=北、π/2=東、-π/2=西） */
export const anchors = {
  lucia: { x: -27.6, z: 5.4, face: -Math.PI / 2 },
  luciaSick: { x: -27.6, z: 9.4, face: Math.PI / 2 },
  marco: { x: -32, z: 6.2, face: Math.PI * 0.75 },
  marcoSick: { x: -26.5, z: 10.35, face: Math.PI / 2 },
  pippo: { x: -31, z: 5 , face: 2.4 },
  cat: { x: -27.2, z: 7.4 },
  bed: { x: -33.5, z: 9.2 },
  pantry: { x: -33.3, z: 3.6 },
  beppe: { x: -6, z: -6.4, face: 0 },
  gina: { x: 6, z: -6.4, face: 0 },
  clothVendor: { x: -6, z: 7.4, face: Math.PI },
  vegVendor: { x: 6, z: 7.4, face: Math.PI },
  guido: { x: 19, z: -2.2, face: 0 },
  workshopDoor: { x: 19, z: -2.9 },
  priest: { x: 0, z: -26, face: 0 },
  altar: { x: 0, z: -27 },
  teresa: { x: -17, z: 1.75, face: Math.PI },
  teresaDoor: { x: -17, z: 2.4 },
  pietro: { x: -23.9, z: 18, face: Math.PI / 2 },
  pietroDoor: { x: -24.4, z: 18 },
  lando: { x: 36, z: 1.9, face: -Math.PI / 2 },
  gate: { x: 38.2, z: 0 },
  bernardo: { x: 4, z: -7.6, face: 0 },
  notice: { x: 10.6, z: -8.3 },
  well: { x: 0, z: 2.1 },
  emptyHouse: { x: -17, z: 26.2 },
  postern: { x: -36.8, z: 0 },
  peddler: { x: -15, z: 29.5, face: -2.2 },
  sick1: { x: -21.6, z: 23.5, face: 0.4 },
  sick2: { x: 10.8, z: 2, face: -1.2 },
  sick3: { x: -13, z: -1.9, face: 2 },
};
