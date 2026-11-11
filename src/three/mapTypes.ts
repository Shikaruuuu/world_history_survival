// 町のデータ形式。シナリオはこの形で町を定義し、three/town.ts が3Dに組み立てる。

export interface Rect { x0: number; z0: number; x1: number; z1: number }
export type Face = 'n' | 's' | 'e' | 'w';

export interface BuildingDef {
  id: string;
  rect: Rect;
  h: number;
  style: 'house' | 'stone' | 'church' | 'tower' | 'wall';
  /** 屋根の棟の向き */
  ridge?: 'x' | 'z';
  /** しっくいの色（0〜4） */
  tint?: number;
  /** 上階に木組みを見せる */
  timber?: boolean;
  doors?: { face: Face; at: number; w?: number }[];
  windows?: Face[];
  /** 中に入れる建物。壁を別々に立てて、doors の位置を開ける */
  enterable?: boolean;
  ceil?: number;
}

export interface PropDef {
  kind: string;
  x: number; z: number;
  rot?: number;
  /** 当たり判定の大きさ（幅×奥行）。無ければすり抜ける */
  solid?: [number, number];
  /** この段階以上で現れる（町の変化）。未指定は常に表示 */
  fromPhase?: number;
  /** この段階以上で消える */
  untilPhase?: number;
}

export interface StallDef { id: string; x: number; z: number; face: number; color: number; goods: string }

export interface MapDef {
  bounds: Rect;
  /** 歩ける範囲（これ以外はすべて壁として扱う） */
  walk: (Rect & { floor?: 'cobble' | 'dirt' | 'wood' | 'slab'; inside?: boolean })[];
  buildings: BuildingDef[];
  props: PropDef[];
  stalls: StallDef[];
  zones: { id: string; rect: Rect }[];
  waypoints: { x: number; z: number }[];
  links: [number, number][];
  spotPoints: { x: number; z: number }[];
  spawn: { x: number; z: number; yaw: number };
  /** 門の扉の位置 */
  gate: { x: number; z: number };
}
