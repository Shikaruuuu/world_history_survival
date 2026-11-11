// 登場人物の見た目。three/characters.ts の Look に従う。モデルを差し替えるときはここと characters.ts を変える。
import type { Look } from '../../three/characters';

const SKIN = [0xe2b48c, 0xd9a47a, 0xc98f66, 0xecc6a2, 0xb97f58];

export const cast: Record<string, Look> = {
  lucia: { h: 1.6, w: 0.92, skin: SKIN[3], hair: 0x3a2416, hairStyle: 'bun', head: 'veil', headColor: 0xe8e0cf, top: 0x7a3b3b, long: true, apron: 0xd8cfb8 },
  marco: { h: 1.22, w: 0.85, skin: SKIN[3], hair: 0x4a2f1a, hairStyle: 'bowl', top: 0x4f7a4a, bottom: 0x5a4a3a, child: true },
  pippo: { h: 1.18, w: 0.9, skin: SKIN[1], hair: 0x1f1712, hairStyle: 'short', top: 0x8a6a3a, bottom: 0x4a4038, child: true },
  beppe: { h: 1.72, w: 1.3, skin: SKIN[1], hair: 0x2a1c12, hairStyle: 'bald', beard: 0x2a1c12, head: 'cap', headColor: 0x9a3b2a, top: 0xa87f4a, bottom: 0x4a3a2a, apron: 0xe0d6c0, belt: 0x3a2a1a },
  gina: { h: 1.52, w: 1.05, skin: SKIN[2], hair: 0x8a8a8a, hairStyle: 'bun', head: 'wimple', headColor: 0xd9d2bf, top: 0x4d6b3c, long: true, cloak: 0x5a4a3a, stoop: 0.12, prop: 'basket' },
  clothVendor: { h: 1.75, w: 0.95, skin: SKIN[0], hair: 0x6a4a2a, hairStyle: 'long', head: 'cap', headColor: 0x3d5a80, top: 0x3d5a80, bottom: 0x7a2f2f, belt: 0x2a2a2a },
  vegVendor: { h: 1.58, w: 1.1, skin: SKIN[4], hair: 0x2a1c12, hairStyle: 'bun', head: 'straw', headColor: 0xd8c27a, top: 0xb08a3a, long: true, apron: 0x8a7a5a },
  guido: { h: 1.8, w: 1.15, skin: SKIN[0], hair: 0x9a9a92, hairStyle: 'short', beard: 0x9a9a92, head: 'coif', headColor: 0x2f2f3a, top: 0x5a2f4a, bottom: 0x2a2a2a, cloak: 0x3a2a3a, belt: 0x8a6a2a },
  priest: { h: 1.74, w: 0.9, skin: SKIN[3], hair: 0x8a8278, hairStyle: 'tonsure', top: 0x1c1c1c, long: true, belt: 0xc8c0a8, stoop: 0.06 },
  teresa: { h: 1.48, w: 1.0, skin: SKIN[2], hair: 0xd0d0d0, hairStyle: 'bun', head: 'wimple', headColor: 0x3a3a3a, top: 0x3a3a44, long: true, stoop: 0.2, prop: 'staff' },
  pietro: { h: 1.84, w: 1.25, skin: SKIN[4], hair: 0x1f1712, hairStyle: 'short', beard: 0x1f1712, top: 0x7a7468, bottom: 0x4a4038, apron: 0x5a4a3a, belt: 0x2a2a2a },
  lando: { h: 1.82, w: 1.1, skin: SKIN[1], hair: 0x3a2a1a, hairStyle: 'short', head: 'helmet', headColor: 0x8a8f96, top: 0x8a2a2a, bottom: 0x3a3a3a, cloak: 0xe0d8c0, belt: 0x2a2a2a, prop: 'spear' },
  bernardo: { h: 1.7, w: 0.88, skin: SKIN[3], hair: 0x5a5a5a, hairStyle: 'long', beard: 0x6a6a6a, head: 'cap', headColor: 0x7a1f1f, top: 0x7a1f1f, long: true, cloak: 0x4a1515 },
  peddler: { h: 1.66, w: 0.9, skin: SKIN[4], hair: 0x1a1a1a, hairStyle: 'long', beard: 0x1a1a1a, head: 'hood', headColor: 0x4a5a3a, top: 0x6a5a3a, bottom: 0x3a3a2a, cloak: 0x4a5a3a },
  folk1: { h: 1.7, w: 1.0, skin: SKIN[0], hair: 0x6a4a2a, hairStyle: 'short', top: 0x6a7a8a, bottom: 0x5a4a3a, belt: 0x2a2a2a },
  folk2: { h: 1.56, w: 0.95, skin: SKIN[1], hair: 0x2a1c12, hairStyle: 'bun', head: 'veil', headColor: 0xd9d2bf, top: 0x8a5a2a, long: true, prop: 'basket' },
  folk3: { h: 1.78, w: 1.2, skin: SKIN[2], hair: 0x1f1712, hairStyle: 'bald', beard: 0x3a2a1a, top: 0x5a6a3a, bottom: 0x3a2a2a, apron: 0x6a5a4a },
  folk4: { h: 1.62, w: 0.9, skin: SKIN[3], hair: 0xa8742a, hairStyle: 'long', head: 'hood', headColor: 0x7a2f2f, top: 0x7a2f2f, bottom: 0x4a4a4a },
  folk5: { h: 1.5, w: 1.1, skin: SKIN[4], hair: 0x9a9a9a, hairStyle: 'bun', head: 'wimple', headColor: 0xe0d8c8, top: 0x4a4a6a, long: true, stoop: 0.15 },
  folk6: { h: 1.74, w: 0.92, skin: SKIN[0], hair: 0x3a2a1a, hairStyle: 'bowl', head: 'straw', headColor: 0xd8c27a, top: 0xb8a070, bottom: 0x6a5a3a },
  folk7: { h: 1.66, w: 1.05, skin: SKIN[1], hair: 0x4a2f1a, hairStyle: 'short', head: 'coif', headColor: 0xe0d8c8, top: 0x9a6a3a, bottom: 0x3a3a4a, cloak: 0x5a5a4a },
  sick1: { h: 1.58, w: 0.9, skin: 0xcdb39a, hair: 0x3a2a1a, hairStyle: 'long', top: 0x6a6a5a, long: true },
  sick2: { h: 1.72, w: 0.95, skin: 0xc9b29c, hair: 0x2a2a2a, hairStyle: 'short', beard: 0x2a2a2a, top: 0x5a4a3a, bottom: 0x3a3a3a },
  sick3: { h: 1.6, w: 0.9, skin: 0xcdb39a, hair: 0x8a8a8a, hairStyle: 'bun', head: 'veil', headColor: 0x8a8a7a, top: 0x4a4a4a, long: true },
  cat: { kind: 'cat', h: 0.3, skin: 0x161616, hair: 0x161616, top: 0x161616 },
};
