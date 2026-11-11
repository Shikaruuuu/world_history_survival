// 黒死病編のルール：町の流行、感染、食事、夜の処理、避難、結末。
// 3DやUIには依存しない純粋なゲームロジック（自動テストはここを直接動かす）。
import { chance, hashSeed, pick, randInt, range } from '../../core/rng';
import type { Ending, GameState, Person, PersonId } from '../../core/types';

export type NpcId = 'teresa' | 'pietro' | 'beppe' | 'gina' | 'guido' | 'priest' | 'lando' | 'bernardo';
export interface Npc { st: 'ok' | 'sick' | 'dead' | 'gone'; rel: number; day: number; fate: 'ok' | 'dead' | 'gone' }

export interface BD {
  town: {
    onset: number; mid: number; rate: number;
    /** 町の流行の度合い 0〜1 */
    prev: number;
    /** 0=日常 1=異変 2=流行 3=崩壊 */
    phase: number;
    price: number; stock: number;
    marketOpen: number; marketCloseDay: number;
    gateCloseDay: number; workshopCloseDay: number;
    /** 避難先の農場にも病が及んでいるか */
    farmStruck: number;
    bribe: number;
  };
  home: {
    /** 家のネズミ・ノミ・シラミの多さ 0〜100（内部値） */
    infest: number;
    cat: number;
    /** 引き取った子の数 */
    guest: number;
  };
  npcs: Record<NpcId, Npc>;
}
export type S = GameState<BD>;

export const TOTAL_DAYS = 14;
export const clamp = (v: number, a = 0, b = 100) => Math.max(a, Math.min(b, v));

// ---------- 便利関数 ----------
export const P = (s: S) => s.people.player;
export const L = (s: S) => s.people.lucia;
export const M = (s: S) => s.people.marco;
export const family = (s: S): Person[] => [s.people.lucia, s.people.marco];
export const living = (s: S): Person[] => (['player', 'lucia', 'marco'] as PersonId[]).map((k) => s.people[k]).filter((p) => p.alive);
export const mouths = (s: S) => living(s).length + s.sc.home.guest;
export const sick = (p: Person) => p.alive && !!p.illness && p.illness.symptomatic;
export const well = (p: Person) => p.alive && !sick(p);
export const anySick = (s: S) => family(s).some(sick);
export const flag = (s: S, k: string) => s.flags[k] ?? 0;
export const setFlag = (s: S, k: string, v = 1) => { s.flags[k] = v; };
export const stat = (s: S, k: string, d = 1) => { s.stats[k] = (s.stats[k] ?? 0) + d; };
export const npc = (s: S, id: NpcId) => s.sc.npcs[id];
export const note = (s: S, text: string, key = false) => { s.journal.push({ day: s.day, text, key: key || undefined }); };

export function adj(p: Person, k: 'health' | 'satiety' | 'morale' | 'bond', d: number) {
  if (p.alive) p[k] = clamp(p[k] + d);
}
export function gainStamina(s: S, d: number) {
  s.stamina = clamp(s.stamina + d, 0, sick(P(s)) ? 50 : 100);
}

// ---------- 新しいゲーム ----------
function person(id: PersonId, name: string, health: number, threshold: number): Person {
  return { id, name, alive: true, health, satiety: 70, morale: 70, bond: 60, risk: 0, threshold, sources: {}, illness: null, immune: false, cared: 0, talked: false };
}

