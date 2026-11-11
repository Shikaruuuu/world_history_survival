// 家族と自宅：朝の会話、相談、看病、夕食、家族に起きる出来事。
// せりふは「名前｜「……」」の形。名前のない行は地の文。
import { chance, pick, randInt } from '../../../core/rng';
import type { Encounter } from '../../../core/types';
import {
  L, M, P, S, adj, anySick, checkEnd, eat, expose, family, flag, gainStamina, living, mouths, night, note, npc, setFlag, sick, startDay, stat, well,
  type Ration,
} from '../rules';

type E = Encounter<S>;
const LU = 'ルチア｜', MA = 'マルコ｜';

// ---------- 日ごとのせりふ（その日の状況に当てはまるものが無いときに使う） ----------
const LUCIA_DAY = [
  '「今日は市が立つ日よ。豆と粉を多めにお願い。マルコがよく食べるの」',
  '「昨夜、マルコが寝言であなたを呼んでいたわ。もっと遊んであげて」',
  '「井戸端で聞いたの。ピサでは、通りが一つ丸ごと死に絶えたって……まさかね」',
  '「ねえ、物の値が上がる前に、蓄えを増やせないかしら」',
  '「このところ、鐘の音が増えた気がするの。気のせいだといいけれど」',
  '「悪い空気が病を運ぶって、皆が言うの。窓にローズマリーを吊るしたわ」',
  '「兄さんの農場なら、町より空気がいいはず。……考えておいて」',
  '「鐘が、もう数えきれない。誰のための鐘か、聞くのも怖い」',
  '「あなたが戸を開けて帰ってくるたびに、やっと息がつけるの」',
  '「マルコには、まだ笑っていてほしい。あの子の前では泣かないと決めたの」',
  '「私たち、何か悪いことをしたのかしら。司祭様は罪の報いだと仰るけれど」',
  '「もし私に何かあっても、マルコだけは。……約束して」',
  '「不思議ね。こんな時でも、パンの焼ける匂いは幸せだと思うの」',
  '「今日を越えても、明日がある。明日も、明後日も、一緒にいましょう」',
];
const MARCO_DAY = [
  '「父さん！市場に火を吹く芸人が来てるって、ピッポが言ってた！」',
  '「ぼく、大きくなったら父さんと同じ工房で働くんだ」',
  '「父さん、ピサってどこ？海って、ほんとにしょっぱいの？」',
  '「ツバメが巣を作ってるの見つけたよ。うちの軒下！」',
  '「市場のおじさん、今日は呼び込みしてなかった。なんで？」',
  '「母さんが吊るした草、いい匂い。病気は匂いがきらいなの？」',
  '「ねえ父さん、病気ってうつるの？ピッポの母さん、ずっと咳してる」',
  '「鐘、今日は何回鳴るか数えてたんだ。途中で分かんなくなった」',
  '「外、静かだね。みんな、どこ行っちゃったの？」',
  '「父さんの手、あったかい。ずっとつないでてもいい？」',
  '「ぼく、もうお腹すいたって言わないよ。だから母さん、泣かないで」',
  '「ツバメのヒナ、生まれたよ。ちゃんと口あけてた」',
  '「病気がなくなったら、海を見に行こうよ。みんなで」',
  '「父さん、明日もいる？……よかった」',
];

function luciaLine(s: S): string {
  const l = L(s), m = M(s), t = s.sc.town;
  if (sick(l)) return l.health < 35 ? '「……マルコを、お願い……」' : '「ごめんなさい、こんな時に……。あなたまで、うつらないで」';
  if (!m.alive && m.deathDay! >= s.day - 2) return '「……あの子の寝床、まだ片づけられないの」';
  if (!m.alive) return '「軒下のツバメ、今年も巣立つのね。あの子が見つけた巣よ」';
  if (sick(m)) return '「マルコの額、火みたいに熱いの。あなた、そばにいてやって」';
  if (sick(P(s))) return '「寝ていて。水は私が汲んでくる。あなたは、治ることだけ考えて」';
  if (flag(s, 'becDay') === s.day - 1) return '「昨日のこと、聞いたわ。亡骸を運ぶ仕事だなんて……。お金のためなのは分かってる。でも、怖いの」';
  if (flag(s, 'lootDay') === s.day - 1) return '「昨日の袋、どこから？……聞かないでおくわ。でも、神様は見ておられるのよ」';
  if (l.satiety < 35) return '「私は平気。……少し、めまいがするだけ」';
  if (s.food < mouths(s)) return '「今夜の分が、もう足りないの。どうしましょう」';
  if (flag(s, 'sawRats') >= s.day - 1 && s.sc.home.infest > 40) return '「夜中に、袋をかじる音がするの。家を掃き清めて、寝具を灰汁で洗いたいわ」';
  if (l.morale < 25) return '「……ごめんなさい。今日は、何も考えたくないの」';
  if (l.bond < 30) return '「あなたは、いつも外ばかり。私たちの顔、ちゃんと見てる？」';
  if (flag(s, 'fleePlan') === 1) return '「荷はまとめてあるわ。いつでも出られる。門が開いているうちに、決めて」';
  if (s.sc.home.cat && chance(s, 0.4)) return '「あの猫、台所でネズミを捕ったのよ。マルコったら大はしゃぎ」';
  if (t.phase === 0 && s.day > 1 && s.day === t.onset - 1) return '「隣町で病人が出たって。行商の人が、青い顔で話していたわ」';
  return LUCIA_DAY[Math.min(13, s.day - 1)];
}
function marcoLine(s: S): string {
  const l = L(s), m = M(s);
  if (sick(m)) return m.health < 35 ? '「……父さん……いる……？」' : '「あつい……。父さん、お水……。ツバメ、見ててね」';
  if (!l.alive && l.deathDay! >= s.day - 2) return '「母さん、いつ起きるの？……ねえ、父さん」';
  if (!l.alive) return '「ぼく、母さんみたいにスープ作れるようになるよ。父さんの分も」';
  if (sick(l)) return '「母さんにお水持ってったよ。ぼく、ちゃんとこぼさなかった」';
  if (sick(P(s))) return '「父さん、死なないで。ぼく、いい子にするから」';
  if (m.satiety < 35) return '「……お腹、すいてないよ。ほんとだよ」';
  if (flag(s, 'cakeDay') === s.day - 1) return '「昨日のお菓子、夢にも出てきた！はちみつの味、まだ覚えてる」';
  if (s.sc.home.guest && chance(s, 0.5)) return '「ピッポ、夜に泣いてた。ぼく、手をつないであげたんだ」';
  if (s.sc.home.cat && chance(s, 0.5)) return '「ネーロがね、ぼくのひざで寝たんだよ。あったかかった！」';
  if (npc(s, 'teresa').st === 'dead' && flag(s, 'marcoAskedTeresa') === 0) { setFlag(s, 'marcoAskedTeresa'); return '「テレーザおばあちゃん、もうイチジクくれないの？……天国に行ったの？」'; }
  if (m.morale < 25) return '「……外で遊びたいな。前みたいに」';
  if (m.bond < 30) return '「父さん、今日もお仕事？……ふうん」';
  return MARCO_DAY[Math.min(13, s.day - 1)];
}

