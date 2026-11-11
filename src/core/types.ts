// シリーズ共通の型。時代ごとのシナリオは GameState<SC> の SC に固有の状態を持たせる。

export type PersonId = 'player' | 'lucia' | 'marco';

/** 病気（黒死病編では腺ペスト／肺ペスト）。他の時代でも「潜伏→発症→回復/死亡」の枠は使い回せる */
export interface Illness {
  kind: string;
  /** 感染してからの日数 */
  days: number;
  incubation: number;
  /** 発症してからの日数 */
  sickDays: number;
  /** 0〜1。重さ */
  severity: number;
  symptomatic: boolean;
  /** 推定される主な原因（リザルトで明かす） */
  cause: string;
  causeDay: number;
}

export interface Person {
  id: PersonId;
  name: string;
  alive: boolean;
  /** 0〜100 */
  health: number;
  /** 満腹度 0〜100（低いほど空腹） */
  satiety: number;
  morale: number;
  /** プレイヤーとの関係 0〜100（プレイヤー自身は未使用） */
  bond: number;
  /** 内部パラメータ：蓄積した感染リスク。画面には出さない */
  risk: number;
  /** この値を risk が超えると感染する（開始時に乱数で決まる個人差） */
  threshold: number;
  /** リスクの内訳（原因ラベル→量） */
  sources: Record<string, number>;
  illness: Illness | null;
  immune: boolean;
  /** 今日受けた看病の点数 */
  cared: number;
  talked: boolean;
  deathDay?: number;
  deathCause?: string;
}

export interface JournalEntry { day: number; text: string; key?: boolean }
export interface Danger { day: number; text: string; amount: number }

export interface Spot { id: string; kind: string; at: number; taken: boolean }

export interface Ending {
  code: 'A' | 'B' | 'C' | 'D' | 'E';
  title: string;
  how: 'stayed' | 'fled' | 'fledAlone' | 'died';
  day: number;
  story: string[];
}

export interface GameState<SC = unknown> {
  v: number;
  scenario: string;
  seed: string;
  /** 乱数の内部状態。セーブに含めるので、ロード後も同じ展開になる */
  rng: number;
  day: number;
  /** 今日の残り行動時間（刻） */
  time: number;
  maxTime: number;
  stamina: number;
  fatigue: number;
  people: Record<PersonId, Person>;
  money: number;
  food: number;
  supplies: number;
  remedies: number;
  flags: Record<string, number>;
  /** 自動で開くイベントの待ち行列（エンカウンターID） */
  queue: string[];
  /** エンカウンターを最後に見た日 */
  seen: Record<string, number>;
  zonesToday: string[];
  /** いま話しかけている相手など、動的エンカウンター用の文脈 */
  ctx: string;
  spots: Spot[];
  journal: JournalEntry[];
  dangers: Danger[];
  /** 朝のカードに出す、昨夜からの出来事 */
  report: string[];
  stats: Record<string, number>;
  ended: Ending | null;
  sc: SC;
}

export interface Cost { time?: number; stamina?: number; money?: number; food?: number; supplies?: number; remedies?: number }

export type RunResult = void | string | string[] | { t?: string | string[]; next?: string };

export interface Choice<S> {
  label: string | ((s: S) => string);
  hint?: string | ((s: S) => string);
  cost?: Cost | ((s: S) => Cost);
  show?: (s: S) => boolean;
  /** true なら選べる。文字列なら選べない理由 */
  ok?: (s: S) => true | string;
  run?: (s: S) => RunResult;
  /** 重要な選択として記録する */
  key?: string;
  /** 自動テストのボット用の目印 */
  tag?: string;
}

export interface AutoRule<S> {
  /** 'morning' | 'supper' | 'zone:market' など */
  on: string;
  when?: (s: S) => boolean;
  /** 既定は一度きり。false にすると cooldown 日おきに再発する */
  once?: boolean;
  cooldown?: number;
  /** 優先度が1以上なら条件を満たした時点で必ず起きる。0（省略）は抽選 */
  pri?: number;
  chance?: number;
}

export interface Encounter<S> {
  id: string;
  title?: string;
  category?: 'daily' | 'crisis' | 'relation' | 'major';
  /** 話し相手（表示名）。行頭に「名前｜」を付けた行はその人のせりふになる */
  speaker?: string | ((s: S) => string);
  text: string | string[] | ((s: S) => string | string[]);
  choices: Choice<S>[] | ((s: S) => Choice<S>[]);
  auto?: AutoRule<S>;
}

export interface ChoiceView { idx: number; label: string; hint: string; disabled: string | null; tag?: string }
export interface EncounterView { id: string; title?: string; speaker?: string; lines: string[]; choices: ChoiceView[]; category?: string }
export interface ChooseResult { lines: string[]; next?: string }

export interface ShopItem { key: string; name: string; desc: string; price: number; stock: number; unit: string }
export interface ShopView { id: string; name: string; keeper: string; note: string; items: ShopItem[] }

// ---- 3D側に渡す「いまの町の見え方」 ----
export interface NpcView {
  id: string;
  label: string;
  /** cast のキー（見た目） */
  look: string;
  x: number; z: number;
  face: number;
  pose: 'stand' | 'lie' | 'sit';
  wander?: boolean;
  talk?: boolean;
}
export interface SpotView { id: string; kind: string; label: string; verb: string; x: number; z: number; marker?: boolean }
export interface WorldView {
  phase: number;
  /** 0=朝 〜 1=日暮れ */
  dusk: number;
  npcs: NpcView[];
  spots: SpotView[];
  /** 板で閉ざされた建物ID */
  boarded: string[];
  stalls: Record<string, 'open' | 'sparse' | 'closed'>;
  bodies: number;
  fires: boolean;
  gateClosed: boolean;
  /** 町のにぎわい 0〜1（環境音） */
  bustle: number;
}

export interface StatusRow { name: string; id: PersonId; alive: boolean; state: string; tone: 'ok' | 'warn' | 'bad' | 'dead'; health: number; satiety: number; morale: number; bond: number; note: string }

export interface ResultData {
  ending: Ending;
  days: number;
  rows: { label: string; value: string }[];
  family: { name: string; fate: string; alive: boolean }[];
  choices: string[];
  danger: string;
  reflections: string[];
  history: { tag: '史実' | '研究・推定' | '創作'; text: string }[];
  seed: string;
}
