import { describe, expect, it } from 'vitest';
import { chooseEncounter, viewEncounter } from '../src/core/encounters';
import { hashSeed, rand } from '../src/core/rng';
import { blackDeath as sc } from '../src/scenarios/blackdeath';
import { S, TOTAL_DAYS, checkEnd, eat, expose, finish, night, npc } from '../src/scenarios/blackdeath/rules';
import { runGame, strategies } from './bot';

const pick = (s: S, id: string, tag: string) => {
  const v = viewEncounter(sc.encounters, s, id);
  const c = v.choices.find((c) => c.tag === tag)!;
  return { c, r: c.disabled ? null : chooseEncounter(sc.encounters, s, id, c.idx) };
};

describe('乱数とシード', () => {
  it('同じシードなら同じ列になる', () => {
    const a = { rng: hashSeed('abc') }, b = { rng: hashSeed('abc') };
    expect([rand(a), rand(a), rand(a)]).toEqual([rand(b), rand(b), rand(b)]);
  });
  it('同じシード・同じ行動なら、結末まで完全に同じになる', () => {
    for (const st of [strategies.smart, strategies.naive, strategies.flee]) {
      expect(JSON.stringify(runGame('fixed-1', st))).toBe(JSON.stringify(runGame('fixed-1', st)));
    }
  });
  it('シードが違えば出だしが変わる', () => {
    const starts = new Set(['1', '2', '3', '4', '5', '6', '7', '8'].map((x) => { const s = sc.newGame(x) as S; return `${s.money}/${s.food}/${s.sc.town.onset}/${s.sc.town.gateCloseDay}`; }));
    expect(starts.size).toBeGreaterThan(3);
  });
});

describe('一日の流れと資源', () => {
  it('働くと時間・体力が減り、お金が増える', () => {
    const s = sc.newGame('t1') as S;
    const money = s.money;
    pick(s, 'guido', 'work');
    expect(s.money).toBe(money + 9);
    expect(s.time).toBe(3);
    expect(s.stamina).toBe(75);
  });
  it('時間が足りなければ働けない', () => {
    const s = sc.newGame('t1') as S;
    s.time = 2;
    expect(pick(s, 'guido', 'work').c.disabled).toBeTruthy();
  });
  it('買い物でお金と在庫が減り、食料が増える。その日最初だけ時間を使う', () => {
    const s = sc.newGame('t2') as S;
    const { money, food } = s; const price = s.sc.town.price, stock = s.sc.town.stock;
    expect(sc.buy(s, 'beppe', 'food')).toBeNull();
    expect(sc.buy(s, 'beppe', 'food')).toBeNull();
    expect(s.money).toBe(money - price * 2);
    expect(s.food).toBe(food + 2);
    expect(s.sc.town.stock).toBe(stock - 2);
    expect(s.time).toBe(5);
    s.money = 0;
    expect(sc.buy(s, 'beppe', 'food')).toBe('お金が足りない');
  });
  it('一日を終えると日付が進み、食料が人数ぶん減る', () => {
    const s = sc.newGame('t3') as S;
    s.queue = []; s.food = 9;
    pick(s, 'bed', 'sleep'); pick(s, 'supper', 'sleep');
    expect(s.day).toBe(2);
    expect(s.food).toBeLessThanOrEqual(6);
    expect(s.time).toBe(6);
    expect(s.queue).toContain('morning');
  });
  it('食料が足りない夜、子を優先すればマルコの空腹が抑えられる', () => {
    const s = sc.newGame('t4') as S;
    s.food = 1; eat(s, 'child');
    expect(s.people.marco.satiety).toBeGreaterThan(s.people.lucia.satiety);
    expect(s.food).toBe(0);
  });
});