export function newGame(seed: string): S {
  const s: S = {
    v: 1, scenario: 'blackdeath', seed, rng: hashSeed(seed),
    day: 1, time: 6, maxTime: 6, stamina: 100, fatigue: 0,
    people: {} as S['people'],
    money: 0, food: 0, supplies: 0, remedies: 0,
    flags: {}, queue: [], seen: {}, zonesToday: [], ctx: '', spots: [], journal: [], dangers: [], report: [],
    stats: {}, ended: null,
    sc: {} as BD,
  };
  const th = () => range(s, 0.5, 1.5);
  s.people.player = person('player', 'あなた', randInt(s, 82, 96), th());
  s.people.lucia = person('lucia', 'ルチア', randInt(s, 78, 95), th());
  s.people.marco = person('marco', 'マルコ', randInt(s, 78, 95), th());
  s.money = randInt(s, 26, 44);
  s.food = randInt(s, 6, 9);
  s.supplies = randInt(s, 2, 3);
  s.remedies = randInt(s, 0, 1);

  // 遊ぶたびに変わる出だし
  const start = randInt(s, 0, 4);
  if (start === 1) { s.people.marco.health = 66; setFlag(s, 'startMarcoCough'); }
  else if (start === 2) { s.people.lucia.health = 68; setFlag(s, 'startLuciaTired'); }
  else if (start === 3) { s.money += 12; s.food -= 2; setFlag(s, 'startSavings'); }
  else if (start === 4) { s.food += 4; s.money -= 8; setFlag(s, 'startPantry'); }

  const onset = randInt(s, 3, 4);
  const mid = onset + range(s, 3.2, 4.8);
  const rate = range(s, 0.75, 1.1);
  const town: BD['town'] = {
    onset, mid, rate, prev: 0, phase: 0, price: 2, stock: 13, marketOpen: 1, marketCloseDay: 99,
    gateCloseDay: onset + randInt(s, 4, 6), workshopCloseDay: onset + randInt(s, 3, 5),
    farmStruck: chance(s, 0.35) ? 1 : 0, bribe: randInt(s, 14, 28),
  };
  for (let d = onset; d <= TOTAL_DAYS; d++) if (prevAt(town, d) >= 0.62) { town.marketCloseDay = d; break; }
  const n = (day: number, fate: Npc['fate']): Npc => ({ st: 'ok', rel: 0, day, fate });
  s.sc = {
    town,
    home: { infest: randInt(s, 12, 30), cat: 0, guest: 0 },
    npcs: {
      teresa: n(onset + randInt(s, 1, 3), 'ok'),
      pietro: n(onset + randInt(s, 2, 4), chance(s, 0.5) ? 'dead' : 'ok'),
      beppe: n(99, chance(s, 0.3) ? 'dead' : 'ok'),
      gina: n(onset + randInt(s, 2, 4), 'gone'),
      guido: n(town.workshopCloseDay, 'gone'),
      priest: n(randInt(s, 10, 13), chance(s, 0.45) ? 'dead' : 'ok'),
      lando: n(town.gateCloseDay + randInt(s, 2, 3), chance(s, 0.4) ? 'gone' : 'ok'),
      bernardo: n(onset + randInt(s, 3, 5), 'gone'),
    },
  };
  setFlag(s, 'pippoAlive', chance(s, 0.7) ? 1 : 0);
  updateTown(s, true);
  spawnSpots(s);
  return s;
}

// ---------- 町の流行 ----------
function prevAt(t: Pick<BD['town'], 'onset' | 'mid' | 'rate'>, day: number) {
  return day < t.onset ? 0 : 1 / (1 + Math.exp(-t.rate * (day - t.mid)));
}

/** その日の町の状態を計算する。quiet のときは朝の知らせを出さない */
export function updateTown(s: S, quiet = false) {
  const t = s.sc.town;
  const before = t.phase;
  t.prev = prevAt(t, s.day);
  t.phase = s.day < t.onset ? 0 : t.prev < 0.2 ? 1 : t.prev < 0.7 ? 2 : 3;
  const rumor = s.day === t.onset - 1 ? 1.25 : 1;
  t.price = Math.max(2, Math.round(2 * (1 + 3.2 * t.prev) * rumor * range(s, 0.9, 1.15)));
  if (s.day >= t.marketCloseDay && t.marketOpen) {
    t.marketOpen = 0;
    if (!quiet) s.report.push('町の評議会の命で、市場が閉ざされた。');
  }
  t.stock = t.marketOpen ? Math.max(0, Math.round(13 * (1 - t.prev * 1.15) + range(s, -1, 1))) : 0;
  if (quiet) return;
  if (t.phase > before) {
    s.report.push(['', '町に最初の病人が出たという。', '弔いの鐘が日に何度も鳴るようになった。', '通りから人影が消えた。荷車だけが行き来している。'][t.phase]);
  }
  if (s.day === t.gateCloseDay) s.report.push('町の門が閉ざされたらしい。出入りには許しが要る。');

  // 町の人々の運命
  const N = s.sc.npcs;
  if (s.day === N.teresa.day && N.teresa.st === 'ok') N.teresa.st = 'sick';
  if (s.day === N.teresa.day + 3 && N.teresa.st === 'sick') {
    const p = 0.22 + 0.2 * Math.min(2, flag(s, 'teresaHelp'));
    if (chance(s, p)) { N.teresa.st = 'ok'; setFlag(s, 'teresaRecovered', s.day); s.report.push('隣のテレーザが、戸口に姿を見せた。熱が引いたらしい。'); }
    else { N.teresa.st = 'dead'; s.report.push('隣のテレーザが亡くなった。'); }
  }
  if (s.day === N.pietro.day) setFlag(s, 'agneseSick', s.day);
  if (s.day === N.pietro.day + 3) {
    setFlag(s, 'agneseDead', s.day);
    if (N.pietro.fate === 'dead') N.pietro.st = 'sick';
    s.report.push('ピエトロの妻アニェーゼが亡くなったと聞いた。');
  }
  if (s.day === N.pietro.day + 5 && N.pietro.st === 'sick') { N.pietro.st = 'dead'; s.report.push('石工のピエトロも、妻を追うように逝った。'); }
  if (s.day === N.gina.day && N.gina.st === 'ok') N.gina.st = 'gone';
  if (s.day === N.bernardo.day) N.bernardo.st = 'gone';
  if (s.day === N.guido.day && N.guido.st === 'ok') { N.guido.st = 'gone'; }
  if (s.day === N.priest.day && N.priest.fate === 'dead') { N.priest.st = 'dead'; s.report.push('ドン・アンセルモ司祭が亡くなった。病人を見舞い続けた末のことだという。'); }
  if (s.day === N.lando.day && N.lando.fate === 'gone') N.lando.st = 'gone';
  if (s.day === t.marketCloseDay + 1 && N.beppe.fate === 'dead') N.beppe.st = 'dead';
}