const DAWN = [
  ['朝。軒下でツバメが鳴いている。かまどでルチアが粥を温めている。', '朝。通りから、荷車の音と呼び売りの声が聞こえる。'],
  ['朝。いつもより通りが静かだ。', '朝。遠くで弔いの鐘が鳴っている。'],
  ['朝。香草を焚く煙の匂いが、町じゅうに漂っている。', '朝。鐘が鳴りやまない。'],
  ['朝。通りには物音ひとつない。', '朝。荷車の軋む音だけが、石畳に響いている。'],
];

function morningLines(s: S): string[] {
  const l = L(s), m = M(s);
  if (s.day === 1) {
    const extra = flag(s, 'startMarcoCough') ? [LU + '「マルコの咳、まだ残っているの。ただの風邪だと思うけれど」']
      : flag(s, 'startLuciaTired') ? [LU + '「このところ体が重くて。季節の変わり目のせいね」']
      : flag(s, 'startSavings') ? [LU + '「先月の賃金がまとまって入ったのは助かったわ。そのぶん、棚は寂しいけれど」']
      : flag(s, 'startPantry') ? [LU + '「兄さんが豆をたくさん届けてくれたの。当分は困らないわね」'] : [];
    return [
      '1348年、春。トスカーナの丘の町カステルヴェント。',
      'あなたは毛織物の工房で働く職人だ。妻のルチア、八つになる息子のマルコと、西の通りの小さな家で暮らしている。',
      LU + LUCIA_DAY[0], ...extra, MA + MARCO_DAY[0],
      LU + '「工房にも顔を出すんでしょう？日が暮れる前に帰ってきてね」',
      '一日に出来ることは限られている。働くか、買い物か、家族と過ごすか。日が暮れたら、寝床で一日を終えよう。',
    ];
  }
  const out = [pick(s, DAWN[s.sc.town.phase])];
  if (!l.alive && !m.alive) { out.push('家の中は静かだ。食卓には、三つの椀が伏せたままになっている。'); return out; }
  for (const p of family(s)) {
    const ill = p.illness;
    if (p.alive && ill && !ill.symptomatic && ill.days >= ill.incubation - 1) out.push(`${p.name}は、少しだるそうにしている。`);
  }
  if (l.alive) out.push(LU + luciaLine(s));
  if (m.alive) out.push(MA + marcoLine(s));
  const ill = P(s).illness;
  if (ill && !ill.symptomatic && ill.days >= ill.incubation - 1) out.push('体が重い。昨夜はよく眠れなかった。');
  if (sick(P(s))) out.push('熱で足元が定まらない。今日は、ほとんど何も出来そうにない。');
  return out;
}

function luciaAdvice(s: S): string {
  const t = s.sc.town, days = Math.floor(s.food / Math.max(1, mouths(s)));
  if (anySick(s) || sick(P(s))) return '「水を飲ませて、体を冷やして、そばにいる。出来るのはそれだけ。でも、独りにしないことが一番の薬だと思うの」';
  if (s.food < mouths(s) * 2) return t.marketOpen
    ? `「食べる物が、あと${days}日ぶんしかないわ。市場が開いているうちに、お願い」`
    : '「市場はもう駄目ね。司祭様の施しか、ベッペさんの家の戸を叩いてみるか……」';
  if (s.sc.home.infest > 45 && flag(s, 'sawRats')) return '「ネズミとノミがひどいの。掃除をして、寝具を灰汁で洗いましょう。悪い空気も払えるわ。食料棚のところで出来るから」';
  if (s.food > 12) return '「こんなに溜め込むと、ネズミが寄るのよ。……でも、無いよりはいいのかしら」';
  if (s.supplies === 0) return '「薪もろうそくも切れたわ。ジーナさんの店が開いているうちに」';
  if (t.phase >= 2 && flag(s, 'fleePlan') === 0 && s.day < t.gateCloseDay) return '「門が閉まる前に、町を出ることも考えて。兄さんの農場まで歩いて二日。その分の食べ物が要るわ」';
  if (t.phase >= 1 && s.money < 10) return '「お金が心細いわね。工房の仕事があるうちに、稼いでおいて」';
  if (t.phase === 0) return '「今のうちに、豆と粉を少し多めに。安い時に買うのが、やりくりの基本よ」';
  return '「働いて、買って、帰ってきて。それだけでいいの。無理はしないで」';
}

