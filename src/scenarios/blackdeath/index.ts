// 第1章「黒死病 — 1348年、イタリア」。シナリオの入口。
import { triggerAuto, type EncounterTable } from '../../core/encounters';
import type { Scenario } from '../../core/scenario';
import type { NpcView, ResultData, ShopItem, ShopView, SpotView, StatusRow, WorldView } from '../../core/types';
import { cast } from './cast';
import { bindTrigger, familyEncounters } from './content/family';
import { townEncounters } from './content/town';
import { anchors, map } from './map';
import { L, M, P, S, TOTAL_DAYS, adj, expose, family, flag, mouths, newGame, npc, setFlag, sick } from './rules';
import { buildResult } from './result';

const encounters: EncounterTable = {};
for (const e of [...familyEncounters, ...townEncounters]) encounters[e.id] = e;
encounters.cat_pet = {
  id: 'cat_pet', title: 'ネーロ',
  text: 'ネーロは片目だけ開けてあなたを見ると、また喉を鳴らしはじめた。',
  choices: [{ label: 'なでる', run: (s: S) => { if (flag(s, 'catDay') !== s.day) { setFlag(s, 'catDay', s.day); adj(P(s), 'morale', 2); } } }],
};
bindTrigger((s, on) => { triggerAuto(encounters, s, on); });

// ---------- 店 ----------
const SHOP_GROUP: Record<string, string> = { beppe: 'mk', gina: 'mk', beppeDoor: 'bd', peddler: 'pd' };
const bought = (s: S, shop: string, key: string) => (flag(s, `bd_${shop}_${key}`) === s.day ? flag(s, `bc_${shop}_${key}`) : 0);

function shop(s: S, id: string): ShopView {
  const t = s.sc.town;
  const item = (key: string, name: string, desc: string, price: number, base: number, unit = '個'): ShopItem => ({ key, name, desc, price, stock: Math.max(0, base - bought(s, id, key)), unit });
  const FOOD = '黒パン・豆・粉。一人が一日に一食ぶん食べる。';
  const SUP = '薪・ろうそく・灰汁。二日に一つ減る。掃除と洗濯にも使う。';
  const used = flag(s, 'shopDay_' + SHOP_GROUP[id]) === s.day;
  const note = used ? '' : 'その日最初の買い物に、時間を1使う。';
  if (id === 'beppe') return { id, name: '穀物の露店', keeper: 'ベッペ', note, items: [{ key: 'food', name: '食料', desc: FOOD, price: t.price, stock: t.stock, unit: '食' }] };
  if (id === 'beppeDoor') return { id, name: 'ベッペの家', keeper: 'ベッペ', note, items: [item('food', '食料', FOOD, Math.ceil(t.price * 1.3), 3, '食')] };
  if (id === 'gina') return { id, name: '薬草と荒物の露店', keeper: 'ジーナ', note, items: [item('supplies', '生活用品', SUP, 3 + t.phase, 4), item('remedies', '薬草', '柳の皮・セージ。看病のとき、熱と痛みを少し和らげる。病そのものは治せない。', 5 + t.phase, 3)] };
  return { id, name: '行商人の荷', keeper: '行商人', note, items: [item('food', '食料', FOOD, 5, 3, '食'), item('supplies', '生活用品', SUP, 4, 2)] };
}

function buy(s: S, shopId: string, key: string): string | null {
  const it = shop(s, shopId).items.find((i) => i.key === key);
  if (!it) return '売っていない';
  if (it.stock <= 0) return '売り切れだ';
  if (s.money < it.price) return 'お金が足りない';
  const g = 'shopDay_' + SHOP_GROUP[shopId];
  if (flag(s, g) !== s.day) {
    if (s.time < 1) return '今日はもう時間がない';
    s.time -= 1; setFlag(s, g, s.day);
    if (shopId === 'beppe' || shopId === 'beppeDoor') npc(s, 'beppe').rel++;
    if (shopId === 'beppe' || shopId === 'gina') expose(s, 'player', 0.03 * s.sc.town.prev, 'flea', '市場の人混みと穀物の荷');
  }
  s.money -= it.price;
  if (key === 'food') s.food++; else if (key === 'supplies') s.supplies++; else s.remedies++;
  if (shopId === 'beppe') s.sc.town.stock--;
  else { setFlag(s, `bc_${shopId}_${key}`, bought(s, shopId, key) + 1); setFlag(s, `bd_${shopId}_${key}`, s.day); }
  s.stats.bought = (s.stats.bought ?? 0) + 1;
  return null;
}