// ---------- 感染 ----------
/** 感染リスクを積む。虫（ノミ・シラミ）経由か、飛沫（肺ペスト患者の咳）経由か */
export function expose(s: S, who: PersonId, amount: number, kind: 'flea' | 'droplet', label: string) {
  const p = s.people[who];
  if (!p.alive || p.immune || p.illness || amount <= 0) return;
  p.risk += amount;
  p.sources[label] = (p.sources[label] ?? 0) + amount;
  if (kind === 'droplet') p.sources.__d = (p.sources.__d ?? 0) + amount;
  if (amount >= 0.06) {
    s.dangers.push({ day: s.day, text: `${label}（${p.name}）`, amount });
    if (s.dangers.length > 40) { s.dangers.sort((a, b) => b.amount - a.amount); s.dangers.length = 20; }
  }
  if (p.risk >= p.threshold) {
    const droplet = (p.sources.__d ?? 0) / p.risk > 0.4;
    const cause = Object.entries(p.sources).filter(([k]) => k !== '__d').sort((a, b) => b[1] - a[1])[0][0];
    const kindI = droplet ? 'pneumonic' : chance(s, 0.06) ? 'pneumonic' : 'bubonic';
    p.illness = {
      kind: kindI, days: 0, incubation: kindI === 'pneumonic' ? randInt(s, 1, 2) : randInt(s, 2, 4), sickDays: 0,
      severity: clamp(range(s, 0.1, 1) + (who === 'marco' ? 0.05 : 0) + (p.health < 55 ? 0.1 : 0), 0, 1),
      symptomatic: false, cause, causeDay: s.day,
    };
  }
}
export const exposeFamily = (s: S, amount: number, kind: 'flea' | 'droplet', label: string) => { expose(s, 'lucia', amount, kind, label); expose(s, 'marco', amount, kind, label); };

export function die(s: S, p: Person, cause: string) {
  if (!p.alive) return;
  p.alive = false; p.health = 0; p.deathDay = s.day; p.deathCause = cause;
  for (const o of living(s)) adj(o, 'morale', p.id === 'marco' ? -34 : -26);
  note(s, `${p.name}が${cause}で亡くなった。`, true);
}

// ---------- 食事 ----------
export type Ration = 'full' | 'share' | 'child' | 'skipself' | 'self';