function nurse(s: S): string[] {
  const out: string[] = [];
  const useRemedy = s.remedies > 0;
  if (useRemedy) s.remedies--;
  setFlag(s, 'nursedDay', s.day); stat(s, 'nursed');
  for (const p of family(s).filter(sick)) {
    p.cared = Math.max(p.cared, 7 + (useRemedy ? 1 : 0));
    adj(p, 'morale', 8); adj(p, 'bond', 6);
    const pne = p.illness!.kind === 'pneumonic';
    expose(s, 'player', pne ? 0.22 * (flag(s, 'isolate') ? 0.5 : 1) : 0.02, pne ? 'droplet' : 'flea', pne ? '咳をする家族の看病' : '家族の看病');
    out.push(p.id === 'marco'
      ? '濡らした布でマルコの額を冷やし、匙で水を含ませる。小さな手が、あなたの指を握って離さない。'
      : 'ルチアの汗を拭き、寝具を替える。「……ありがとう」かすれた声で、彼女は笑おうとした。');
  }
  if (useRemedy) out.push('柳の皮を煎じて飲ませた。少し、息が楽になったように見える。');
  return out;
}

const RATIONS: { label: string; policy: Ration; hint: string }[] = [
  { label: 'みんなで等しく分ける', policy: 'share', hint: '全員が少しずつ空腹に' },
  { label: 'マルコに先に食べさせる', policy: 'child', hint: '子を優先' },
  { label: '自分は食べず、二人に回す', policy: 'skipself', hint: 'あなたは空腹に' },
  { label: '働き手の自分が先に食べる', policy: 'self', hint: '家族は空腹に' },
];

function supperLines(s: S, policy: Ration, short: boolean): string[] {
  const l = L(s), m = M(s);
  const out: string[] = [];
  if (!l.alive && !m.alive) return ['ひとりで、冷えたパンをかじる。食卓は、こんなに広かっただろうか。'];
  if (!short) {
    out.push(pick(s, ['豆のスープと黒パン。三人で囲む食卓に、ろうそくの灯が揺れる。', '夕食。かまどの火が、壁に三人の影を映している。', '食卓につく。スープの湯気の向こうに、家族の顔がある。']));
    if (well(m) && chance(s, 0.6)) out.push(MA + pick(s, ['「父さん、今日なに見た？ぼくにも教えて！」', '「母さんのスープ、世界でいちばんおいしい」', '「ぼくのパン、半分あげる。父さん、いっぱい働いたから」']));
    else if (well(l)) out.push(LU + pick(s, ['「今日も、三人そろって食べられたわね」', '「お疲れさま。温かいうちに食べて」']));
  } else {
    out.push('鍋の底が見えている。今夜の分は、三人には足りない。');
    if (policy === 'skipself') { out.push('あなたは「外で済ませてきた」と嘘をついた。'); if (well(m)) out.push(MA + '「……父さん、ほんとに？お腹、鳴ってるよ」'); adj(l, 'bond', 3); adj(m, 'bond', 3); }
    if (policy === 'child') { out.push('マルコの椀にだけ、いつもと同じ量をよそった。'); if (well(l)) out.push(LU + '「それでいいの。この子が食べていれば、私は平気」'); }
    if (policy === 'self') { out.push('明日も働くためだ、と自分に言い聞かせて、あなたは先に椀を取った。'); adj(l, 'bond', -5); adj(m, 'bond', -3); }
    if (policy === 'share') out.push('薄いスープを、三つの椀に同じだけ分けた。誰も、足りないとは言わなかった。');
  }
  return out;
}