describe('感染と健康', () => {
  it('リスクがしきい値を超えると感染し、潜伏期のあと発症する', () => {
    const s = sc.newGame('t5') as S;
    expose(s, 'lucia', 5, 'flea', 'テスト');
    const ill = s.people.lucia.illness!;
    expect(ill).toBeTruthy();
    expect(ill.symptomatic).toBe(false);
    for (let i = 0; i < ill.incubation; i++) night(s);
    expect(s.people.lucia.illness!.symptomatic).toBe(true);
    expect(s.queue).toContain('sick_lucia');
  });
  it('飛沫由来のリスクが主なら肺の病になる', () => {
    const s = sc.newGame('t6') as S;
    expose(s, 'player', 5, 'droplet', '咳');
    expect(s.people.player.illness!.kind).toBe('pneumonic');
  });
  it('回復した者は二度と感染しない', () => {
    const s = sc.newGame('t7') as S;
    s.people.marco.immune = true;
    expose(s, 'marco', 9, 'flea', 'テスト');
    expect(s.people.marco.illness).toBeNull();
  });
  it('看病した方が、しない場合より体力が残る', () => {
    const run = (care: boolean) => {
      const s = sc.newGame('t8') as S;
      s.people.lucia.alive = false; // 自動の付き添いを外す
      expose(s, 'marco', 9, 'flea', 'テスト');
      const ill = s.people.marco.illness!; ill.kind = 'bubonic'; ill.severity = 0.5; ill.incubation = 1;
      night(s);
      for (let i = 0; i < 3; i++) { if (care) s.people.marco.cared = 7; s.food = 9; eat(s, 'full'); night(s); }
      return s.people.marco.health;
    };
    expect(run(true)).toBeGreaterThan(run(false) + 10);
  });
});

describe('イベントの条件', () => {
  it('市場が閉じると商人は広場からいなくなり、露店は閉まる', () => {
    const s = sc.newGame('t9') as S;
    s.sc.town.marketOpen = 0;
    const w = sc.worldView(s);
    expect(w.npcs.some((n) => n.id === 'beppe')).toBe(false);
    expect(w.stalls.beppe).toBe('closed');
    expect(w.spots.some((x) => x.id === 'beppeDoor')).toBe(true);
  });
  it('ルチアと話がついていなければ、家族での避難は選べない', () => {
    const s = sc.newGame('t10') as S;
    s.ctx = 'gate';
    const v = viewEncounter(sc.encounters, s, 'evac');
    expect(v.choices.find((c) => c.tag === 'evacFamily')!.disabled).toBeTruthy();
    s.flags.fleePlan = 1;
    expect(viewEncounter(sc.encounters, s, 'evac').choices.find((c) => c.tag === 'evacFamily')!.disabled).toBeNull();
  });
  it('門が閉じたあとは賄賂が要る', () => {
    const s = sc.newGame('t11') as S;
    s.flags.fleePlan = 1; s.ctx = 'gate'; s.day = s.sc.town.gateCloseDay; s.money = 0;
    expect(viewEncounter(sc.encounters, s, 'evac').choices.find((c) => c.tag === 'evacFamily')!.disabled).toBe('お金が足りない');
  });
  it('一度きりのイベントは繰り返さず、死んだ人は町に現れない', () => {
    for (const st of Object.values(strategies)) for (let i = 0; i < 25; i++) {
      const seen: string[] = [];
      const log: string[] = [];
      runGame('ev' + i, st, log, (s) => {
        const w = sc.worldView(s);
        for (const id of ['teresa', 'pietro', 'beppe', 'priest', 'guido', 'gina', 'lando', 'bernardo'] as const)
          if (npc(s, id).st !== 'ok') expect(w.npcs.some((n) => n.id === id), `${id} day${s.day}`).toBe(false);
        for (const id of ['lucia', 'marco'] as const) if (!s.people[id].alive) expect(w.npcs.some((n) => n.id === id)).toBe(false);
        expect(s.money).toBeGreaterThanOrEqual(0);
        expect(s.food).toBeGreaterThanOrEqual(0);
        expect(s.time).toBeGreaterThanOrEqual(0);
        seen.push(...s.queue);
      });
      for (const id of ['sailor', 'cake', 'cat', 'crier', 'orphan', 'pietro_ask', 'pietro_repay', 'death_lucia', 'death_marco']) expect(log.filter((l) => l.split(' ')[1] === id).length, id).toBeLessThanOrEqual(1);
    }
  });
});