// ---------- 触れたもの → エンカウンター ----------
const NPC_ENCOUNTER: Record<string, string> = {
  lucia: 'lucia', marco: 'marco', pippo: 'pippo', cat: 'cat_pet', beppe: 'beppe', gina: 'gina', guido: 'guido', priest: 'priest', teresa: 'teresa', pietro: 'pietro',
  lando: 'lando', bernardo: 'bernardo', peddler: 'peddler', clothVendor: 'vendor', vegVendor: 'vendor', sick1: 'stranger', sick2: 'stranger', sick3: 'stranger',
};
const SPOT_ENCOUNTER: Record<string, string> = {
  bed: 'bed', pantry: 'pantry', notice: 'notice', well: 'well', workshopDoor: 'workshop_door', altar: 'altar', teresaDoor: 'teresa_door', pietroDoor: 'pietro_door',
  gate: 'gate', emptyHouse: 'empty_house', postern: 'postern', beppeDoor: 'beppe_door',
};

function interact(s: S, target: string): string | null {
  s.ctx = target;
  if (target.startsWith('folk')) return 'folk';
  if (target.startsWith('sp')) return s.spots.some((x) => x.id === target && !x.taken) ? 'pickup' : null;
  return NPC_ENCOUNTER[target] ?? SPOT_ENCOUNTER[target] ?? null;
}

function enterZone(s: S, zone: string): string | void {
  if (s.ended) return;
  let greet: string | undefined;
  if (zone === 'home') {
    if (s.time <= 3 && !s.zonesToday.includes('homeEve')) {
      s.zonesToday.push('homeEve');
      triggerAuto(encounters, s, 'zone:homeEve', 1);
      if (!s.queue.length) greet = M(s).alive && !sick(M(s)) ? 'マルコ｜「おかえり、父さん！」' : L(s).alive && !sick(L(s)) ? 'ルチア｜「おかえりなさい。無事でよかった」' : undefined;
    }
    return greet;
  }
  if (s.zonesToday.includes(zone)) return;
  s.zonesToday.push(zone);
  triggerAuto(encounters, s, 'zone:' + zone, 1);
}

// ---------- 町の見え方 ----------
const GENERIC_BOARDED = [[], [], ['n2', 'e1'], ['n2', 'e1', 'n1', 'houseB', 'tavern', 'houseA1', 'e2']];