export const familyEncounters: E[] = [
  {
    id: 'morning',
    text: morningLines,
    choices: [{ label: '一日を始める', tag: 'go' }],
  },

  // ---------------- ルチア ----------------
  {
    id: 'lucia', speaker: 'ルチア',
    text: (s) => LU + luciaLine(s),
    choices: (s) => {
      const l = L(s);
      if (sick(l)) return [
        { label: '看病する', hint: '汗を拭き、水を飲ませ、そばにいる', cost: { time: 2, stamina: 10 }, tag: 'nurse', run: (s) => nurse(s) },
        { label: '手を握って、少し話す', run: (s) => { if (!l.talked) { l.talked = true; adj(l, 'morale', 5); adj(l, 'bond', 3); } return [LU + '「マルコが生まれた朝のこと、覚えてる？……あなた、泣いてたのよ」']; } },
        { label: '離れる', tag: 'leave' },
      ];
      return [
        { label: '話す', tag: 'talk', run: (s) => {
          const first = !l.talked;
          if (first) { l.talked = true; adj(l, 'morale', 4); adj(l, 'bond', 3); adj(P(s), 'morale', 2); }
          return LU + luciaAdvice(s);
        } },
        { label: '家の仕事を手伝う', hint: '水汲み・掃き掃除・繕い物', cost: { time: 1, stamina: 5 }, tag: 'help', run: (s) => {
          adj(l, 'morale', 8); adj(l, 'bond', 6); s.sc.home.infest = Math.max(0, s.sc.home.infest - 8);
          return ['井戸から水を運び、床を掃き、ほつれた上着を並んで繕った。', LU + '「ふふ。あなた、針は相変わらず下手ね」'];
        } },
        { label: '看病する', hint: '汗を拭き、水を飲ませ、そばにいる', show: (s) => sick(M(s)), cost: { time: 2, stamina: 10 }, tag: 'nurse', run: (s) => nurse(s) },
        { label: '町を出る相談をする', show: (s) => s.sc.town.phase >= 1 && flag(s, 'fleePlan') !== 1, tag: 'flee', run: (s) => ({ next: 'flee_talk' }) },
        { label: '離れる', tag: 'leave' },
      ];
    },
  },
  {
    id: 'flee_talk', speaker: 'ルチア', category: 'relation',
    text: (s) => L(s).bond >= 40
      ? [LU + '「……私も、同じことを考えていたの。兄さんの農場まで、歩いて二日よ」', LU + '「道中の食べ物が要るわ。それと、病人は村に入れてもらえないって聞いた。出るなら、三人とも元気なうちに」']
      : [LU + '「今さら？あなたはいつも、ひとりで決めて、ひとりで出て行くじゃない」', LU + '「……でも、マルコのためなら。考えさせて」'],
    choices: [
      { label: '「荷をまとめておいてくれ」', key: '町を出る準備を始めた', ok: (s) => L(s).bond >= 25 || 'ルチアは首を縦に振らない', run: (s) => { setFlag(s, 'fleePlan', 1); adj(L(s), 'morale', 4); return [LU + '「分かった。いつでも出られるようにしておく。門で、門番のランドさんに話して」', '（町の門で、避難を選べるようになった）']; } },
      { label: '「いや、まだ早い。様子を見よう」', run: (s) => { adj(L(s), 'morale', -3); return LU + '「……そうね。あなたがそう言うなら」'; } },
    ],
  },
  {
    id: 'flee_proposal', title: 'ルチアの申し出', category: 'major', speaker: 'ルチア',
    auto: { on: 'zone:homeEve', pri: 3, when: (s) => well(L(s)) && s.sc.town.phase >= 2 && flag(s, 'fleePlan') === 0 && s.day < s.sc.town.gateCloseDay + 2 },
    text: [
      '家に戻ると、ルチアが旅の袋を膝に置いて待っていた。',
      LU + '「町を出ましょう。兄さんの農場へ。金持ちはもう皆、別荘へ逃げたわ」',
      LU + '「ここにいたら、三人とも死ぬ。……私は、あの子を埋めたくない」',
    ],
    choices: [
      { label: '「分かった。支度をしよう」', hint: '門で避難を選べるようになる', key: 'ルチアの申し出を受け、町を出る準備を始めた', tag: 'yes', run: (s) => { setFlag(s, 'fleePlan', 1); adj(L(s), 'bond', 6); adj(L(s), 'morale', 8); return [LU + '「ありがとう。歩いて二日。三人分の食べ物を、二日ぶんは持っていきたいわ」']; } },
      { label: '「逃げた先にも病はある。ここで耐えよう」', key: 'ルチアの申し出を断り、町に留まると決めた', tag: 'no', run: (s) => { setFlag(s, 'fleePlan', 2); adj(L(s), 'bond', -8); adj(L(s), 'morale', -8); return [LU + '「……あなたがそう決めたのなら。でも、覚えておいて。私は、出たいと言ったのよ」']; } },
      { label: '「もう少し考えさせてくれ」', tag: 'later', run: (s) => { adj(L(s), 'morale', -3); delete s.seen.flee_proposal; setFlag(s, 'fleeAskDay', s.day); return LU + '「門が閉まったら、考えることも出来なくなるわ」'; } },
    ],
  },

  // ---------------- マルコ ----------------
  {
    id: 'marco', speaker: 'マルコ',
    text: (s) => MA + marcoLine(s),
    choices: (s) => {
      const m = M(s);
      if (sick(m)) return [
        { label: '看病する', hint: '額を冷やし、水を飲ませ、そばにいる', cost: { time: 2, stamina: 10 }, tag: 'nurse', run: (s) => nurse(s) },
        { label: '海の話をしてやる', run: (s) => { if (!m.talked) { m.talked = true; adj(m, 'morale', 6); adj(m, 'bond', 3); } return ['「海はな、空と同じ色で、どこまでも続いてるんだ」', MA + '「……治ったら……見に行ける？」']; } },
        { label: '離れる', tag: 'leave' },
      ];
      return [
        { label: '話す', tag: 'talk', run: (s) => {
          if (!m.talked) { m.talked = true; adj(m, 'morale', 5); adj(m, 'bond', 3); adj(P(s), 'morale', 3); }
          return MA + pick(s, ['「ねえ父さん、ぼくの背、のびた？柱の傷より上になったよ」', '「父さんの仕事の話して！羊の毛って、どうやって布になるの？」', '「ぼくが父さんを守ってあげる。この棒でね、えい！」', '「母さんには内緒だよ。ぼく、ほんとはちょっとだけ怖いんだ」']);
        } },
        { label: '一緒に遊ぶ', hint: '木の剣でちゃんばら、肩車', cost: { time: 1 }, tag: 'play', run: (s) => {
          adj(m, 'morale', 14); adj(m, 'bond', 8); adj(P(s), 'morale', 6); adj(L(s), 'morale', 3); stat(s, 'played');
          return ['木切れの剣で打ち合い、肩車で家の中を三周した。マルコは息が切れるまで笑った。', ...(well(L(s)) ? [LU + '「ほら、二人とも。埃が立つでしょう」　そう言う彼女も、笑っていた。'] : [])];
        } },
        { label: '看病する', hint: 'ルチアのそばにいる', show: (s) => sick(L(s)), cost: { time: 2, stamina: 10 }, tag: 'nurse', run: (s) => nurse(s) },
        { label: '離れる', tag: 'leave' },
      ];
    },
  },
  {
    id: 'pippo', speaker: 'ピッポ',
    text: () => 'ピッポ｜' + '「……おじさん。ぼく、ここにいていいの？」',
    choices: [{ label: '「ああ。うちの子だ」', run: (s) => { adj(M(s), 'morale', 2); return 'ピッポは黙って頷き、マルコの隣に座った。'; } }, { label: '離れる', tag: 'leave' }],
  },

  // ---------------- 寝床・食料棚 ----------------
  {
    id: 'bed', title: '寝床',
    text: (s) => s.time > 0 ? `まだ日は高い。今日はあと${s.time}刻ほど動ける。` : '日が暮れた。長い一日だった。',
    choices: [
      { label: '夕食にして、一日を終える', tag: 'sleep', run: (s) => {
        if (s.time > 0) setFlag(s, 'restBonus', Math.min(20, s.time * 6));
        return { next: 'supper' };
      } },
      { label: '少し横になる', hint: '体力が少し戻る', cost: { time: 2 }, tag: 'rest', run: (s) => {
        gainStamina(s, 22); s.fatigue = Math.max(0, s.fatigue - 8);
        if (sick(P(s))) P(s).cared = Math.max(P(s).cared, 3);
        return '目を閉じると、すぐに浅い眠りが来た。';
      } },
      { label: 'まだ起きている', tag: 'leave' },
    ],
  },
  {
    id: 'supper', title: '夕食',
    text: (s) => s.food >= mouths(s) ? supperLines(s, 'full', false) : s.food <= 0 ? ['食料棚は空だ。今夜、口に入れる物は何もない。'] : ['鍋の底が見えている。今夜の分は、全員には足りない。', '誰の椀に、どれだけよそうか。'],
    choices: (s) => {
      const end = (policy: Ration) => (s: S) => {
        const short = s.food < mouths(s) && s.food > 0;
        const lines = short ? supperLines(s, policy, true) : [];
        if (s.food <= 0 && living(s).length > 1) lines.push('水だけを飲んで、三人で身を寄せ合った。');
        eat(s, policy);
        night(s);
        if (!checkEnd(s)) startDay(s, (s) => _trigger(s, 'morning'));
        return lines;
      };
      if (s.food >= mouths(s) || s.food <= 0 || family(s).every((p) => !p.alive))
        return [{ label: s.food > 0 ? '食卓を囲み、眠る' : '空腹のまま、眠る', tag: 'sleep', run: end('share') }];
      return RATIONS.filter((r) => r.policy !== 'child' || M(s).alive).map((r) => ({ label: r.label, hint: r.hint, tag: 'ration:' + r.policy, run: end(r.policy) }));
    },
  },
  {
    id: 'pantry', title: '食料棚',
    text: (s) => {
      const days = Math.floor(s.food / Math.max(1, mouths(s)));
      const out = [`食料は${s.food}食ぶん。${mouths(s)}人で、およそ${days}日ぶんだ。薪や灰汁などの生活用品は${s.supplies}、薬草は${s.remedies}。`];
      const i = s.sc.home.infest;
      if (i > 70) out.push('袋の隅に、いくつも穴が開いている。床には黒い粒のような糞。寝藁からはノミが跳ねた。');
      else if (i > 45) out.push('麦の袋に、かじられた跡がある。');
      else if (i > 25) out.push('棚の奥で、何かが走る小さな音がした。');
      else out.push('棚は乾いていて、きれいに片づいている。');
      return out;
    },
    choices: [
      { label: '家を掃き清め、寝具を洗う', hint: '灰汁と薪を使う', cost: { time: 1, stamina: 10, supplies: 1 }, tag: 'clean', run: (s) => {
        s.sc.home.infest = Math.max(0, s.sc.home.infest - 32); stat(s, 'cleaned'); adj(L(s), 'morale', 3);
        return ['床を掃き、棚の隙間に灰を詰め、寝具を灰汁の湯で洗って干した。', ...(well(L(s)) ? [LU + '「これで悪い空気も出ていくわ。さっぱりした」'] : [])];
      } },
      { label: '閉じる', tag: 'leave' },
    ],
  },

  // ---------------- 家族の発症・死・回復 ----------------
  ...(['lucia', 'marco'] as const).map((id): E => ({
    id: 'sick_' + id, title: id === 'lucia' ? 'ルチアの発症' : 'マルコの発症', category: 'crisis',
    text: (s) => {
      const p = s.people[id], pne = p.illness?.kind === 'pneumonic';
      const a = id === 'marco'
        ? [pne ? 'マルコが体を折って咳き込んでいる。口元を押さえた小さな手に、赤いものが付いていた。' : 'マルコが寝床から起きてこない。触れた額は、驚くほど熱い。首の横に、硬いしこりがある。', MA + '「父さん……さむい……」']
        : [pne ? 'ルチアが壁に手をついて咳き込んでいる。布に、血が滲んでいた。' : 'ルチアがかまどの前で膝をついた。脚の付け根に、卵ほどの腫れ物が出来ている。', LU + '「……来ないで。あなたとマルコに、うつしたくない」'];
      return [...a, '町で幾人もの命を奪っている、あの病だ。'];
    },
    choices: [
      { label: 'そばで世話をする', key: `${id === 'lucia' ? 'ルチア' : 'マルコ'}を、同じ部屋で看ると決めた`, tag: 'stay', run: (s) => { setFlag(s, 'isolate', 0); adj(s.people[id], 'morale', 8); adj(s.people[id], 'bond', 5); return '寝床のそばに腰を下ろした。（家族に話しかけて「看病する」を選ぶと、その日の世話が出来る）'; } },
      { label: '寝床を奥に分け、近づく時は口を布で覆う', key: `${id === 'lucia' ? 'ルチア' : 'マルコ'}の寝床を分け、距離を置いて世話すると決めた`, tag: 'isolate', run: (s) => { setFlag(s, 'isolate', 1); adj(s.people[id], 'morale', -6); return ['奥の隅に寝藁を移し、あいだに布を垂らした。', id === 'marco' ? MA + '「……ぼく、ひとり？」' : LU + '「それでいいの。それが、いいのよ」', '（家族に話しかけて「看病する」を選ぶと、その日の世話が出来る）']; } },
    ],
  })),
  ...(['lucia', 'marco'] as const).map((id): E => ({
    id: 'death_' + id, title: id === 'lucia' ? 'ルチア' : 'マルコ', category: 'major',
    text: (s) => id === 'marco'
      ? ['夜明け前、マルコの息が止まった。', '握っていた手が、少しずつ冷えていく。軒下で、何も知らないツバメが鳴きはじめた。', ...(L(s).alive ? [LU + '「いや……いやよ。マルコ、目を開けて。お願い……」'] : [])]
      : ['夜明け前、ルチアの息が止まった。', '最後に彼女は、あなたの名ではなく、マルコの名を呼んだ。', ...(M(s).alive ? [MA + '「母さん、まだ寝てるの？……父さん、なんで泣いてるの？」'] : [])],
    choices: [
      { label: '教会で弔ってもらう', hint: '司祭に祈りを頼む', cost: { money: 6 }, show: (s) => npc(s, 'priest').st === 'ok', tag: 'church', run: (s) => { living(s).forEach((p) => adj(p, 'morale', 8)); return ['ドン・アンセルモは、疲れ切った顔で、それでも一人のために祈りを上げてくれた。', '教会の墓地に、小さな十字を立てた。']; } },
      { label: '自分の手で墓地へ運び、埋める', cost: { stamina: 25 }, tag: 'self', run: (s) => { living(s).forEach((p) => adj(p, 'morale', 5)); expose(s, 'player', 0.04, 'flea', '家族の埋葬'); return ['亡骸を敷布で包み、抱いて歩いた。こんなに軽かっただろうか。', '土をかけ終えたとき、日はもう高かった。']; } },
      { label: '遺体運びの荷車に委ねる', tag: 'cart', run: (s) => { living(s).forEach((p) => adj(p, 'morale', -8)); if (id === 'marco') adj(L(s), 'bond', -8); return ['荷車の男たちは、無言で亡骸を積んだ。ほかの幾つもの包みと一緒に。', '車輪の音が角を曲がって消えるまで、あなたは戸口に立っていた。']; } },
    ],
  })),
  ...(['lucia', 'marco'] as const).map((id): E => ({
    id: 'recover_' + id, title: '峠を越えて', category: 'relation',
    text: () => id === 'marco'
      ? ['マルコが、自分で体を起こした。', MA + '「……父さん。お腹すいた」', 'それは、この世でいちばん嬉しい言葉だった。']
      : ['ルチアが、寝床から起き上がっていた。', LU + '「夢の中でね、あなたがずっと手を握っていたの。……夢じゃなかったのね」'],
    choices: [{ label: '抱きしめる', run: (s) => { living(s).forEach((p) => adj(p, 'morale', 18)); adj(s.people[id], 'bond', 10); } }],
  })),

  // ---------------- 家族の出来事 ----------------
  {
    id: 'cake', title: '蜂蜜の焼き菓子', category: 'daily',
    auto: { on: 'zone:market', pri: 1, when: (s) => s.day >= 2 && s.sc.town.phase === 0 && well(M(s)) },
    text: ['菓子売りの台の前で、足が止まった。蜂蜜を塗った小さな焼き菓子。', 'この前マルコが、指をくわえて見ていたやつだ。'],
    choices: [
      { label: '買って帰る', cost: { money: 2 }, tag: 'yes', run: (s) => { setFlag(s, 'cakeDay', s.day); setFlag(s, 'cake'); adj(M(s), 'morale', 10); adj(M(s), 'bond', 6); adj(L(s), 'morale', 2); return ['菓子を布に包んで懐に入れた。', '（その夜、マルコは菓子を三つに割って、いちばん大きいのをあなたにくれた）']; } },
      { label: 'また今度にする', tag: 'no', run: () => '2ソルドあれば、豆が一食ぶん買える。あなたは台の前を通り過ぎた。' },
    ],
  },
  {
    id: 'marco_play', title: 'マルコのお願い', category: 'relation', speaker: 'マルコ',
    auto: { on: 'morning', pri: 1, when: (s) => well(M(s)) && s.sc.town.phase >= 1 && s.sc.town.phase <= 2 && s.day >= 4 },
    text: (s) => [MA + '「父さん、ピッポと城壁のところで遊んでもいい？ずっと家の中で、つまんないよ」', ...(well(L(s)) ? [LU + '「外は……。でも、閉じ込めておくのも可哀想で」'] : []), ...(flag(s, 'agneseSick') ? ['ピッポの母親は、このところ咳が止まらないと聞く。'] : [])],
    choices: [
      { label: '「行っておいで。日暮れまでに帰るんだぞ」', key: 'マルコを外へ遊びに行かせた', tag: 'yes', run: (s) => {
        adj(M(s), 'morale', 12); adj(M(s), 'bond', 3);
        expose(s, 'marco', 0.03 + 0.1 * s.sc.town.prev, 'flea', '外での遊び');
        if (flag(s, 'agneseSick') && !flag(s, 'agneseDead')) expose(s, 'marco', 0.14, 'droplet', '咳をするピッポの母のそば');
        return MA + '「やった！行ってきます！」';
      } },
      { label: '「駄目だ。家にいなさい」', tag: 'no', run: (s) => { adj(M(s), 'morale', -8); adj(M(s), 'bond', -4); return [MA + '「……父さんのけち」', 'マルコは戸口に座って、通りを眺めていた。']; } },
      { label: '「今日は父さんと遊ぼう」', cost: { time: 1 }, tag: 'play', run: (s) => { adj(M(s), 'morale', 14); adj(M(s), 'bond', 9); adj(P(s), 'morale', 5); stat(s, 'played'); return ['家の裏で、石蹴りと影踏みをした。', MA + '「父さん、へたくそ！もう一回！」']; } },
    ],
  },
  {
    id: 'cat', title: '黒い猫', category: 'daily', speaker: 'マルコ',
    auto: { on: 'zone:homeEve', pri: 1, when: (s) => s.day >= 3 && well(M(s)) && !s.sc.home.cat },
    text: (s) => ['家に戻ると、マルコが痩せた黒猫を抱いていた。', MA + '「路地でついてきたんだ。ネーロって名前にした。飼ってもいい？ぼくのご飯、半分あげるから！」', ...(well(L(s)) ? [LU + '「食べさせる口が増えるのよ。……あなたが決めて」'] : [])],
    choices: [
      { label: '「いいだろう。ちゃんと世話するんだぞ」', hint: '時々、食料を少し食べる', key: '黒猫のネーロを飼うことにした', tag: 'yes', run: (s) => { s.sc.home.cat = 1; adj(M(s), 'morale', 14); adj(M(s), 'bond', 6); return [MA + '「ほんと！？父さん大好き！」', 'ネーロは台所の隅を嗅ぎまわり、やがてかまどの前で丸くなった。']; } },
      { label: '「駄目だ。うちには余裕がない」', tag: 'no', run: (s) => { adj(M(s), 'morale', -8); adj(M(s), 'bond', -3); return 'マルコは何も言わず、猫を路地に放しに行った。戻ってきた目が赤かった。'; } },
    ],
  },
  {
    id: 'lucia_teresa', title: 'ルチアの頼み', category: 'relation', speaker: 'ルチア',
    auto: { on: 'morning', pri: 2, when: (s) => npc(s, 'teresa').st === 'sick' && well(L(s)) && !flag(s, 'teresaHelp') },
    text: [LU + '「テレーザさんが寝込んでいるの。身寄りのない人よ。私が行って、世話をしてくるわ」', LU + '「マルコが生まれたとき、取り上げてくれたのはあの人だもの」'],
    choices: [
      { label: '「頼む。気をつけて」', key: 'ルチアが隣人テレーザの世話に行くのを認めた', tag: 'yes', run: (s) => { setFlag(s, 'teresaHelp', flag(s, 'teresaHelp') + 1); adj(L(s), 'morale', 5); adj(L(s), 'bond', 3); expose(s, 'lucia', 0.05, 'flea', 'テレーザの看病'); return LU + '「水と粥を持っていくわ。すぐ戻るから」'; } },
      { label: '「いや、俺が行く」', tag: 'self', run: (s) => { adj(L(s), 'bond', 2); return LU + '「……そう。じゃあ、お願いね」　（テレーザの家は、広場の手前、通りの南側だ）'; } },
      { label: '「行くな。病人の家だぞ」', key: 'ルチアが隣人の世話に行くのを止めた', tag: 'no', run: (s) => { adj(L(s), 'morale', -5); adj(L(s), 'bond', -5); return LU + '「……見捨てるのね。明日は、私たちの番かもしれないのに」'; } },
    ],
  },
  {
    id: 'ring', title: '母の指輪', category: 'relation', speaker: 'ルチア',
    auto: { on: 'zone:homeEve', pri: 2, when: (s) => well(L(s)) && s.money < 6 && s.food < mouths(s) * 2 },
    text: [LU + '「これ、売ってきて。母さんの形見の指輪よ」', LU + '「指輪は食べられないもの。……いいの。マルコのためなら、母さんも許してくれる」'],
    choices: [
      { label: '受け取る', hint: '20ソルドほどになる', key: 'ルチアの形見の指輪を売った', tag: 'yes', run: (s) => { s.money += 20; setFlag(s, 'soldRing'); adj(L(s), 'morale', -6); adj(L(s), 'bond', 2); return ['指輪は、まだ彼女の指の温みを残していた。', '（金貸しの店で20ソルドに換えた）']; } },
      { label: '「それだけは駄目だ。俺が何とかする」', tag: 'no', run: (s) => { adj(L(s), 'bond', 6); adj(L(s), 'morale', 3); return LU + '「……馬鹿ね。でも、ありがとう」'; } },
    ],
  },
  {
    id: 'nightmare', title: '夜中の声', category: 'daily',
    auto: { on: 'morning', once: false, cooldown: 4, chance: 0.45, when: (s) => well(M(s)) && s.sc.town.phase >= 2 },
    text: ['昨夜、マルコがうなされて飛び起きた。', MA + '「荷車が……荷車が、ぼくを乗せに来た……」'],
    choices: [
      { label: '朝まで抱いていた', hint: 'あまり眠れなかった', tag: 'yes', run: (s) => { s.stamina = Math.max(0, s.stamina - 15); adj(M(s), 'morale', 10); adj(M(s), 'bond', 6); return 'マルコはあなたの胸に顔を埋めて、ようやく寝息を立てた。腕が痺れても、あなたは動かなかった。'; } },
      { label: '「夢だよ。もう寝なさい」と声をかけた', tag: 'no', run: (s) => { adj(M(s), 'morale', -4); return 'マルコは小さく頷いて、毛布を頭までかぶった。'; } },
    ],
  },
  {
    id: 'hearth', title: 'かまどの前で', category: 'relation', speaker: 'ルチア',
    auto: { on: 'zone:homeEve', pri: 1, when: (s) => s.day >= 12 && well(L(s)) },
    text: ['マルコが寝入ったあと、ルチアと二人、かまどの残り火を見ていた。', LU + '「ねえ。もし全部終わったら、何がしたい？」'],
    choices: [
      { label: '「三人で、海を見に行こう」', run: (s) => { adj(L(s), 'morale', 8); adj(L(s), 'bond', 6); setFlag(s, 'promiseSea'); return LU + '「マルコが喜ぶわ。……私も、見たことがないの。海」'; } },
      { label: '「正直に言うと、怖いんだ」', run: (s) => { adj(L(s), 'bond', 10); adj(P(s), 'morale', 6); return ['ルチアは、あなたの手に自分の手を重ねた。', LU + '「知ってる。私もよ。……だから、一緒にいるんでしょう」']; } },
      { label: '黙って、彼女の肩を抱く', run: (s) => { adj(L(s), 'morale', 6); adj(L(s), 'bond', 5); return '薪のはぜる音だけが、しばらく続いた。'; } },
    ],
  },
  {
    id: 'thief', title: '夜の物音', category: 'crisis',
    auto: { on: 'morning', chance: 0.6, when: (s) => s.sc.town.phase >= 3 && s.food >= 5 },
    text: ['昨夜遅く、戸をこじ開ける音で目が覚めた。', '暗がりに、痩せた男の影。手には、うちの麦の袋。男の目も、怯えていた。'],
    choices: [
      { label: '棒を握って、追い払う', tag: 'fight', run: (s) => {
        if (chance(s, 0.55)) return '怒鳴り声を上げて棒を振り上げると、男は袋を落として闇の中へ逃げた。';
        adj(P(s), 'health', -14); s.food = Math.max(0, s.food - 2);
        s.dangers.push({ day: s.day, text: '盗人ともみ合って怪我をした', amount: 0.3 });
        return 'もみ合いになり、肩を戸の角に打ちつけた。男は袋の中身を掴めるだけ掴んで逃げた（食料−2）。';
      } },
      { label: '「これだけ持って行け」と、少し分ける', cost: { food: 2 }, tag: 'give', run: (s) => { adj(P(s), 'morale', 3); return '男は豆の包みを抱いて、何度も頭を下げた。「子どもが、三人いるんだ」'; } },
      { label: '息をひそめて、やり過ごす', tag: 'hide', run: (s) => { const lost = Math.ceil(s.food / 2); s.food -= lost; adj(L(s), 'morale', -4); return `男は袋を担いで出て行った。家族は無事だった（食料−${lost}）。`; } },
    ],
  },
  {
    id: 'orphan', title: '戸口の子ども', category: 'major',
    auto: { on: 'morning', pri: 2, when: (s) => npc(s, 'pietro').st === 'dead' && !!flag(s, 'pippoAlive') && !s.sc.home.guest },
    text: (s) => ['戸口に、ピッポが立っていた。マルコの遊び友達。石工ピエトロの息子だ。', 'ピッポ｜「……父ちゃんも、母ちゃんも、起きないんだ」', ...(well(M(s)) ? [MA + '「父さん、ピッポをうちに入れてあげて。お願い」'] : [])],
    choices: [
      { label: '家に入れる', hint: '養う口が一人増える', key: '孤児になったピッポを引き取った', tag: 'yes', run: (s) => {
        s.sc.home.guest = 1; adj(M(s), 'morale', 12); adj(L(s), 'morale', 2); adj(P(s), 'morale', 5);
        expose(s, 'marco', 0.06, 'flea', '引き取った子の衣服のノミ'); expose(s, 'lucia', 0.04, 'flea', '引き取った子の衣服のノミ'); expose(s, 'player', 0.04, 'flea', '引き取った子の衣服のノミ');
        return ['ルチアが黙って椀をひとつ増やした。', 'ピッポは粥を一口すすって、声を上げずに泣いた。'];
      } },
      { label: 'パンを持たせ、教会へ行くよう言う', cost: { food: 1 }, tag: 'church', run: (s) => { adj(M(s), 'morale', -5); return 'ピッポはパンを握りしめて、広場の方へ歩いていった。一度も振り返らなかった。'; } },
      { label: '戸を閉める', key: '孤児になったピッポに戸を閉ざした', tag: 'no', run: (s) => { adj(M(s), 'morale', -12); adj(M(s), 'bond', -8); adj(P(s), 'morale', -6); return ['戸の向こうで、しばらく小さな足音がしていた。', ...(well(M(s)) ? [MA + '「……父さんなんか、きらいだ」'] : [])]; } },
    ],
  },
  {
    id: 'quarrel', title: '言い争い', category: 'relation', speaker: 'ルチア',
    auto: { on: 'zone:homeEve', pri: 1, when: (s) => well(L(s)) && L(s).bond < 32 && s.day >= 4 },
    text: [LU + '「あなたは、私たちを見ていない。お金と食べ物を運べば、それで家族だと思ってる」', LU + '「マルコが昨日、何て言ったか知ってる？『父さんは、ぼくの名前を忘れたのかな』って」'],
    choices: [
      { label: '「……すまなかった」', run: (s) => { adj(L(s), 'bond', 10); adj(L(s), 'morale', 4); return LU + '「謝ってほしいんじゃないの。ただ……ここにいて。それだけよ」'; } },
      { label: '「誰のために働いていると思ってる」', run: (s) => { adj(L(s), 'bond', -6); adj(L(s), 'morale', -6); adj(M(s), 'morale', -5); return 'ルチアは背を向けた。奥で、マルコが毛布をかぶる気配がした。'; } },
    ],
  },
];

// encounters.ts の triggerAuto を循環参照なしで使うための差し込み口（index.ts で設定する）
let _trigger: (s: S, on: string) => void = () => {};
export function bindTrigger(fn: (s: S, on: string) => void) { _trigger = fn; }
void randInt; void note;
