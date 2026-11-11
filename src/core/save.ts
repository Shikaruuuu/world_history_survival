// セーブ・ロード（localStorage）。状態はただのJSONなので、そのまま保存できる。
import type { GameState } from './types';

const KEY = 'jinruishi-hardmode.save.v1';
const SETTINGS = 'jinruishi-hardmode.settings.v1';

export interface SaveData { v: number; s: GameState<any>; pos: { x: number; z: number; yaw: number } | null; at: number }

export function saveGame(s: GameState<any>, pos: SaveData['pos']) {
  try { localStorage.setItem(KEY, JSON.stringify({ v: 1, s, pos, at: Date.now() } satisfies SaveData)); } catch { /* 保存できない環境でも遊べる */ }
}
export function loadGame(): SaveData | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const d = JSON.parse(raw) as SaveData;
    if (d.v !== 1 || !d.s || d.s.v !== 1 || d.s.ended) return null;
    return d;
  } catch { return null; }
}
export function clearSave() { try { localStorage.removeItem(KEY); } catch { /* 何もしない */ } }

export interface Settings { bgm: boolean; se: boolean; sens: number; quality: 'low' | 'mid' | 'high' | 'auto' }
export const defaultSettings: Settings = { bgm: true, se: true, sens: 1, quality: 'auto' };
export function loadSettings(): Settings {
  try { return { ...defaultSettings, ...JSON.parse(localStorage.getItem(SETTINGS) ?? '{}') }; } catch { return { ...defaultSettings }; }
}
export function saveSettings(s: Settings) { try { localStorage.setItem(SETTINGS, JSON.stringify(s)); } catch { /* 何もしない */ } }
