import { describe, it } from 'vitest';
import { runGame, strategies } from './bot';

describe('バランス確認（各戦略で200回）', () => {
  it('結末の分布を出す', () => {
    const N = 200;
    for (const st of Object.values(strategies)) {
      const c: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
      let fled = 0, inf = 0, infDay = 0, food = 0, money = 0;
      for (let i = 0; i < N; i++) { const s = runGame('b' + i, st); c[s.ended!.code]++; if (s.ended!.how === 'fled') fled++; for (const p of Object.values(s.people)) if (p.illness || p.immune) { inf++; infDay += p.illness?.causeDay ?? 8; } food += s.food; money += s.money; }
      console.log(st.name.padEnd(22, '　'), Object.entries(c).map(([k, v]) => `${k}:${String(Math.round(v / N * 100)).padStart(3)}%`).join(' '), ` 避難${Math.round(fled / N * 100)}%`, ` 感染${(inf / N).toFixed(2)}人 残食${(food / N).toFixed(1)} 残金${(money / N).toFixed(0)}`);
    }
  });
});
