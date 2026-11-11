// リザルト：物語、振り返り、歴史解説。
import type { Person, ResultData } from '../../core/types';
import { L, M, P, S, TOTAL_DAYS, flag, npc } from './rules';

type Note = ResultData['history'][number];

function story(s: S): string[] {
  const e = s.ended!, l = L(s), m = M(s), p = P(s);
  const out: string[] = [];
  const fled = e.how === 'fled';
  if (e.how === 'fledAlone') {
    out.push(`${flag(s, 'fledDay')}日目、あなたは家族を残して門を出た。`);
    out.push(p.alive ? '街道沿いの納屋を渡り歩き、あなたは生き延びた。' : '逃げた先の納屋で、あなたは誰にも看取られずに死んだ。');
    const alive = [l, m].filter((x) => x.alive);
    if (alive.length === 2) out.push('ルチアとマルコは、あなたのいない家で、十四日を生き抜いた。マルコは毎晩、戸口であなたの帰りを待っていたという。');
    else if (alive.length === 1) out.push(`${alive[0].name}だけが、あの家で生き残った。${alive[0].id === 'marco' ? '八つの子が、母の亡骸のそばで、三日を過ごした。' : '彼女は、ひとりでマルコを埋めた。'}`);
    else out.push('ルチアとマルコは、あの家で死んだ。最後に誰が誰を看取ったのか、あなたが知ることはない。');
    out.push('あのとき門をくぐらなければ、何かが変わっただろうか。');
    return out;
  }
  if (fled) out.push(`${flag(s, 'fledDay')}日目、あなたは家族を連れて町を出た。`);
  if (flag(s, 'refusedEntry')) out.push('病人を連れた一家を、村は受け入れなかった。炭焼き小屋が、あなたたちの家になった。');
  if (flag(s, 'farmDead')) out.push('頼った農場には、すでに病が来ていた。');
  if (flag(s, 'farmOk')) out.push('ルチアの兄の農場で、畑を手伝いながら日々を数えた。');
  for (const x of [l, m]) if (!x.alive) out.push(`${x.deathDay}日目、${x.name}が${x.deathCause}で亡くなった。${x.id === 'marco' ? '八つだった。' : ''}`);
  for (const x of [l, m]) if (x.alive && x.immune) out.push(`${x.name}は病に倒れたが、峠を越えた。`);
  if (!p.alive) out.push(`${p.deathDay}日目、あなたは${p.deathCause}で息を引き取った。`);
  else if (p.immune) out.push('あなた自身も病に倒れ、そして生き延びた。');
  switch (e.code) {
    case 'A': out.push(fled ? '十四日目の朝。丘の農場の納屋で、三人は同じ毛布にくるまって目を覚ました。' : '十四日目の朝。食卓には今日も、三つの椀が並んだ。', '病はまだ去っていない。それでも、今朝は三人でいる。'); break;
    case 'B': out.push('十四日が過ぎた。食卓の椀は、ひとつ減った。', `${(l.alive ? l : m).name}は、あなたの袖を握ったまま眠っている。この手だけは、離さない。`); break;
    case 'C': out.push('十四日が過ぎた。家の中には、あなたの息の音しかしない。', '軒下で、ツバメのヒナが鳴いている。マルコが見つけた巣だ。'); break;
    case 'D': {
      const alive = [l, m].filter((x) => x.alive);
      out.push(alive.length === 2 ? 'あなたの亡きあと、ルチアはマルコの手を引いて、十四日を生き抜いた。' : alive[0].id === 'marco' ? 'マルコは、ひとり生き残った。八つの子のこれからを、あなたは見届けられない。' : 'ルチアだけが生き残った。彼女は、二つの墓の前に長いこと立っていた。');
      out.push('あなたが残したパンと、あなたが下した選択が、その命をつないだ。');
      break;
    }
    case 'E': out.push('西の通りの小さな家の戸に、板が打たれた。', '軒下のツバメだけが、何も知らずに巣立っていった。'); break;
  }
  if (flag(s, 'promiseSea') && e.code === 'A') out.push('いつか三人で、海を見に行こう。あの夜の約束は、まだ生きている。');
  if (s.sc.home.guest && (e.code === 'A' || e.code === 'B')) out.push('ピッポは、マルコの隣で眠っている。もう、うちの子だ。');
  return out;
}