function worldView(s: S): WorldView {
  const t = s.sc.town, N = s.sc.npcs, a = anchors;
  const npcs: NpcView[] = [];
  const spots: SpotView[] = [];
  const at = (id: string, label: string, p: { x: number; z: number; face?: number }, extra: Partial<NpcView> = {}) => npcs.push({ id, label, look: id, x: p.x, z: p.z, face: p.face ?? 0, pose: 'stand', talk: true, ...extra });
  const spot = (id: string, label: string, verb: string, p: { x: number; z: number }, kind = 'fixed') => spots.push({ id, kind, label, verb, x: p.x, z: p.z });

  const l = L(s), m = M(s);
  if (l.alive) sick(l) ? at('lucia', 'ルチア', a.luciaSick, { pose: 'lie' }) : at('lucia', 'ルチア', a.lucia);
  if (m.alive) sick(m) ? at('marco', 'マルコ', a.marcoSick, { pose: 'lie' }) : at('marco', 'マルコ', a.marco);
  if (s.sc.home.guest) at('pippo', 'ピッポ', a.pippo);
  if (s.sc.home.cat) at('cat', 'ネーロ', a.cat, { pose: 'sit' });

  if (t.marketOpen && N.beppe.st === 'ok') at('beppe', '穀物売りのベッペ', a.beppe);
  if (t.marketOpen && N.gina.st === 'ok') at('gina', '薬草売りのジーナ', a.gina);
  if (t.phase === 0) at('clothVendor', '布売り', a.clothVendor);
  if (t.phase <= 1 && t.marketOpen) at('vegVendor', '青物売り', a.vegVendor);
  if (N.guido.st === 'ok') at('guido', 'グイド親方', a.guido); else spot('workshopDoor', '工房の戸', '調べる', a.workshopDoor);
  if (N.priest.st === 'ok') at('priest', 'ドン・アンセルモ司祭', a.priest); else spot('altar', '祭壇', '祈る', a.altar);
  if (N.teresa.st === 'ok') at('teresa', '隣人テレーザ', a.teresa, { pose: 'sit' }); else spot('teresaDoor', 'テレーザの家', '調べる', a.teresaDoor);
  if (N.pietro.st === 'ok') at('pietro', '石工ピエトロ', a.pietro); else spot('pietroDoor', 'ピエトロの家', '調べる', a.pietroDoor);
  if (N.lando.st === 'ok') at('lando', '門番ランド', a.lando); else spot('gate', '町の門', '調べる', a.gate);
  if (N.bernardo.st === 'ok' && s.day >= t.onset) at('bernardo', '医師ベルナルド', a.bernardo);
  if (flag(s, 'savedPeddler') && !t.marketOpen) at('peddler', '行商人', a.peddler);
  if (t.phase >= 1 && t.phase <= 2) at('sick1', '病人', a.sick1, { pose: 'lie' });
  if (t.phase >= 2) at('sick2', '病人', a.sick2, { pose: 'lie' });
  if (t.phase >= 3) at('sick3', '病人', a.sick3, { pose: 'lie' });
  const walkers = [7, 5, 3, 1][t.phase];
  for (let i = 1; i <= walkers; i++) npcs.push({ id: 'folk' + i, label: '町の人', look: 'folk' + i, x: 0, z: 0, face: 0, pose: 'stand', wander: true, talk: true });

  spot('bed', '寝床', '休む', a.bed);
  spot('pantry', '食料棚', '調べる', a.pantry);
  spot('notice', '掲示', '読む', a.notice);
  spot('well', '井戸', '調べる', a.well);
  spot('postern', '西の通用門', '調べる', a.postern);
  if (t.phase >= 2) spot('emptyHouse', '空き家', '調べる', a.emptyHouse);
  if (!t.marketOpen) spot('beppeDoor', 'ベッペの家', '戸を叩く', { x: 6, z: 8.6 });
  const LABEL: Record<string, string> = { wood: '薪の束', coins: '光る物', herbs: '薬草', basket: '倒れた籠', bundle: '布の包み' };
  for (const sp of s.spots) if (!sp.taken) { const p = map.spotPoints[sp.at]; spots.push({ id: sp.id, kind: sp.kind, label: LABEL[sp.kind], verb: '調べる', x: p.x, z: p.z, marker: true }); }

  const boarded = [...GENERIC_BOARDED[t.phase]];
  if (N.teresa.st === 'dead') boarded.push('teresa');
  if (N.pietro.st === 'dead') boarded.push('pietro');
  if (N.guido.st !== 'ok') boarded.push('workshop');
  if (N.beppe.st === 'dead') boarded.push('s2');
  return {
    phase: t.phase,
    dusk: 1 - s.time / Math.max(1, s.maxTime),
    npcs, spots, boarded,
    stalls: {
      beppe: t.marketOpen && N.beppe.st === 'ok' ? (t.stock > 5 ? 'open' : 'sparse') : 'closed',
      gina: t.marketOpen && N.gina.st === 'ok' ? 'open' : 'closed',
      cloth: t.phase === 0 ? 'open' : 'closed',
      veg: !t.marketOpen || t.phase >= 2 ? 'closed' : t.phase === 1 ? 'sparse' : 'open',
    },
    bodies: [0, 0, 3, 6][t.phase],
    fires: t.phase >= 2,
    gateClosed: s.day >= t.gateCloseDay,
    bustle: [1, 0.65, 0.3, 0.06][t.phase],
  };
}

// ---------- HUD・メニュー ----------
const TIME_NAMES = ['朝', '午前', '昼', '午後', '夕方', '日暮れ前', '夜'];
function timeLabel(s: S) { return TIME_NAMES[Math.min(6, Math.round((1 - s.time / s.maxTime) * 6))]; }

