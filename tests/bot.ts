// 3Dを使わずにゲームを最後まで進める自動プレイヤー。テストとバランス確認に使う。
import { chooseEncounter, viewEncounter } from '../src/core/encounters';
import type { EncounterView } from '../src/core/types';
import { blackDeath as sc } from '../src/scenarios/blackdeath';
import { S, family, flag, mouths, sick } from '../src/scenarios/blackdeath/rules';

export type Policy = 'kind' | 'selfish' | 'first' | 'random';
export interface Strategy { name: string; policy: Policy; plan: (s: S) => [string, string][]; foodTarget: (s: S) => number; ration?: string; flee?: boolean }

const ZONE: Record<string, string> = {
  lucia: 'home', marco: 'home', bed: 'home', pantry: 'home', beppe: 'market', gina: 'market', notice: 'market', well: 'market', bernardo: 'market', guido: 'market', workshopDoor: 'market',
  priest: 'church', altar: 'church', teresa: 'street', teresaDoor: 'street', pietro: 'alley', pietroDoor: 'alley', emptyHouse: 'alley', peddler: 'alley', lando: 'gate', gate: 'gate', beppeDoor: 'market', postern: 'street',
};
const KIND = ['help', 'give', 'yes', 'ask', 'stay', 'church', 'play', 'join', 'talk'];
const SELFISH = ['no', 'leave', 'isolate', 'cart', 'hide', 'watch'];

let rngState = 1;
const rnd = () => { rngState = (rngState * 1664525 + 1013904223) >>> 0; return rngState / 4294967296; };

function pickChoice(v: EncounterView, want: string[], policy: Policy): number {
  const ok = v.choices.filter((c) => !c.disabled);
  if (!ok.length) return -1;
  for (const w of want) { const c = ok.find((c) => c.tag === w); if (c) return c.idx; }
  if (want.length) { const l = ok.find((c) => c.tag === 'leave'); if (l) return l.idx; }
  if (policy === 'random') return ok[Math.floor(rnd() * ok.length)].idx;
  const pref = policy === 'kind' ? KIND : policy === 'selfish' ? SELFISH : [];
  for (const w of pref) { const c = ok.find((c) => c.tag === w); if (c) return c.idx; }
  // 避難は計画なしには選ばない
  const safe = ok.filter((c) => !c.tag?.startsWith('evac'));
  return (safe[0] ?? ok[0]).idx;
}

export function runGame(seed: string, st: Strategy, log?: string[], onDay?: (s: S) => void): S {
  rngState = 12345;
  const s = sc.newGame(seed) as S;
  const play = (id: string, want: string[], depth = 0): void => {
    if (s.ended || depth > 6) return;
    if (id.startsWith('shop:')) { shopAt(id.slice(5)); return; }
    const v = viewEncounter(sc.encounters, s, id);
    const idx = pickChoice(v, want, st.policy);
    if (idx < 0) return;
    const r = chooseEncounter(sc.encounters, s, id, idx);
    log?.push(`d${s.day} ${id} -> ${v.choices.find((c) => c.idx === idx)!.label}`);
    if (r.next) play(r.next, r.next === 'evac' ? ['evacFamily'] : want, depth + 1);
  };
  const shopAt = (id: string) => {
    for (const it of sc.shop(s, id).items) {
      const target = it.key === 'food' ? st.foodTarget(s) : it.key === 'supplies' ? 3 : 1;
      let guard = 20;
      while (guard-- > 0 && (s as any)[it.key] < target && s.money - it.price >= (it.key === 'food' ? 0 : 6)) if (sc.buy(s, id, it.key)) break;
    }
  };
  const drain = () => { let g = 20; while (s.queue.length && !s.ended && g-- > 0) play(s.queue.shift()!, st.ration && s.queue.length === 0 ? [] : []); };
  const present = (id: string) => { const w = sc.worldView(s); return w.npcs.some((n) => n.id === id) || w.spots.some((x) => x.id === id); };
  const go = (target: string, tag: string) => {
    if (s.ended) return;
    sc.enterZone(s, ZONE[target] ?? 'market'); drain();
    if (s.ended || !present(target)) return;
    const id = sc.interact(s, target); if (id) play(id, [tag]);
    drain();
  };
  let guard = 60;
  while (!s.ended && guard-- > 0) {
    drain();
    if (!s.ended) onDay?.(s);
    for (const [t, tag] of st.plan(s)) go(t, tag);
    if (s.ended) break;
    for (const sp of sc.worldView(s).spots.filter((x) => x.marker)) { const id = sc.interact(s, sp.id); if (id) play(id, st.policy === 'selfish' ? ['take'] : ['take']); }
    sc.enterZone(s, 'home'); drain();
    if (s.ended) break;
    const day = s.day;
    play('bed', ['sleep']);
    if (!s.ended && s.day === day) {
      // 夕食の選択（配給）
      const v = viewEncounter(sc.encounters, s, 'supper');
      const idx = pickChoice(v, [st.ration ?? 'ration:child', 'sleep'], st.policy);
      chooseEncounter(sc.encounters, s, 'supper', idx);
    }
  }
  return s;
}