export function eat(s: S, policy: Ration) {
  const ps = living(s);
  const give = (p: Person, portion: number) => adj(p, 'satiety', 34 * portion);
  let need = ps.length + s.sc.home.guest;
  if (s.sc.home.cat && s.day % 2 === 0 && s.food > need) s.food -= 1;
  if (s.food >= need) { ps.forEach((p) => give(p, 1)); s.food -= need; }
  else {
    let f = s.food; s.food = 0;
    f = Math.max(0, f - Math.min(f, s.sc.home.guest * 0.7));
    const first: Person[] = policy === 'child' ? ps.filter((p) => p.id === 'marco') : policy === 'self' ? ps.filter((p) => p.id === 'player') : [];
    const skip = policy === 'skipself' ? 'player' : '';
    for (const p of first) { const g = Math.min(1, f); give(p, g); f -= g; }
    const rest = ps.filter((p) => !first.includes(p) && p.id !== skip);
    if (rest.length) { const each = Math.min(1, f / rest.length); rest.forEach((p) => give(p, each)); }
    stat(s, 'hungryNights');
  }
  ps.forEach((p) => adj(p, 'satiety', -30));
}

// ---------- 夜の処理 ----------
interface NightOpt { prevFactor?: number; away?: boolean }

function progressIllness(s: S, p: Person, out: string[]) {
  const ill = p.illness;
  if (!ill || !p.alive) return;
  ill.days++;
  const you = p.id === 'player';
  if (!ill.symptomatic) {
    if (ill.days >= ill.incubation) {
      ill.symptomatic = true;
      out.push(ill.kind === 'pneumonic'
        ? (you ? '夜明け前、激しい咳で目が覚めた。布に血が混じっている。' : `${p.name}が激しく咳き込み、血の混じった痰を吐いた。高い熱がある。`)
        : (you ? '体が燃えるように熱い。脚の付け根に、卵ほどの腫れ物ができている。' : `${p.name}が高い熱を出した。${p.id === 'marco' ? '首' : '脚の付け根'}に、硬い腫れ物ができている。`));
      note(s, `${p.name}が発症した。`, true);
      if (!you) s.queue.push('sick_' + p.id);
    }
    return;
  }
  ill.sickDays++;
  // 看病：誰かが付き添えるか
  let care = p.cared;
  const lucia = s.people.lucia, marco = s.people.marco, player = s.people.player;
  if (p.id !== 'lucia' && well(lucia)) care = Math.max(care, you ? 6 : 4);
  if (you && !well(lucia) && well(marco)) care = Math.max(care, 1);
  if (p.id === 'lucia' && well(marco)) care = Math.max(care, 1);
  if (p.id !== 'player' && !player.alive && !well(lucia)) care = Math.max(care, 0);
  care += (p.satiety >= 45 ? 3 : 0) + (s.supplies > 0 ? 1 : 0);
  const decline = ill.kind === 'pneumonic' ? 30 + 12 * ill.severity - care * 0.4 : 13 + 18 * ill.severity - care;
  p.health -= Math.max(2, decline);
  if (p.health <= 0) {
    die(s, p, ill.kind === 'pneumonic' ? '肺を侵す疫病' : '疫病');
    out.push(you ? 'あなたは、夜明けを見ることなく息を引き取った。' : `${p.name}が、息を引き取った。`);
    if (!you && player.alive) s.queue.push('death_' + p.id);
  } else if (ill.sickDays >= (ill.kind === 'pneumonic' ? 4 : 5)) {
    p.illness = null; p.immune = true;
    out.push(you ? '熱が引いた。腫れ物が破れ、体が軽くなっていく。あなたは生き延びた。' : `${p.name}の熱が引いた。峠を越えたようだ。`);
    note(s, `${p.name}が病から回復した。`, true);
    if (!you && player.alive) s.queue.push('recover_' + p.id);
  } else if (p.health < 30) {
    out.push(you ? '意識が遠のく。体はもう、ほとんど動かない。' : `${p.name}の息が浅い。呼びかけても、うっすら目を開けるだけだ。`);
  } else {
    out.push(you ? '熱は続いている。' : `${p.name}の熱は続いている。`);
  }
}

