// 画面の状態管理。ゲームの状態（s）はルール側の関数で書き換え、ここは「いま何を見せるか」を決める。
import { create } from 'zustand';
import { chooseEncounter, viewEncounter } from './core/encounters';
import { randomSeed } from './core/rng';
import { clearSave, loadGame, loadSettings, saveGame, saveSettings, type Settings } from './core/save';
import type { EncounterView, GameState, ResultData, ShopView } from './core/types';
import { blackDeath } from './scenarios/blackdeath';
import type { Game3D, Prompt } from './three/engine';
import { audio } from './audio';

export const scenario = blackDeath;
type S = GameState<any>;

export type Scene =
  | { kind: 'enc'; view: EncounterView; target?: string; fromQueue: boolean; menu?: MenuRef }
  | { kind: 'lines'; lines: string[]; title?: string; then: After }
  | { kind: 'shop'; view: ShopView; msg: string }
  | { kind: 'day'; day: number; report: string[] }
  | { kind: 'intro' };
interface MenuRef { id: string; target: string }
interface After { next?: string; dayFrom: number; menu?: MenuRef; reopen?: boolean }
export type MenuTab = 'items' | 'family' | 'log' | 'settings' | 'help';

interface Store {
  screen: 'title' | 'play' | 'result';
  s: S | null;
  scene: Scene | null;
  prompt: Prompt | null;
  toast: string | null;
  menu: MenuTab | null;
  result: ResultData | null;
  settings: Settings;
  hasSave: boolean;
  engine: Game3D | null;
  setEngine(e: Game3D | null): void;
  newGame(seed?: string): void;
  continueGame(): void;
  toTitle(): void;
  interact(): void;
  enterZone(zone: string): void;
  choose(idx: number): void;
  closeLines(): void;
  closeDay(): void;
  closeIntro(): void;
  buy(key: string): void;
  closeShop(): void;
  setPrompt(p: Prompt | null): void;
  setMenu(m: MenuTab | null): void;
  setSettings(p: Partial<Settings>): void;
  showToast(t: string): void;
}

let toastTimer = 0;
const clone = (s: S): S => JSON.parse(JSON.stringify(s));

export const useStore = create<Store>((set, get) => {
  /** 状態を複製してから書き換え、保存する */
  const mutate = <T,>(fn: (s: S) => T): T => {
    const c = clone(get().s!);
    const r = fn(c);
    set({ s: c });
    if (!c.ended) saveGame(c, get().engine?.getPose() ?? null);
    return r;
  };
  const open = (id: string, target?: string, fromQueue = false, menu?: MenuRef) => {
    const view = mutate((s) => viewEncounter(scenario.encounters, s, id));
    set({ scene: { kind: 'enc', view, target, fromQueue, menu }, prompt: null });
    if (target) get().engine?.focus(target);
  };
  /** 待っているイベントがあれば開く */
  const pump = () => {
    const { s, scene, screen } = get();
    if (!s || scene || screen !== 'play') return;
    if (s.ended) { finish(); return; }
    if (s.queue.length) open(s.queue[0], undefined, true);
  };
  const finish = () => {
    const s = get().s!;
    const result = scenario.result(s);
    clearSave();
    audio.bell();
    set({ screen: 'result', result, scene: null, menu: null, hasSave: false });
  };
  const after = (a: After) => {
    const s = get().s!;
    if (s.ended) { set({ scene: null }); finish(); return; }
    if (s.day !== a.dayFrom) { audio.bell(); set({ scene: { kind: 'day', day: s.day, report: s.report } }); return; }
    if (a.next?.startsWith('shop:')) { set({ scene: { kind: 'shop', view: scenario.shop(s, a.next.slice(5)), msg: '' } }); return; }
    if (a.next) { open(a.next, a.menu?.target, false, a.menu); return; }
    set({ scene: null });
    if (a.reopen && a.menu && !s.queue.length) { open(a.menu.id, a.menu.target, false, a.menu); return; }
    pump();
  };

  return {
    screen: 'title', s: null, scene: null, prompt: null, toast: null, menu: null, result: null,
    settings: loadSettings(), hasSave: !!loadGame(), engine: null,
    setEngine: (engine) => set({ engine }),
    newGame: (seed) => {
      const s = scenario.newGame(seed?.trim() || randomSeed());
      const sp = scenario.map.spawn;
      get().engine?.place(sp.x, sp.z, sp.yaw);
      set({ s, screen: 'play', scene: { kind: 'intro' }, result: null, menu: null, prompt: null });
      saveGame(s, null);
    },
    continueGame: () => {
      const d = loadGame(); if (!d) return;
      const sp = d.pos ?? scenario.map.spawn;
      get().engine?.place(sp.x, sp.z, sp.yaw);
      set({ s: d.s, screen: 'play', scene: null, result: null, menu: null });
      pump();
    },
    toTitle: () => set({ screen: 'title', scene: null, menu: null, s: null, prompt: null, hasSave: !!loadGame() }),
    interact: () => {
      const { prompt, scene, menu, screen, s } = get();
      if (!prompt || scene || menu || screen !== 'play' || !s) return;
      const id = mutate((c) => scenario.interact(c, prompt.id));
      if (id) { audio.click(); open(id, prompt.id, false, scenario.encounters[id].speaker ? { id, target: prompt.id } : undefined); }
    },
    enterZone: (zone) => {
      const { s, screen } = get();
      if (!s || screen !== 'play' || s.ended) return;
      const t = mutate((c) => scenario.enterZone(c, zone));
      if (t) get().showToast(t);
      pump();
    },
    choose: (idx) => {
      const sc = get().scene;
      if (!sc || sc.kind !== 'enc') return;
      const dayFrom = get().s!.day;
      const tag = sc.view.choices.find((c) => c.idx === idx)?.tag;
      const money = get().s!.money;
      const r = mutate((s) => {
        if (sc.fromQueue && s.queue[0] === sc.view.id) s.queue.shift();
        return chooseEncounter(scenario.encounters, s, sc.view.id, idx);
      });
      if (get().s!.money > money) audio.coin(); else audio.click();
      // 話し相手のメニューは、用が済んだらもう一度開く（続けて別の用事を頼めるように）
      const then: After = { next: r.next, dayFrom, menu: sc.menu, reopen: !!sc.menu && tag !== 'leave' && !r.next };
      if (r.lines.length) set({ scene: { kind: 'lines', lines: r.lines, title: sc.view.title, then } });
      else after(then);
    },
    closeLines: () => { const sc = get().scene; if (sc?.kind === 'lines') after(sc.then); },
    closeDay: () => {
      const sp = scenario.map.spawn;
      get().engine?.place(sp.x, sp.z, sp.yaw);
      set({ scene: null });
      pump();
    },
    closeIntro: () => { set({ scene: null }); pump(); },
    buy: (key) => {
      const sc = get().scene; if (sc?.kind !== 'shop') return;
      const err = mutate((s) => scenario.buy(s, sc.view.id, key));
      if (!err) audio.coin();
      set({ scene: { kind: 'shop', view: scenario.shop(get().s!, sc.view.id), msg: err ?? '' } });
    },
    closeShop: () => { set({ scene: null }); pump(); },
    setPrompt: (prompt) => set({ prompt }),
    setMenu: (menu) => { if (get().screen === 'play' && (!get().scene || menu === null)) set({ menu }); },
    setSettings: (p) => { const settings = { ...get().settings, ...p }; saveSettings(settings); set({ settings }); },
    showToast: (toast) => { set({ toast }); clearTimeout(toastTimer); toastTimer = window.setTimeout(() => set({ toast: null }), 3600); },
  };
});