const anySickFam = (s: S) => family(s).some(sick);
const nurseTarget = (s: S): [string, string][] => (anySickFam(s) ? [[sick(s.people.lucia) ? 'lucia' : 'marco', 'nurse']] : []);

export const strategies: Record<string, Strategy> = {
  idle: { name: '何もしない', policy: 'first', plan: () => [], foodTarget: () => 0 },
  naive: {
    name: '素朴（働いて買うだけ）', policy: 'random',
    plan: (s) => [['guido', 'work'], ['beppe', 'shop'], ['beppeDoor', 'shop'], ...nurseTarget(s)],
    foodTarget: (s) => mouths(s) * 2,
  },
  smart: {
    name: '堅実（備蓄・掃除・看病・家族）', policy: 'kind',
    plan: (s) => {
      const p: [string, string][] = [...nurseTarget(s), ['lucia', 'talk'], ['marco', 'talk']];
      if (s.day % 3 === 0 && s.supplies > 0) p.push(['pantry', 'clean']);
      p.push(['beppe', 'shop'], ['gina', 'shop'], ['beppeDoor', 'shop'], ['peddler', 'shop'], ['guido', 'work']);
      if (s.food < mouths(s) * 2) p.push(['priest', 'alms']);
      if (s.time >= 1) p.push(['marco', 'play']);
      return p;
    },
    foodTarget: (s) => Math.min(12, mouths(s) * 4),
  },
  hoarder: {
    name: '買いだめ（掃除なし）', policy: 'selfish',
    plan: (s) => [...nurseTarget(s), ['beppe', 'shop'], ['beppeDoor', 'shop'], ['guido', 'work']],
    foodTarget: () => 30,
  },
  risky: {
    name: '危険な稼ぎ（遺体運び・空き家）', policy: 'selfish',
    plan: (s) => [['beppe', 'shop'], ['guido', 'workRisky'], ['guido', 'work'], ['lando', 'becchino'], ['emptyHouse', 'loot'], ...nurseTarget(s)],
    foodTarget: (s) => mouths(s) * 3,
  },
  flee: {
    name: '早めの避難', policy: 'kind', flee: true,
    plan: (s) => {
      const p: [string, string][] = [['lucia', 'talk'], ['marco', 'talk'], ['beppe', 'shop'], ['guido', 'work']];
      if (s.sc.town.phase >= 1 && flag(s, 'fleePlan') !== 1) p.unshift(['lucia', 'flee']);
      if (flag(s, 'fleePlan') === 1 && s.food >= mouths(s) * 2) p.unshift(['lando', 'evac'], ['gate', 'evac']);
      return p;
    },
    foodTarget: (s) => mouths(s) * 4,
  },
};