/** 一晩ぶんの処理。日付を1つ進める */
export function night(s: S, o: NightOpt = {}) {
  const out: string[] = [];
  const t = s.sc.town, h = s.sc.home;
  const prev = t.prev * (o.prevFactor ?? 1);
  const ps = living(s);
  const player = s.people.player;

  // 空腹と体
  for (const p of ps) {
    if (p.satiety < 15) { adj(p, 'health', p.satiety <= 0 ? -13 : -8); adj(p, 'morale', -7); }
    else if (p.satiety < 35) { adj(p, 'health', -4); adj(p, 'morale', -4); }
    else if (p.satiety >= 50 && !sick(p)) adj(p, 'health', 3);
    if (p.morale < 20) adj(p, 'health', -2);
    adj(p, 'morale', -t.phase * (o.away ? 0.5 : 1));
    if (ps.some((q) => q !== p && sick(q))) adj(p, 'morale', -3);
    if (p.health <= 0 && p.alive) { die(s, p, '飢えと衰弱'); out.push(p.id === 'player' ? 'あなたは衰弱し、もう起き上がれなかった。' : `${p.name}は衰弱し、朝になっても目を覚まさなかった。`); if (p.id !== 'player' && player.alive) s.queue.push('death_' + p.id); }
  }
  if (ps.some((p) => p.satiety < 35)) out.push('空腹で、なかなか寝つけなかった。');

  // 疲れ
  if (player.alive) {
    if (s.stamina < 15) s.fatigue = clamp(s.fatigue + 12); else s.fatigue = clamp(s.fatigue - 8);
    let rec = 58 + flag(s, 'restBonus') - s.fatigue * 0.3;
    if (player.satiety < 35) rec *= 0.7;
    if (player.morale < 20) rec *= 0.85;
    gainStamina(s, rec);
    if (s.fatigue >= 50) { adj(player, 'health', -3); out.push('疲れが抜けない。体の芯が重い。'); }
    s.flags.restBonus = 0;
  }

  // 家族は放っておいても動く：ルチアの賃仕事
  if (!o.away && well(s.people.lucia) && t.phase <= 1 && chance(s, 0.4)) { s.money += 2; out.push('ルチアが糸紡ぎの賃仕事で2ソルド稼いだ。'); }

  // 生活用品（薪・ろうそく・灰汁）は2日に1つ減る
  if (s.day % 2 === 0 && !o.away) {
    if (s.supplies > 0) s.supplies--;
    else { ps.forEach((p) => { adj(p, 'health', -2); adj(p, 'morale', -3); }); out.push('薪もろうそくも尽きた。冷えた暗い夜を過ごした。'); }
  }

  // 家のネズミ・ノミ。食料を溜め込むほど増える
  if (!o.away) {
    if (s.food > 12) stat(s, 'hoard');
    h.infest = clamp(h.infest + prev * 11 + Math.max(0, s.food - 12) * 0.7 - (h.cat ? 5 : 0) + (ps.some((p) => sick(p) && p.illness!.kind === 'bubonic') ? 4 : 0));
    if (h.infest > 45 && s.food > 2 && chance(s, 0.35)) {
      const lost = h.infest > 75 ? 2 : 1; s.food -= lost;
      out.push(`食料の袋がネズミにかじられていた（食料−${lost}）。`); setFlag(s, 'sawRats', s.day);
    } else if (h.infest > 55 && chance(s, 0.45)) { out.push('寝床でノミに食われ、あちこちが痒い。'); setFlag(s, 'sawRats', s.day); }
  }

  // 家での感染リスク
  const bub = ps.filter((p) => sick(p) && p.illness!.kind === 'bubonic');
  const pne = ps.filter((p) => sick(p) && p.illness!.kind === 'pneumonic');
  const iso = flag(s, 'isolate') ? 0.4 : 1;
  for (const p of ps) {
    expose(s, p.id, prev * (0.04 + 0.2 * h.infest / 100) * range(s, 0.6, 1.4), 'flea', o.away ? '避難先に及んだ疫病' : '家のネズミとノミ');
    if (bub.some((q) => q !== p)) expose(s, p.id, 0.035 * Math.max(0.4, h.infest / 50), 'flea', '病人の寝具のノミ・シラミ');
    if (pne.some((q) => q !== p)) {
      const nurse = p.id === 'player' ? flag(s, 'nursedDay') === s.day : p.id === 'lucia';
      expose(s, p.id, (0.2 + (nurse ? 0.25 : 0)) * iso, 'droplet', '咳をする家族のそば');
    }
  }

  // 病の進行
  for (const p of ps) progressIllness(s, p, out);
  for (const p of living(s)) { p.cared = 0; if (!p.talked && p.id !== 'player') adj(p, 'bond', -1); p.talked = false; }

  s.day++;
  s.report = out;
}

