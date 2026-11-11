// シナリオ（時代）が実装するインターフェース。UI と 3D はここだけを見る。
import type { EncounterTable } from './encounters';
import type { GameState, ResultData, ShopView, StatusRow, WorldView } from './types';
import type { MapDef } from '../three/mapTypes';
import type { Look } from '../three/characters';

export interface Scenario<S extends GameState<any> = GameState<any>> {
  id: string;
  title: string;
  subtitle: string;
  totalDays: number;
  intro: string[];
  map: MapDef;
  cast: Record<string, Look>;
  encounters: EncounterTable;
  newGame(seed: string): S;
  /** 3Dで何かに触れたとき。開くエンカウンターIDを返す（なければ null） */
  interact(s: S, targetId: string): string | null;
  /** 区域に入ったとき（その日最初の一度だけ意味がある）。イベントを待ち行列に積む。帰宅のひとことなど、画面に軽く出す文を返すこともある */
  enterZone(s: S, zone: string): string | void;
  worldView(s: S): WorldView;
  shop(s: S, id: string): ShopView;
  buy(s: S, shopId: string, key: string): string | null;
  dateLabel(s: S): string;
  timeLabel(s: S): string;
  /** HUDの「いまやること」の一行 */
  hint(s: S): string;
  /** 自分の体調を言葉で（数値は見せない） */
  selfState(s: S): { text: string; tone: 'ok' | 'warn' | 'bad' };
  familyRows(s: S): StatusRow[];
  items(s: S): { name: string; count: string; desc: string }[];
  result(s: S): ResultData;
}