function reflections(s: S): string[] {
  const out: string[] = [];
  const st = (k: string) => s.stats[k] ?? 0;
  const people: Person[] = [P(s), L(s), M(s)];
  for (const p of people) {
    const ill = p.illness;
    if (ill) out.push(`${p.id === 'player' ? 'あなた' : p.name}の感染のいちばんの原因は「${ill.cause}」（${ill.causeDay}日目ごろ）だったと考えられる。${ill.kind === 'pneumonic' ? '咳の飛沫でうつる肺の病で、助かる見込みはほとんどなかった。' : ''}`);
    else if (p.immune) out.push(`${p.id === 'player' ? 'あなた' : p.name}は発症したが、回復した。${st('nursed') ? '付き添いと看病が、体力を支えた。' : ''}`);
  }
  if (!st('cleaned') && s.sc.home.infest > 50) out.push('家のネズミとノミは増え続けていた。掃除や寝具の洗濯は、一度もしなかった。');
  if (st('cleaned') >= 2) out.push(`家の掃除と洗濯を${st('cleaned')}回した。当時の人は「悪い空気を払う」ためにそうしたが、結果としてノミやシラミを減らしていた。`);
  if (st('hoard') >= 3) out.push('食料を多く蓄えたことで飢えは遠ざかったが、ネズミを家に呼び込んでもいた。');
  if (st('hungryNights') >= 2) out.push(`食料が足りない夜が${st('hungryNights')}回あった。飢えは体力を奪い、病と闘う力を弱めた。`);
  const plagueDead = [L(s), M(s)].filter((p) => !p.alive && p.illness);
  if (plagueDead.length && !st('nursed')) out.push('家族が発症してから、看病に時間を割くことはなかった。');
  if (st('becchino')) out.push(`亡骸を運ぶ仕事を${st('becchino')}回請けた。高い日当と引き換えの、最も危険な仕事だった。`);
  if (st('looted')) out.push(`死者の出た空き家を${st('looted')}回物色した。食料は手に入ったが、寝具や衣類のノミも一緒に持ち帰った。`);
  if (flag(s, 'theriac')) out.push('テリアカに15ソルドを払った。心は少し軽くなったが、病には効かなかった。');
  if (s.ended!.how === 'stayed' && flag(s, 'fleePlan') === 2) out.push('ルチアは町を出たいと言った。あなたは、留まることを選んだ。');
  if (s.ended!.how === 'fled') out.push(`町を出たのは${flag(s, 'fledDay')}日目。${flag(s, 'fledDay') <= s.sc.town.onset + 3 ? '早い決断だった。' : '門が閉まるか閉まらないかの、遅い決断だった。'}${flag(s, 'knowFarm') ? '' : '町の外の様子を、確かめないままの出発だった。'}`);
  if (st('helped') >= 3) out.push(`あなたは${st('helped')}度、他人のために手を止めた。それが報われたかどうかは、また別の話だ。`);
  if (st('worked') <= 1 && s.ended!.day >= 6) out.push('工房で働いたのは、ほとんど最初だけだった。稼ぎのない日々は、食卓を細らせた。');
  if (L(s).bond >= 80 && M(s).bond >= 80) out.push('忙しい日々の中でも、あなたは家族と話し、遊ぶ時間を手放さなかった。');
  if (L(s).bond < 35) out.push('ルチアとのあいだには、最後まで溝があった。');
  if (out.length < 2) out.push('打てる手を打っても、最後は運に左右される。それが、この時代を生きるということだった。');
  return out.slice(0, 8);
}