function hint(s: S): string {
  const t = s.sc.town;
  if (s.time <= 0) return '日が暮れた。家に戻り、寝床で一日を終えよう';
  if (sick(P(s))) return '熱がある。寝床で横になるか、出来ることを選ぼう';
  if (family(s).some(sick) && flag(s, 'nursedDay') !== s.day) return '家族が病に伏せている。話しかけて看病できる';
  if (s.day === 1) {
    if (!s.stats.bought) return '東の広場の市場で、ベッペから食料を買おう';
    if (!s.stats.worked) return '広場の東、グイド親方の工房で働いて稼ごう';
  }
  if (s.food < mouths(s)) return '今夜の食料が足りない';
  if (s.food < mouths(s) * 2) return t.marketOpen ? '食料が残りわずか。市場で買い足そう' : '食料が残りわずか。教会の施しや、路地を当たろう';
  if (flag(s, 'fleePlan') === 1) return '町を出るなら、東の門へ';
  return `今日の残り時間で、何をするか決めよう（あと${s.time}刻）`;
}

function selfState(s: S): { text: string; tone: 'ok' | 'warn' | 'bad' } {
  const p = P(s);
  if (sick(p)) return { text: p.health < 35 ? '危篤' : '高熱', tone: 'bad' };
  if (p.health < 40) return { text: '衰弱', tone: 'bad' };
  if (p.satiety < 35) return { text: '空腹', tone: 'warn' };
  if (s.fatigue >= 50) return { text: '疲れが抜けない', tone: 'warn' };
  if (s.stamina < 25) return { text: '疲労', tone: 'warn' };
  if (p.morale < 25) return { text: '気力がない', tone: 'warn' };
  return { text: '良好', tone: 'ok' };
}

function familyRows(s: S): StatusRow[] {
  return family(s).map((p) => {
    let state = '元気', tone: StatusRow['tone'] = 'ok', noteT = '';
    if (!p.alive) { state = `${p.deathDay}日目に死去`; tone = 'dead'; noteT = p.deathCause ?? ''; }
    else if (sick(p)) { state = p.health < 35 ? '危篤' : '高熱で伏せている'; tone = 'bad'; noteT = p.illness!.kind === 'pneumonic' ? '咳をして血を吐く' : '体に硬い腫れ物がある'; }
    else if (p.immune) { state = '病から回復した'; tone = 'ok'; }
    else if (p.satiety < 35) { state = '空腹'; tone = 'warn'; }
    else if (p.health < 50) { state = '弱っている'; tone = 'warn'; }
    else if (p.morale < 25) { state = 'ふさぎ込んでいる'; tone = 'warn'; }
    return { name: p.name, id: p.id, alive: p.alive, state, tone, health: p.health, satiety: p.satiety, morale: p.morale, bond: p.bond, note: noteT };
  });
}

function items(s: S) {
  const out = [
    { name: '所持金', count: `${s.money}ソルド`, desc: '銀貨。工房の日当は7〜9ソルドほど。' },
    { name: '食料', count: `${s.food}食`, desc: `黒パン・豆・粉。いまは一日に${mouths(s)}食ぶん減る。溜め込みすぎるとネズミが寄る。` },
    { name: '生活用品', count: `${s.supplies}`, desc: '薪・ろうそく・灰汁。二日に一つ減る。食料棚で家の掃除と洗濯に使える。' },
    { name: '薬草', count: `${s.remedies}`, desc: '柳の皮やセージ。看病のときに使うと、熱と痛みを少し和らげる。' },
  ];
  if (flag(s, 'hasCart')) out.push({ name: '手押し車', count: '1', desc: '石工の荷車。荷や、歩けない家族を運べる。' });
  if (flag(s, 'theriac')) out.push({ name: 'テリアカ', count: '1壺', desc: '医師から買った万能の解毒薬。毎朝、葡萄酒に溶いて飲む。' });
  if (s.sc.home.cat) out.push({ name: '黒猫ネーロ', count: '', desc: 'マルコが拾ってきた猫。台所でよくネズミを追っている。' });
  return out;
}

export const blackDeath: Scenario<S> = {
  id: 'blackdeath',
  title: '黒死病',
  subtitle: '1348年、イタリア',
  totalDays: TOTAL_DAYS,
  intro: [
    'あなたは英雄でも、貴族でもない。',
    '丘の町で、家族と暮らす、ひとりの職人だ。',
    '十四日間、生き延びよ。',
  ],
  map, cast, encounters,
  newGame: (seed) => { const s = newGame(seed); s.queue.push('morning'); return s; },
  interact, enterZone, worldView, shop, buy,
  dateLabel: (s) => `1348年 春・${Math.min(s.day, TOTAL_DAYS)}日目`,
  timeLabel, hint, selfState, familyRows, items,
  result: (s): ResultData => buildResult(s),
};
