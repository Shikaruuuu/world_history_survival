// シード固定できる乱数（mulberry32）。状態は GameState.rng に持つ。

export function hashSeed(seed: string): number {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^ (h >>> 16)) >>> 0;
}

interface HasRng { rng: number }

export function rand(s: HasRng): number {
  s.rng = (s.rng + 0x6d2b79f5) >>> 0;
  let t = s.rng;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
export const range = (s: HasRng, a: number, b: number) => a + (b - a) * rand(s);
export const randInt = (s: HasRng, a: number, b: number) => a + Math.floor(rand(s) * (b - a + 1));
export const chance = (s: HasRng, p: number) => rand(s) < p;
export const pick = <T>(s: HasRng, arr: readonly T[]): T => arr[Math.floor(rand(s) * arr.length)];

export function randomSeed(): string {
  return String(Math.floor(Math.random() * 900000) + 100000);
}