describe('結末', () => {
  const end = (pl: boolean, lu: boolean, ma: boolean) => {
    const s = sc.newGame('e') as S;
    s.people.player.alive = pl; s.people.lucia.alive = lu; s.people.marco.alive = ma;
    finish(s, pl ? 'stayed' : 'died');
    return s.ended!.code;
  };
  it('生死の組み合わせで A〜E が決まる', () => {
    expect(end(true, true, true)).toBe('A');
    expect(end(true, true, false)).toBe('B');
    expect(end(true, false, false)).toBe('C');
    expect(end(false, false, true)).toBe('D');
    expect(end(false, false, false)).toBe('E');
  });
  it('14日を越えると結末になり、リザルトが作れる', () => {
    const s = sc.newGame('e2') as S;
    s.day = TOTAL_DAYS + 1;
    expect(checkEnd(s)).toBe(true);
    const r = sc.result(s);
    expect(r.ending.story.length).toBeGreaterThan(0);
    expect(r.history.length).toBeGreaterThan(4);
  });
  it('どの戦略・どのシードでも必ず結末に着き、死者は生き返らず、結末は生死と一致する', () => {
    const codes = new Set<string>();
    for (const st of Object.values(strategies)) for (let i = 0; i < 40; i++) {
      const dead = new Set<string>();
      const s = runGame('inv' + i, st, undefined, (s) => {
        for (const p of Object.values(s.people)) { if (!p.alive) dead.add(p.id); else expect(dead.has(p.id), `${p.id} が生き返った`).toBe(false); }
      });
      expect(s.ended).toBeTruthy();
      const e = s.ended!; codes.add(e.code);
      const fam = [s.people.lucia, s.people.marco].filter((p) => p.alive).length;
      if (!s.people.player.alive) expect(e.code).toBe(fam ? 'D' : 'E');
      else if (e.how !== 'fledAlone') expect(e.code).toBe(fam === 2 ? 'A' : fam === 1 ? 'B' : 'C');
      for (const p of Object.values(s.people)) if (!p.alive) { expect(p.deathDay).toBeGreaterThan(0); expect(p.deathCause).toBeTruthy(); }
      expect(() => sc.result(s)).not.toThrow();
    }
    expect([...codes].sort()).toEqual(['A', 'B', 'C', 'D', 'E']);
  });
  it('ひとりで逃げた結末は C（生還）か D/E', () => {
    const s = sc.newGame('alone') as S;
    s.day = 6; s.sc.town.phase = 2; s.ctx = 'gate'; s.queue = [];
    pick(s, 'evac', 'evacAlone'); pick(s, 'evac_alone', 'evacAloneYes');
    expect(s.ended!.how).toBe('fledAlone');
    expect(['C', 'D', 'E']).toContain(s.ended!.code);
  });
});

describe('セーブとロード', () => {
  it('JSONにして戻しても、その後の展開が一致する', () => {
    const a = sc.newGame('save-1') as S;
    a.queue = [];
    pick(a, 'guido', 'work'); sc.buy(a, 'beppe', 'food');
    const b = JSON.parse(JSON.stringify(a)) as S;
    for (const s of [a, b]) {
      for (let d = 0; d < 5 && !s.ended; d++) { s.queue = []; pick(s, 'bed', 'sleep'); pick(s, 'supper', viewEncounter(sc.encounters, s, 'supper').choices[0].tag!); }
    }
    expect(JSON.stringify(b)).toBe(JSON.stringify(a));
  });
});