// ---------- 一日の始まり ----------
const SPOT_KINDS = ['wood', 'wood', 'coins', 'herbs', 'basket'];
export function spawnSpots(s: S) {
  const n = randInt(s, 1, 3) - (s.sc.town.phase >= 3 ? 1 : 0);
  s.spots = [];
  const used: number[] = [];
  for (let i = 0; i < Math.max(1, n); i++) {
    let at = randInt(s, 0, 14);
    while (used.includes(at)) at = (at + 1) % 15;
    used.push(at);
    const kind = s.sc.town.phase >= 2 && chance(s, 0.35) ? 'bundle' : pick(s, SPOT_KINDS);
    s.spots.push({ id: `sp${s.day}_${i}`, kind, at, taken: false });
  }
}

export function startDay(s: S, triggers: (s: S) => void) {
  const player = s.people.player;
  s.maxTime = sick(player) ? 3 : 6;
  s.time = s.maxTime;
  s.zonesToday = [];
  updateTown(s);
  spawnSpots(s);
  s.queue.push('morning');
  triggers(s);
}

// ---------- 結末 ----------
/** プレイヤーの手を離れたあとの日々を早送りする（プレイヤーの死後、避難後など） */
export function simulateRest(s: S, o: NightOpt & { foodPerDay?: number } = {}) {
  while (s.day <= TOTAL_DAYS && living(s).length > 0) {
    const t = s.sc.town;
    if (!o.away && well(s.people.lucia) && t.marketOpen && t.stock > 0 && s.food < mouths(s) * 2 && s.money >= t.price) {
      const n = Math.min(3, t.stock, Math.floor(s.money / t.price)); s.food += n; s.money -= n * t.price;
    }
    s.food += o.foodPerDay ?? 0;
    eat(s, 'child');
    night(s, o);
    s.queue = [];
    updateTown(s, true);
  }
}

/** 14日目を越えた時点でまだ病の床にある者の、その後を決める（新たな感染は起こさない） */
export function aftermath(s: S) {
  for (let i = 0; i < 10 && living(s).some((p) => p.illness); i++) {
    const out: string[] = [];
    if (s.food >= 1) eat(s, 'child');
    const lucia = s.people.lucia;
    for (const p of living(s)) { if (sick(p) && p.id !== 'lucia' && !well(lucia) && s.people.player.alive && well(s.people.player)) p.cared = 6; progressIllness(s, p, out); p.cared = 0; }
    s.day++;
  }
  s.queue = [];
}

export function finish(s: S, how: Ending['how']) {
  if (s.ended) return;
  const pl = s.people.player.alive;
  const fam = family(s).filter((p) => p.alive).length;
  const code: Ending['code'] = pl ? (how === 'fledAlone' ? 'C' : fam === 2 ? 'A' : fam === 1 ? 'B' : 'C') : fam > 0 ? 'D' : 'E';
  const titles: Record<string, string> = {
    A: how === 'fled' ? '丘の上の朝' : '三人の朝',
    B: '欠けた食卓',
    C: how === 'fledAlone' ? '背を向けた門' : 'ひとりの朝',
    D: how === 'fledAlone' ? '届かなかった背中' : '託したもの',
    E: '静かな家',
  };
  s.queue = [];
  s.ended = { code, title: titles[code], how, day: Math.min(s.day, TOTAL_DAYS), story: [] };
}

/** プレイヤーが死んだ／14日を越えた、を確かめて結末へ進める。終わったら true */
export function checkEnd(s: S): boolean {
  if (s.ended) return true;
  if (!s.people.player.alive) {
    const day = s.day;
    simulateRest(s);
    aftermath(s);
    finish(s, 'died');
    s.ended!.day = Math.min(day, TOTAL_DAYS);
    return true;
  }
  if (s.day > TOTAL_DAYS) { aftermath(s); finish(s, 'stayed'); return true; }
  return false;
}