function history(s: S): Note[] {
  const out: Note[] = [
    { tag: '史実', text: '黒死病は1347年秋にシチリアのメッシーナへ、1348年初めにピサやジェノヴァへ達し、春にはトスカーナの内陸へ広がった。' },
    { tag: '研究・推定', text: '数年のうちにヨーロッパの人口の3〜5割が失われたとされる（6割近いとする推計もある）。フィレンツェでは住民の半数以上が死亡したと見積もられている。' },
    { tag: '史実', text: '原因はペスト菌（Yersinia pestis）。当時の人々は、腐った空気（瘴気）、星の巡り、神の怒りによって説明した。菌が見つかるのは1894年のことである。' },
    { tag: '研究・推定', text: '感染は、ネズミとそのノミが運ぶ腺ペストが主だと考えられてきたが、近年はヒトノミやコロモジラミの役割を重く見る研究もあり、議論が続いている。肺ペストは咳の飛沫で人から人へうつる。このゲームでは、これらを単純化して扱った。' },
    { tag: '史実', text: '腺ペストは治療なしでおよそ半数が、肺ペストはほぼ全員が死亡する。効く薬（抗菌薬）が現れるのは20世紀である。' },
    { tag: '創作', text: '看病・掃除・猫などが生死を左右する度合いは、ゲームのための設定である。水・食事・安静が体力を支えること自体はもっともらしいが、当時の看病が死亡率をどれほど変えたかは分かっていない。' },
  ];
  if (s.sc.town.phase >= 1) out.push({ tag: '史実', text: 'ピストイアの町は1348年5月、ピサやルッカからの入市の禁止、古着の持ち込みの禁止、葬儀の制限などを定めた。作中の触れ書きは、この条例を下敷きにしている。' });
  if (s.stats.becchino || s.ended!.how !== 'stayed' || s.sc.town.phase >= 2) out.push({ tag: '史実', text: 'ボッカッチョは『デカメロン』の序で、裕福な者が郊外へ逃れ、親が子を、妻が夫を見捨て、「ベッキーニ」と呼ばれる遺体運びが高い報酬で雇われた様子を記している。' });
  if (flag(s, 'theriac') || s.ended!.how !== 'stayed') out.push({ tag: '史実', text: 'テリアカは古代から伝わる高価な万能薬だが、ペストには効かなかった。医師たちの最も確かな助言は「速く逃げ、遠くへ行き、遅く帰れ」だったと言われる。' });
  if (s.seen.scapegoat) out.push({ tag: '史実', text: '流行のさなか、よそ者や物乞い、そして各地でユダヤ人が「井戸に毒を入れた」と疑われ、迫害と虐殺が起きた。教皇クレメンス6世は1348年、この疑いを否定する勅書を出している。' });
  if (npc(s, 'priest').st === 'dead' || s.seen.procession) out.push({ tag: '史実', text: '病人を見舞う聖職者の死亡率は高く、臨終の秘跡を授ける司祭が足りなくなった土地もあった。' });
  out.push({ tag: '創作', text: 'カステルヴェントの町と登場人物は架空である。14日間という長さもゲームの区切りで、実際の流行は一つの町で数か月続いた。' });
  return out;
}

export function buildResult(s: S): ResultData {
  const e = s.ended!;
  e.story = story(s);
  const p = P(s);
  const dangers = [...s.dangers].sort((a, b) => b.amount - a.amount);
  const fate = (x: Person) => (x.alive ? (x.immune ? '発症したが回復し、生存' : '生存') : `${x.deathDay}日目に死亡（${x.deathCause}）`);
  return {
    ending: e,
    days: Math.min(TOTAL_DAYS, p.alive ? TOTAL_DAYS : p.deathDay ?? e.day),
    rows: [
      { label: '生き延びた日数', value: `${p.alive ? TOTAL_DAYS : Math.min(TOTAL_DAYS, p.deathDay ?? 1)}日 / ${TOTAL_DAYS}日` },
      { label: 'あなた', value: fate(p) },
      { label: '最後の所持金', value: `${s.money}ソルド` },
      { label: '最後の食料', value: `${Math.round(s.food)}食` },
    ],
    family: [L(s), M(s)].map((x) => ({ name: x.name, fate: fate(x), alive: x.alive })),
    choices: s.journal.filter((j) => j.key).map((j) => `${j.day}日目：${j.text}`).slice(-12),
    danger: dangers.length ? `${dangers[0].day}日目：${dangers[0].text}` : '大きな危険には遭わなかった',
    reflections: reflections(s),
    history: history(s),
    seed: s.seed,
  };
}
