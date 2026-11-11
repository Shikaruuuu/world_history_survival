// イベント・会話の共通エンジン。
// NPCとの会話メニューも、選択イベントも、すべて「エンカウンター」（文章＋選択肢）としてデータで持つ。
import { rand } from './rng';
import type { Choice, ChooseResult, Cost, Encounter, EncounterView, GameState } from './types';

type S = GameState<any>;
export type EncounterTable = Record<string, Encounter<any>>;

const arr = (v: string | string[] | undefined | void): string[] => (v == null ? [] : Array.isArray(v) ? v : [v]);
const val = <T,>(v: T | ((s: S) => T), s: S): T => (typeof v === 'function' ? (v as (s: S) => T)(s) : v);

const COST_LABEL: [keyof Cost, string, string][] = [
  ['time', '時間', ''], ['stamina', '体力', ''], ['money', '', 'ソルド'], ['food', '食料', ''], ['supplies', '生活用品', ''], ['remedies', '薬草', ''],
];

export function costText(c: Cost): string {
  return COST_LABEL.filter(([k]) => c[k]).map(([k, pre, post]) => `${pre}${c[k]}${post}`).join('・');
}

function costBlock(s: S, c: Cost): string | null {
  if (c.time && s.time < c.time) return '今日はもう時間がない';
  if (c.stamina && s.stamina < c.stamina) return '体力が足りない';
  if (c.money && s.money < c.money) return 'お金が足りない';
  if (c.food && s.food < c.food) return '食料が足りない';
  if (c.supplies && s.supplies < c.supplies) return '生活用品がない';
  if (c.remedies && s.remedies < c.remedies) return '薬草がない';
  return null;
}

function choicesOf(e: Encounter<any>, s: S): Choice<any>[] {
  return val(e.choices, s);
}

export function viewEncounter(table: EncounterTable, s: S, id: string): EncounterView {
  const e = table[id];
  if (!e) throw new Error('unknown encounter: ' + id);
  const all = choicesOf(e, s);
  const choices = all
    .map((c, idx) => ({ c, idx }))
    .filter(({ c }) => !c.show || c.show(s))
    .map(({ c, idx }) => {
      const cost = c.cost ? val(c.cost, s) : {};
      const ct = costText(cost);
      const hint = [c.hint ? val(c.hint, s) : '', ct].filter(Boolean).join('／');
      let disabled = costBlock(s, cost);
      if (!disabled && c.ok) { const r = c.ok(s); if (r !== true) disabled = r; }
      return { idx, label: val(c.label, s), hint, disabled, tag: c.tag };
    });
  return { id, title: e.title, speaker: e.speaker ? val(e.speaker, s) : undefined, lines: arr(val(e.text, s)), choices, category: e.category };
}

export function chooseEncounter(table: EncounterTable, s: S, id: string, idx: number): ChooseResult {
  const e = table[id];
  const c = choicesOf(e, s)[idx];
  if (!c) throw new Error(`bad choice ${id}#${idx}`);
  const cost = c.cost ? val(c.cost, s) : {};
  if (costBlock(s, cost) || (c.ok && c.ok(s) !== true)) return { lines: [] };
  s.time -= cost.time ?? 0;
  s.stamina -= cost.stamina ?? 0;
  s.money -= cost.money ?? 0;
  s.food -= cost.food ?? 0;
  s.supplies -= cost.supplies ?? 0;
  s.remedies -= cost.remedies ?? 0;
  if (c.key) s.journal.push({ day: s.day, text: c.key, key: true });
  const r = c.run ? c.run(s) : undefined;
  if (r && typeof r === 'object' && !Array.isArray(r)) return { lines: arr(r.t), next: r.next };
  return { lines: arr(r as string | string[] | void) };
}

/** 条件を満たした自動イベントを待ち行列に積む。優先度つきは全部、抽選ものは最大1件 */
export function triggerAuto(table: EncounterTable, s: S, on: string, maxScripted = 2): string[] {
  const added: string[] = [];
  const eligible = Object.values(table).filter((e) => {
    const a = e.auto;
    if (!a || a.on !== on) return false;
    const last = s.seen[e.id];
    if (last !== undefined) {
      if (a.once !== false) return false;
      if (s.day - last < (a.cooldown ?? 3)) return false;
    }
    if (s.queue.includes(e.id)) return false;
    return !a.when || a.when(s);
  });
  const scripted = eligible.filter((e) => (e.auto!.pri ?? 0) > 0).sort((a, b) => b.auto!.pri! - a.auto!.pri!).slice(0, maxScripted);
  for (const e of scripted) { s.queue.push(e.id); s.seen[e.id] = s.day; added.push(e.id); }
  if (!scripted.length) {
    const pool = eligible.filter((e) => !(e.auto!.pri ?? 0));
    if (pool.length) {
      const e = pool[Math.floor(rand(s) * pool.length)];
      if (rand(s) < (e.auto!.chance ?? 0.5)) { s.queue.push(e.id); s.seen[e.id] = s.day; added.push(e.id); }
    }
  }
  return added;
}