// ---------- 避難 ----------
export function evacuate(s: S, mode: 'family' | 'alone', via: string): string[] {
  const t = s.sc.town;
  const out: string[] = [];
  const startDayN = s.day;
  if (mode === 'alone') {
    note(s, `家族を残し、ひとりで町を出た（${s.day}日目）。`, true);
    out.push('あなたは振り返らなかった。振り返れば、戻ってしまうと分かっていたから。');
    // 家族は残される。食料の半分は置いていく
    const carry = Math.min(s.food, 3), left = s.food - carry, moneyCarry = Math.ceil(s.money / 2);
    const clone = () => JSON.parse(JSON.stringify(s)) as S;
    const base = s.journal.length;
    const fam = clone();
    fam.people.player.alive = false; fam.food = left; fam.money = s.money - moneyCarry;
    for (const p of family(fam)) adj(p, 'morale', -30);
    simulateRest(fam); aftermath(fam);
    // 自分は街道へ
    const solo = clone();
    solo.people.lucia.alive = false; solo.people.marco.alive = false;
    solo.food = carry; solo.money = moneyCarry; solo.sc.home.guest = 0; solo.sc.home.infest = 25; solo.sc.home.cat = 0;
    simulateRest(solo, { prevFactor: 0.3, away: true, foodPerDay: 1 }); aftermath(solo);
    s.people.lucia = fam.people.lucia; s.people.marco = fam.people.marco; s.people.player = solo.people.player;
    s.journal = fam.journal.concat(solo.journal.slice(base));
    s.rng = solo.rng; s.day = TOTAL_DAYS + 1; s.food = solo.food; s.money = solo.money;
    out.push(solo.people.player.alive ? '街道沿いの納屋を渡り歩き、あなたは生き延びた。' : '逃げた先でも、病はあなたを見逃さなかった。');
    setFlag(s, 'fledDay', startDayN);
    finish(s, 'fledAlone');
    s.ended!.day = TOTAL_DAYS;
    return out;
  }
  note(s, `家族を連れて町を出た（${s.day}日目・${via}）。`, true);
  setFlag(s, 'fledDay', startDayN);
  const cart = flag(s, 'hasCart');
  out.push(cart ? '荷車に荷と家族を乗せ、あなたは町を後にした。' : '背に荷を負い、マルコの手を引いて、あなたは町を後にした。');
  const sickOnes = living(s).filter(sick);
  // 街道の二日間
  if (chance(s, 0.15 + 0.12 * t.phase)) {
    const lost = Math.ceil(s.money * 0.6); s.money -= lost;
    out.push(lost > 0 ? `峠で、棍棒を持った男たちに道をふさがれた。命と引き換えに${lost}ソルドを渡した。` : '峠で男たちに囲まれたが、奪う物がないと知ると、唾を吐いて去っていった。');
  } else out.push('街道には、同じように町を捨てた家族の姿がいくつもあった。誰も口をきかなかった。');
  for (let i = 0; i < 2 && living(s).length; i++) {
    for (const p of sickOnes) if (p.alive) { p.health -= cart ? 5 : 15; if (p.health <= 0) { die(s, p, '避難の道中の衰弱'); out.push(`${p.name}は、道の途中で動かなくなった。`); } }
    eat(s, 'child'); night(s, { prevFactor: 0.7, away: true }); s.queue = []; updateTown(s, true);
  }
  if (!s.people.player.alive) { simulateRest(s, { prevFactor: 0.4, away: true }); aftermath(s); finish(s, 'fled'); return out; }
  const showing = living(s).some(sick);
  s.sc.home.infest = 28; s.sc.home.cat = 0;
  if (showing && chance(s, 0.7)) {
    out.push('村の入口で、見張りが杖を横にした。「病人を連れた者は入れぬ。引き返せ」');
    out.push('ルチアの兄の農場は、目の前の丘の向こうだった。あなたたちは、打ち捨てられた炭焼き小屋で夜露をしのいだ。');
    setFlag(s, 'refusedEntry');
    simulateRest(s, { prevFactor: 0.4, away: true, foodPerDay: 1 });
  } else if (t.farmStruck) {
    out.push('農場に着いたとき、戸は開いたままで、かまどは冷えていた。ルチアの兄トンマーゾは、納屋の藁の上で冷たくなっていた。');
    out.push('病は、町よりも先にここへ来ていたのだ。');
    setFlag(s, 'farmDead');
    s.sc.home.infest = 70;
    simulateRest(s, { prevFactor: 1, away: true, foodPerDay: 1 });
  } else {
    const gift = s.money >= 10;
    if (gift) s.money -= 10;
    out.push('ルチアの兄トンマーゾは、黙って門を開けた。' + (gift ? 'あなたが差し出した銀貨を見て、義姉も頷いた。' : '義姉は、増えた口の数を数えるような目をしていた。'));
    out.push('畑を手伝い、納屋で眠る日々が始まった。丘の向こうで、町の鐘がかすかに鳴っていた。');
    setFlag(s, 'farmOk');
    simulateRest(s, { prevFactor: 0.45, away: true, foodPerDay: gift ? 3 : 2 });
  }
  aftermath(s);
  finish(s, 'fled');
  return out;
}
