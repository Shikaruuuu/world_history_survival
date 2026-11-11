// 町の人々と場所：市場、工房、教会、隣人、門、路地。町で起きる出来事。
import { chance, pick, randInt } from '../../../core/rng';
import type { Choice, Encounter } from '../../../core/types';
import {
  L, M, P, S, adj, evacuate, expose, exposeFamily, family, flag, living, mouths, note, npc, setFlag, sick, stat, well,
} from '../rules';

type E = Encounter<S>;
const say = (name: string, t: string) => `${name}｜${t}`;
const leave: Choice<S> = { label: '立ち去る', tag: 'leave' };
const once = (s: S, key: string) => { const k = key + 'Day'; if (flag(s, k) === s.day) return false; setFlag(s, k, s.day); return true; };

const RUMORS = [
  ['「今年は麦の出来がいいらしい。パンも安くなるといいがね」', '「ピサの港に、妙なガレー船が入ったそうだ。船乗りが皆、寝込んでいたとか」', '「聖ヨハネの祭りには、広場に芝居が来るってさ」', '「グイド親方の工房、フィレンツェから大口の注文だってね」', '「うちの倅がね、やっと嫁をもらうんだよ」'],
  ['「粉屋の下働きが死んだんだと。脇の下に黒い腫れ物があったそうだ」', '「ピサから来た者は町に入れるな、とお触れが出たよ」', '「悪い空気のせいだ。南風が沼の毒を運んでくるんだ」', '「星の巡りが悪いんだと、医者の先生が言ってた」', '「買えるうちに粉を買っときな。値は上がる一方さ」'],
  ['「向かいの一家は、三日で五人とも逝っちまった」', '「金持ちは皆、丘の別荘へ逃げたよ。残ってるのは俺たちだけさ」', '「医者も逃げた。司祭様だけだ、病人の家に入るのは」', '「咳をして血を吐く者は、まず助からん。腫れ物の方が、まだ望みがある」', '「死んだ者の服を着るな、と言われてる。だが、裸じゃ生きられん」', '「神がお怒りなんだ。俺たちは皆、裁かれてる」'],
  ['「……話しかけんでくれ。誰が病を持っとるか分からん」', '「うちはもう、俺ひとりだ」', '「墓地はいっぱいだ。壁の外に、大きな穴を掘ったそうだ」', '「生きてる者が、死んだ者を埋めるのに足りんのだ」'],
];

// 門を出る手立て（開いている／賄賂／通用門／かんぬき）
function wayOut(s: S): { via: string; cost: number; text: string } | null {
  const t = s.sc.town, lando = npc(s, 'lando').st === 'ok';
  if (s.ctx === 'postern') return flag(s, 'knowPostern') ? { via: '西の通用門', cost: 0, text: 'ピエトロに教わったとおり、蝶番の石を外せば通用門は開く。' } : null;
  if (s.day < t.gateCloseDay) return { via: '町の門', cost: 0, text: '門はまだ開いている。' };
  if (lando) return { via: '門番への袖の下', cost: t.bribe, text: `門は閉ざされている。ランドは小声で言った。「${t.bribe}ソルド。夜明け前に、通用口を開けておく」` };
  return { via: '無人の門', cost: 0, text: '門番の姿はない。かんぬきは、内側から外せそうだ。' };
}

export const townEncounters: E[] = [
  // ================= 市場 =================
  {
    id: 'beppe', speaker: '穀物売りのベッペ',
    text: (s) => say('ベッペ', ['「らっしゃい！今朝焼いたパンに、ルッカの豆だ。坊主は元気かい」', '「……ピサからの荷が来ねえ。値は上げたかないが、仕入れが倍なんだ」', '「売れるうちに買っときな。俺も、明日ここに立ってるか分からん」', '「これが最後の荷だ」'][s.sc.town.phase]),
    choices: [
      { label: '買い物をする', tag: 'shop', run: () => ({ next: 'shop:beppe' }) },
      { label: '町の様子を聞く', tag: 'talk', run: (s) => {
        if (once(s, 'beppeTalk')) npc(s, 'beppe').rel++;
        const t = s.sc.town;
        return say('ベッペ', t.phase === 0 ? '「港町で病が流行ってるって話だ。荷が止まりゃ、値は跳ね上がる。買うなら今のうちだぜ」'
          : t.phase === 1 ? '「評議会が、市を閉めるかどうか揉めてる。閉まったら、俺の家の戸を叩きな。馴染みには分けてやる」'
          : '「市が閉まったら、広場の南の、青い戸の家だ。あんたには世話になった。忘れねえよ」');
      } },
      leave,
    ],
  },
  {
    id: 'beppe_door', title: 'ベッペの家',
    text: (s) => {
      const b = npc(s, 'beppe');
      if (b.st === 'dead') return '青い戸に、板が打ちつけてある。隣の女が首を振った。「ベッペさんは、一昨日ね……」';
      return b.rel >= 3 ? ['戸を叩くと、細く開いた隙間からベッペの目が覗いた。', say('ベッペ', '「……あんたか。入んな。大きな声は出すなよ」')] : ['戸を叩くと、中から押し殺した声がした。', say('ベッペ', '「帰ってくれ。分けてやれる物なんかねえ」')];
    },
    choices: [
      { label: '食料を分けてもらう', show: (s) => npc(s, 'beppe').st === 'ok' && npc(s, 'beppe').rel >= 3, tag: 'shop', run: () => ({ next: 'shop:beppeDoor' }) },
      leave,
    ],
  },
  {
    id: 'gina', speaker: '薬草売りのジーナ',
    text: (s) => say('ジーナ', s.sc.town.phase === 0 ? '「薪にろうそく、灰汁に薬草。暮らしに要るものは何でもあるよ」' : '「香草は飛ぶように売れるよ。悪い空気を払うんだとさ。私ゃ、売るだけだがね」'),
    choices: [
      { label: '買い物をする', tag: 'shop', run: () => ({ next: 'shop:gina' }) },
      { label: '薬草のことを聞く', tag: 'talk', run: (s) => say('ジーナ', s.sc.town.phase <= 1 ? '「熱には柳の皮、腫れ物には温めた玉ねぎの湿布さ。効くかどうかは、神様次第だがね」' : '「正直に言うよ。あの病に効く草を、私は知らない。出来るのは、熱を少し楽にすることだけさ。私も近いうちに、娘のいる村へ行くつもりだよ」') },
      leave,
    ],
  },
  {
    id: 'vendor', speaker: (s) => (s.ctx === 'clothVendor' ? '布売り' : '青物売り'),
    text: (s) => s.ctx === 'clothVendor' ? say('布売り', '「フィレンツェ仕込みの毛織物だよ！……あんた、グイドんとこの職人か。なら目は確かだな」') : say('青物売り', s.sc.town.phase === 0 ? '「蕪に玉ねぎ、採れたてだよ！」' : '「今朝の分で終わりさ。畑の者が、町に入りたがらないんだ」'),
    choices: [leave],
  },
  {
    id: 'bernardo', speaker: '医師ベルナルド',
    text: [say('ベルナルド', '「この病は、腐った空気が体に入り、体液の釣り合いを崩すことで起こる。星の巡りが、それを招いたのだ」'), say('ベルナルド', '「香草を焚き、酢で手と口をすすぎなさい。そして何より、恐れと悲しみを遠ざけること。心が沈めば、体も病を招く」')],
    choices: [
      { label: 'テリアカ（万能の解毒薬）を買う', hint: '蛇の肉や数十の薬種を練った高価な薬', cost: { money: 15 }, key: '医師から高価な薬テリアカを買った', tag: 'theriac', show: (s) => !flag(s, 'theriac'), run: (s) => { setFlag(s, 'theriac'); living(s).forEach((p) => adj(p, 'morale', 8)); return [say('ベルナルド', '「毎朝、豆粒ほどを葡萄酒に溶いて飲みなさい。古代より伝わる、最良の備えだ」'), '黒く粘る練り薬の壺を受け取った。これで少しは安心できる、気がした。']; } },
      { label: '「先生は、町に残るのですか」', run: (s) => say('ベルナルド', s.sc.town.phase >= 2 ? '「……脈を取ろうにも、近づけば私が倒れる。医者が死ねば、誰が診るのかね。私は、発つよ」' : '「務めは果たす。だが、この病の前で、我々の学問がどれほど役に立つか……正直、分からんのだ」') },
      leave,
    ],
  },
  {
    id: 'notice', title: '広場の掲示',
    text: (s) => {
      const t = s.sc.town;
      if (t.phase === 0) return ['評議会の触れ書きが貼ってある。', '「一、市場税は従前のとおり。」', '「一、聖ヨハネの祝日の市は、例年どおり広場にて開く。」'];
      if (t.phase === 1) return ['新しい触れ書きが貼ってある。', '「一、ピサ及びルッカより来たる者、何人も町に入るを禁ず。」', '「一、古着・寝具の持ち込みと売買を禁ず。」', '「一、病人の出た家は、評議会に届け出ること。」'];
      if (t.phase === 2) return ['触れ書きが増えている。', '「一、葬列は近親の者のみ。弔いの鐘は鳴らさぬこと。」', '「一、亡骸は木の棺に納め、深く埋めること。」', s.day >= t.gateCloseDay ? '「一、町の門を閉ざす。許しなく出入りするを禁ず。」' : '「一、近く、町の門を閉ざす。」', '「一、亡骸を運ぶ者を募る。日当は門番まで。」'];
      return ['触れ書きは雨に打たれ、半ば剥がれている。新しいものは、もう貼られていない。'];
    },
    choices: [{ label: '読み終える', tag: 'leave' }],
  },
  {
    id: 'well', title: '広場の井戸',
    text: (s) => s.sc.town.phase <= 1 ? ['水を汲む女たちが、声を落として話している。', say('女', pick(s, RUMORS[s.sc.town.phase]))] : ['井戸端には誰もいない。釣瓶の縄だけが、風に揺れている。'],
    choices: [{ label: '離れる', tag: 'leave' }],
  },

  // ================= 工房 =================
  {
    id: 'guido', speaker: 'グイド親方',
    text: (s) => say('グイド', s.sc.town.phase === 0 ? '「おう、来たか。フィレンツェの商会に納める反物が山ほどある。今日も頼むぞ」' : s.day >= s.sc.town.workshopCloseDay - 1 ? '「……注文が、ぱったり止まった。わしも、家族を連れて丘の別荘へ行く。お前も、身の振り方を考えろ」' : '「荷が動かん。賃金は下げさせてもらう。嫌なら来なくていい」'),
    choices: (s) => {
      const t = s.sc.town, wage = t.phase === 0 ? 9 : 7;
      const blocked = (s: S): true | string => (sick(P(s)) ? '熱があって働けない' : true);
      return [
        { label: '働く', hint: `半日の機織りと縮絨。賃金${wage}ソルド`, cost: { time: 3, stamina: 25 }, ok: blocked, tag: 'work', run: (s) => {
          s.money += wage; stat(s, 'worked'); npc(s, 'guido').rel++;
          expose(s, 'player', 0.05 * t.prev, 'flea', '工房での仕事');
          return [`槌を打ち、布を晒し、日が傾くまで働いた。${wage}ソルドを受け取った。`];
        } },
        { label: '倉の羊毛を運び出す', hint: '人手の嫌がる仕事。賃金13ソルド', show: (s) => s.sc.town.phase >= 1, cost: { time: 3, stamina: 35 }, ok: blocked, tag: 'workRisky', run: (s) => {
          s.money += 13; stat(s, 'worked');
          expose(s, 'player', 0.03 + 0.2 * t.prev, 'flea', '羊毛倉の荷運び');
          return ['暗い倉で、梱を担いでは運び出した。梱の陰から、ネズミが何匹も走り出た。', '13ソルドを受け取った。首すじが、やけに痒い。'];
        } },
        { label: '話を聞く', tag: 'talk', run: (s) => say('グイド', t.phase === 0 ? '「お前の倅、八つだったか。あと四年もすりゃ、うちで見習いに取ってやる」' : '「ピサの取引先から、便りが途絶えた。番頭も、その家族も、皆死んだそうだ」') },
        leave,
      ];
    },
  },
  {
    id: 'workshop_door', title: '工房の戸',
    text: ['工房の戸は閉ざされ、板に書きつけが打ってある。', '「しばらく休む。未払いの賃金は、戻ってから払う。——グイド」', '機の音のしない工房を見るのは、初めてだった。'],
    choices: [leave],
  },

  // ================= 教会 =================
  {
    id: 'priest', speaker: 'ドン・アンセルモ司祭',
    text: (s) => say('司祭', ['「神の平安があなたと共に。ご家族は息災かね」', '「恐れてはならぬ。だが、備えは怠らぬことだ。祈りと、慎みある暮らしを」', '「今日だけで、七人に終油を授けた。……私の手は、足りぬ」', '「よく来た。ここにはまだ、灯がある」'][s.sc.town.phase]),
    choices: [
      { label: '祈る', hint: '心が少し落ち着く', cost: { time: 1 }, tag: 'pray', run: (s) => { if (once(s, 'pray')) adj(P(s), 'morale', 12); return '石の床に膝をつき、家族の名をひとつずつ唱えた。高い窓から、細い光が落ちている。'; } },
      { label: '施しを願う', show: (s) => s.food < mouths(s) * 2, ok: (s) => (s.day - flag(s, 'almsDay') >= 3 || !flag(s, 'almsDay') ? true : '先日いただいたばかりだ'), tag: 'alms', run: (s) => { setFlag(s, 'almsDay', s.day); s.food += 3; return [say('司祭', '「貧しい者のための麦だ。持っていきなさい。恥じることはない」'), '（食料＋3）']; } },
      { label: '献金する', cost: { money: 4 }, tag: 'donate', run: (s) => { npc(s, 'priest').rel += 2; adj(P(s), 'morale', 5); return say('司祭', '「感謝する。これで、身寄りのない病人に粥を配れる」'); } },
      { label: 'この病について尋ねる', tag: 'talk', run: (s) => say('司祭', s.sc.town.phase <= 1 ? '「病は、神が人に悔い改めを促す鞭だと、古くから言われる。だが私には、幼子まで打たれる理由が分からぬ。……分からぬまま、祈るのだ」' : '「逃げる者を、私は責めぬ。残る者を、愚かとも思わぬ。ただ、誰かの手を握ってやれる者が、一人でも多くあれと願う」') },
      leave,
    ],
  },
  {
    id: 'altar', title: '祭壇',
    text: ['祭壇の前に、司祭の姿はない。溶け残ったろうそくが、いくつか灯っている。'],
    choices: [
      { label: '祈る', cost: { time: 1 }, tag: 'pray', run: (s) => { if (once(s, 'pray')) adj(P(s), 'morale', 9); return '誰もいない聖堂で、あなたは家族の名を唱えた。声が、高い天井に吸われていった。'; } },
      leave,
    ],
  },
  {
    id: 'sermon', title: '説教', category: 'daily', speaker: 'ドン・アンセルモ司祭',
    auto: { on: 'zone:church', pri: 1, when: (s) => s.sc.town.phase === 0 && s.day >= 2 },
    text: ['聖堂では、司祭が数人の町人に語りかけていた。', say('司祭', '「東の国々で、また海の向こうのシチリアで、大いなる死が人々を襲っていると聞く」'), say('司祭', '「兄弟たちよ、噂に怯えるな。しかし、隣人が倒れたとき、その戸を叩く者であれ」')],
    choices: [{ label: '耳を傾ける', run: (s) => { adj(P(s), 'morale', 3); } }],
  },
  {
    id: 'procession', title: '贖罪の行列', category: 'major',
    auto: { on: 'zone:church', pri: 2, when: (s) => s.sc.town.phase === 2 && npc(s, 'priest').st === 'ok' },
    text: ['聖堂は人で埋まっていた。聖母の像を担ぎ、町を巡って神の赦しを乞う行列が出るという。', '裸足の男女が、肩を寄せ合って連祷を唱えている。あちこちで、咳の音がした。'],
    choices: [
      { label: '行列に加わる', hint: '人々と肩を並べて町を巡る', cost: { time: 1 }, key: '贖罪の行列に加わった', tag: 'join', run: (s) => { adj(P(s), 'morale', 16); expose(s, 'player', 0.1 + 0.2 * s.sc.town.prev, 'droplet', '人で埋まった贖罪の行列'); return ['ろうそくを手に、声を合わせて歩いた。独りではない、と久しぶりに思えた。', '隣の男が、ずっと咳をしていた。']; } },
      { label: '入口の柱の陰から祈る', tag: 'watch', run: (s) => { adj(P(s), 'morale', 6); return '歌声が通りへ出ていくのを、離れて見送った。'; } },
      { label: '立ち去る', tag: 'leave', run: (s) => { adj(P(s), 'morale', -2); } },
    ],
  },

  // ================= 隣人テレーザ =================
  {
    id: 'teresa', speaker: '隣人テレーザ',
    text: (s) => {
      if (flag(s, 'teresaRecovered')) return say('テレーザ', flag(s, 'teresaHelp') ? '「あんたたちが水を運んでくれたから、私ゃ生きてる。この恩は忘れないよ」' : '「……なんとか、死にそこなったよ。誰も来ちゃくれなかったがね」');
      return say('テレーザ', s.sc.town.phase === 0 ? '「おや、お出かけかい。マルコ坊は、また背が伸びたねえ。私が取り上げた子だもの、自慢だよ」' : '「妙な病が流行ってるそうじゃないか。年寄りから先に持っていかれるんだろうねえ」');
    },
    choices: [
      { label: '世間話をする', tag: 'talk', run: (s) => {
        if (flag(s, 'teresaRecovered') && flag(s, 'teresaHelp') && !flag(s, 'teresaGift')) { setFlag(s, 'teresaGift'); s.money += 10; s.food += 3; return [say('テレーザ', '「これを持ってお行き。床下に隠しておいた銀と、干し豆だ。私ひとりじゃ、使い切る前にお迎えが来るよ」'), '（10ソルドと食料＋3）']; }
        if (!flag(s, 'figs') && s.sc.town.phase === 0) { setFlag(s, 'figs'); s.food += 1; adj(M(s), 'morale', 3); return [say('テレーザ', '「これ、マルコ坊に。去年の干しイチジクだよ」'), '（食料＋1）']; }
        return say('テレーザ', pick(s, ['「亭主を送ってもう十年。この通りで産まれた子は、たいてい私が取り上げたんだ」', '「ルチアさんを大事におし。あんな働き者は、そういないよ」', '「年寄りはね、朝に目が覚めるだけで儲けものさ」']));
      } },
      leave,
    ],
  },
  {
    id: 'teresa_door', title: 'テレーザの家', category: 'relation',
    auto: { on: 'zone:street', pri: 2, when: (s) => npc(s, 'teresa').st === 'sick' },
    text: (s) => {
      const st = npc(s, 'teresa').st;
      if (st === 'dead') return ['テレーザの家の戸には、板が打ちつけられている。', '窓辺に、干からびたイチジクの束が下がったままだ。'];
      return ['テレーザの家の戸が、半分開いたままになっている。いつも戸口の腰掛けにいる彼女の姿がない。', '中から、苦しげなうめき声が聞こえる。'];
    },
    choices: (s) => npc(s, 'teresa').st !== 'sick' ? [leave] : [
      { label: '中に入って世話をする', hint: '水を飲ませ、汗を拭く', cost: { time: 1 }, ok: (s) => (flag(s, 'teresaDay') === s.day ? '今日はもう見舞った' : true), key: '病に倒れた隣人テレーザの家に入り、世話をした', tag: 'help', run: (s) => {
        setFlag(s, 'teresaDay', s.day); setFlag(s, 'teresaHelp', flag(s, 'teresaHelp') + 1); adj(P(s), 'morale', 4); stat(s, 'helped');
        expose(s, 'player', 0.06, 'flea', '隣人テレーザの看病');
        return ['薄暗い寝床で、テレーザは熱にうかされていた。脇の下が、黒く腫れ上がっている。', say('テレーザ', '「……誰だい。ああ、あんたか。……来ちゃ、いけないよ……」'), '水を含ませ、額を拭いた。寝藁から跳ねたノミが、手首を刺した。'];
      } },
      { label: '戸口に水とパンを置いて声をかける', cost: { food: 1 }, ok: (s) => (flag(s, 'teresaDay') === s.day ? '今日はもう見舞った' : true), key: 'テレーザの戸口に食べ物を置いた', tag: 'door', run: (s) => {
        setFlag(s, 'teresaDay', s.day); setFlag(s, 'teresaHelp', flag(s, 'teresaHelp') + 0.5); adj(P(s), 'morale', 2); stat(s, 'helped');
        return '「テレーザさん、ここに置くよ」　返事はなかったが、うめき声が少しだけ静まった。';
      } },
      { label: '立ち去る', tag: 'leave', run: (s) => { if (flag(s, 'teresaDay') !== s.day) adj(P(s), 'morale', -3); } },
    ],
  },

  // ================= 隣人ピエトロ =================
  {
    id: 'pietro', speaker: '石工ピエトロ',
    text: (s) => {
      if (flag(s, 'agneseDead')) return say('ピエトロ', '「……アニェーゼを、昨日埋めた。穴は、俺が自分で掘った。石工だからな」');
      if (flag(s, 'agneseSick')) return say('ピエトロ', '「女房が咳をして、血を吐くんだ。医者は来ちゃくれねえ。……あんたは、近寄らん方がいい」');
      return say('ピエトロ', s.sc.town.phase === 0 ? '「よう。うちのピッポが、またマルコと城壁で遊んでたぜ。あの二人は兄弟みてえだな」' : '「城壁の修繕も止まっちまった。石工に仕事がなきゃ、どうやって食わせりゃいい」');
    },
    choices: [
      { label: '話す', tag: 'talk', run: (s) => {
        if (flag(s, 'pietroHelped') && flag(s, 'agneseDead') && !flag(s, 'hasCart')) return { next: 'pietro_repay' };
        return say('ピエトロ', pick(s, ['「西の壁の通用門はな、俺が去年、蝶番を直したんだ。古い門だよ」', '「ガキの頃からこの路地だ。あんたとも長えな」', '「ピッポの奴、マルコの話ばかりしやがる」']));
      } },
      { label: '手押し車を譲ってもらう', hint: '荷や病人を運べる', show: (s) => !flag(s, 'hasCart') && s.sc.town.phase >= 1, cost: { money: 8 }, tag: 'cart', run: (s) => { setFlag(s, 'hasCart'); return say('ピエトロ', '「石を運ぶ車だ、頑丈だぜ。……どこかへ行く気か。まあ、聞かねえよ」'); } },
      leave,
    ],
  },
  {
    id: 'pietro_ask', title: 'ピエトロの頼み', category: 'relation', speaker: '石工ピエトロ',
    auto: { on: 'zone:alley', pri: 2, when: (s) => !!flag(s, 'agneseSick') && !flag(s, 'agneseDead') && npc(s, 'pietro').st === 'ok' && s.day > npc(s, 'pietro').day },
    text: ['路地で、ピエトロに呼び止められた。目の下に濃い隈がある。', say('ピエトロ', '「頼む。食い物を分けてくれ。女房は寝たきりで、俺は稼ぎがねえ。ピッポが、昨日から何も食ってねえんだ」'), '家の奥から、湿った咳が聞こえる。'],
    choices: [
      { label: '二食ぶん分ける', cost: { food: 2 }, key: '隣人ピエトロに食料を分けた', tag: 'give', run: (s) => { setFlag(s, 'pietroHelped', 2); npc(s, 'pietro').rel += 3; adj(P(s), 'morale', 4); stat(s, 'helped'); return say('ピエトロ', '「……恩に着る。この借りは、必ず返す。生きてりゃな」'); } },
      { label: '一食ぶんだけ分ける', cost: { food: 1 }, key: '隣人ピエトロに食料を少し分けた', tag: 'give1', run: (s) => { setFlag(s, 'pietroHelped', 1); npc(s, 'pietro').rel += 2; adj(P(s), 'morale', 2); stat(s, 'helped'); return say('ピエトロ', '「すまねえ。ピッポに食わせる」'); } },
      { label: '「うちも、子がいるんだ」と断る', key: '隣人ピエトロの頼みを断った', tag: 'no', run: (s) => { npc(s, 'pietro').rel -= 2; adj(P(s), 'morale', -4); return 'ピエトロは何も言わなかった。ただ、長いことあなたの顔を見ていた。'; } },
    ],
  },
  {
    id: 'pietro_repay', title: '石工の返礼', category: 'relation', speaker: '石工ピエトロ',
    auto: { on: 'zone:alley', pri: 2, when: (s) => !!flag(s, 'pietroHelped') && !!flag(s, 'agneseDead') && npc(s, 'pietro').st === 'ok' && npc(s, 'pietro').fate === 'ok' },
    text: [say('ピエトロ', '「あの時の豆で、ピッポは三日食いつないだ。借りを返す」'), say('ピエトロ', '「この手押し車を持っていけ。それと——西の壁の通用門だ。右の蝶番の下の石は、はめてあるだけだ。外せば、門は内から開く」'), say('ピエトロ', '「門番に銭を払う必要はねえ。逃げるなら、使え」')],
    choices: [{ label: '礼を言う', run: (s) => { setFlag(s, 'hasCart'); setFlag(s, 'knowPostern'); note(s, 'ピエトロから手押し車と、西の通用門の開け方を教わった。'); return '（手押し車を手に入れた。西の通りの突き当たりの通用門から、町を出られるようになった）'; } }],
  },
  {
    id: 'pietro_door', title: 'ピエトロの家',
    text: (s) => npc(s, 'pietro').st === 'dead' ? ['戸に板が打たれている。石工の槌が、戸口に立てかけられたままだ。'] : ['戸の向こうから、重い咳が聞こえる。ピエトロの声だ。', say('ピエトロ', '「……入るな。俺も、やられた。ピッポを……いや、何でもねえ」')],
    choices: [
      { label: '戸口に水とパンを置く', show: (s) => npc(s, 'pietro').st === 'sick', cost: { food: 1 }, run: (s) => { adj(P(s), 'morale', 3); stat(s, 'helped'); return '椀を戸の前に置いた。しばらくして、戸が細く開く音がした。'; } },
      leave,
    ],
  },

  // ================= 門 =================
  {
    id: 'lando', speaker: '門番ランド',
    text: (s) => {
      const t = s.sc.town;
      return say('ランド', s.day >= t.gateCloseDay ? '「門は閉めた。評議会の命だ。出るのも入るのも、許しが要る」' : t.phase === 0 ? '「今日も異状なし、だ。街道は荷車でにぎやかなもんさ」' : '「ピサから来た者は追い返せと言われてる。泣かれても、わめかれても、だ。……嫌な役目さ」');
    },
    choices: [
      { label: '町の外の様子を聞く', tag: 'talk', run: (s) => {
        const t = s.sc.town;
        if (s.day < t.onset) return say('ランド', '「海沿いの町で、たちの悪い熱病が出たらしい。旅の者が言うには、三日で死ぬとか。ま、噂は大げさなもんだ」');
        setFlag(s, 'knowFarm');
        return [say('ランド', t.farmStruck ? '「北の丘の村々でも、もう死人が出てる。農場のあたりもだ。逃げた先が安全だなんて、誰にも言えんよ」' : '「北の丘の村は、まだ無事らしい。だが、どの村も見張りを立てて、病人連れは石で追い返すそうだ」'), say('ランド', s.day >= t.gateCloseDay ? `「……どうしても出たいなら、${t.bribe}ソルド。俺にも家族がいるんでな」` : `「門は${t.gateCloseDay}日目あたりに閉まるって話だ。出るなら、それまでだな」`)];
      } },
      { label: '町を出る', tag: 'evac', show: (s) => s.sc.town.phase >= 1 || flag(s, 'fleePlan') === 1, run: (s) => { s.ctx = 'gate'; return { next: 'evac' }; } },
      { label: '亡骸を運ぶ仕事を請ける', hint: '皆が避ける仕事。日当16ソルド', show: (s) => s.sc.town.phase >= 2, cost: { time: 4, stamina: 40 }, ok: (s) => (sick(P(s)) ? '熱があって働けない' : true), key: '亡骸を運ぶ仕事を請けた', tag: 'becchino', run: (s) => {
        s.money += 16; setFlag(s, 'becDay', s.day); stat(s, 'becchino'); adj(P(s), 'morale', -8); adj(L(s), 'bond', -3);
        expose(s, 'player', 0.12 + 0.3 * s.sc.town.prev, 'flea', '亡骸を運ぶ仕事');
        exposeFamily(s, 0.03, 'flea', '仕事着に付いたノミ');
        return ['戸口に出された亡骸を荷車に積み、壁の外の大きな穴まで運んだ。何度も、何度も。', '敷布の端から、子どもの小さな足がのぞいていた。', '16ソルドを受け取った。手を洗っても、匂いが取れない。'];
      } },
      leave,
    ],
  },
  {
    id: 'gate', title: '町の門',
    text: ['門番の詰所は空だ。槍が、壁に立てかけられたまま。', '巨大な門扉は、太いかんぬきで閉ざされている。'],
    choices: [
      { label: '町を出る', tag: 'evac', run: (s) => { s.ctx = 'gate'; return { next: 'evac' }; } },
      leave,
    ],
  },
  {
    id: 'postern', title: '西の通用門',
    text: (s) => flag(s, 'knowPostern') ? ['壁に埋もれるようにして、小さな古い門がある。', '右の蝶番の下——たしかに、石がひとつ、浮いている。'] : ['壁に埋もれるようにして、小さな古い門がある。鉄の錠は錆びつき、びくともしない。'],
    choices: [
      { label: 'ここから町を出る', show: (s) => !!flag(s, 'knowPostern'), tag: 'evac', run: (s) => { s.ctx = 'postern'; return { next: 'evac' }; } },
      leave,
    ],
  },
  {
    id: 'evac', title: '町を出る', category: 'major',
    text: (s) => {
      const w = wayOut(s), need = mouths(s) * 2;
      const out = [w ? w.text : '出る手立てがない。'];
      out.push(`ルチアの兄の農場まで、歩いて二日。道中の食料は${need}食ぶん要る（手持ち${s.food}）。`);
      const ill = living(s).filter(sick);
      if (ill.length) out.push(`${ill.map((p) => (p.id === 'player' ? 'あなた' : p.name)).join('と')}は病の身だ。${flag(s, 'hasCart') ? '手押し車に乗せて行ける。' : '歩かせるには、あまりに弱っている。'}`);
      if (flag(s, 'knowFarm')) out.push(s.sc.town.farmStruck ? '門番は、丘の村々にも死人が出ていると言っていた。' : '門番は、丘の村はまだ無事だが、病人連れは追い返されると言っていた。');
      else out.push('町の外がどうなっているのか、あなたは何も知らない。');
      out.push('一度出れば、もう戻れない。');
      return out;
    },
    choices: (s) => {
      const w = wayOut(s);
      const famHere = family(s).some((p) => p.alive);
      return [
        { label: '家族を連れて町を出る', show: () => famHere, cost: { money: w?.cost ?? 0 },
          ok: (s) => (!w ? '出る手立てがない' : well(L(s)) && flag(s, 'fleePlan') !== 1 ? 'ルチアとまだ話がついていない' : true),
          tag: 'evacFamily', run: (s) => evacuate(s, 'family', w!.via) },
        { label: famHere ? '家族を残し、ひとりで出る' : 'ひとりで町を出る', cost: { money: w?.cost ?? 0 }, ok: () => (w ? true : '出る手立てがない'), tag: 'evacAlone', run: (s) => (famHere ? { next: 'evac_alone' } : evacuate(s, 'alone', w!.via)) },
        { label: 'やめておく', tag: 'leave' },
      ];
    },
  },
  {
    id: 'evac_alone', title: 'ひとりで', category: 'major',
    text: (s) => ['家には、ルチアとマルコがいる。', ...(family(s).some(sick) ? ['病の床で、あなたの帰りを待っている。'] : ['夕食の支度をして、あなたの帰りを待っている。']), '本当に、ひとりで行くのか。'],
    choices: [
      { label: '行く', key: '家族を残し、ひとりで町を出た', tag: 'evacAloneYes', run: (s) => evacuate(s, 'alone', wayOut(s)?.via ?? '門') },
      { label: '……家に帰る', tag: 'leave', run: (s) => { adj(P(s), 'morale', -3); return '踵を返した。門の影が、背中に長く伸びていた。'; } },
    ],
  },
  {
    id: 'refugees', title: '門前の人々', category: 'daily',
    auto: { on: 'zone:gate', pri: 2, when: (s) => s.day >= s.sc.town.onset - 1 && s.day <= s.sc.town.onset + 1 },
    text: ['門の外に、荷を背負った一家が座り込んでいる。門番が槍を横にして、中へ入れようとしない。', say('旅の男', '「ピサから三日歩いて来たんだ！子どもがいる、せめて水を！」'), say('ランド', '「お触れだ。ピサの者は入れられん」')],
    choices: [
      { label: '水袋を投げてやり、向こうの様子を尋ねる', key: '門前の避難民に水をやり、話を聞いた', tag: 'ask', run: (s) => { setFlag(s, 'knowFarm'); adj(P(s), 'morale', 2); return [say('旅の男', '「恩に着る……。ピサじゃ、朝元気だった者が、晩には冷たくなる。逃げたさ。だが、街道の村も、もう——」'), say('旅の男', s.sc.town.farmStruck ? '「北の丘の農場でも、戸口に死人が転がってた。どこへ逃げても同じだ」' : '「北の丘の方は、まだ無事だと聞いた。だが、よそ者と見りゃ石を投げてくる」')]; } },
      { label: '黙って見ている', tag: 'watch', run: () => '一家はやがて立ち上がり、街道を北へ歩いていった。子どもが、何度もこちらを振り返った。' },
    ],
  },
  {
    id: 'gate_closed', title: '閉ざされた門', category: 'crisis',
    auto: { on: 'zone:gate', pri: 1, when: (s) => s.day >= s.sc.town.gateCloseDay },
    text: (s) => ['門扉が閉ざされ、太いかんぬきが掛けられている。', ...(npc(s, 'lando').st === 'ok' ? [say('ランド', '「評議会の命だ。病を入れぬため、出さぬため、だとよ。……閉じ込められたのは、どっちなんだかな」')] : ['門番の姿は、どこにもない。'])],
    choices: [{ label: '門を見上げる', run: () => {} }],
  },

  // ================= 町の出来事 =================
  {
    id: 'sailor', title: '船乗りの話', category: 'daily',
    auto: { on: 'zone:market', pri: 3, when: (s) => s.day === 1 },
    text: ['市場はにぎわっている。パンの匂い、呼び売りの声、荷車の軋み。', '井戸のそばで、日焼けした旅の男が人だかりに話をしていた。', say('旅の男', '「メッシーナの港にな、東から来たガレー船が着いたんだ。漕ぎ手は皆、櫂を握ったまま死んでた。それからだ、町じゅうに病が広がったのは」'), say('町人', '「海の向こうの話だろう。ここは丘の上だ」')],
    choices: [
      { label: '足を止めて、詳しく聞く', tag: 'ask', run: (s) => { setFlag(s, 'heardSailor'); return [say('旅の男', '「脇や股に、卵ほどの腫れ物が出来る。黒い斑が出たら、もう終いだ。咳をして血を吐く奴は、もっと早い」'), say('旅の男', '「ジェノヴァも、ピサもやられた。次は、内陸さ。俺は、山の向こうまで逃げるつもりだ」')]; } },
      { label: '聞き流して、買い物に戻る', tag: 'leave' },
    ],
  },
  {
    id: 'crier', title: '評議会の触れ', category: 'crisis',
    auto: { on: 'zone:market', pri: 2, when: (s) => s.sc.town.phase === 1 },
    text: (s) => ['広場で、町の触れ役が声を張り上げている。', say('触れ役', '「評議会より告ぐ！粉屋通りにて、病の者あり！ピサ及びルッカより来たる者を町に入れるを禁ず！古着と寝具の売買を禁ず！」'), `人々が、穀物売りの台に殺到している。食料の値は、もう${s.sc.town.price}ソルドだ。`],
    choices: [{ label: '人波を見つめる', run: () => 'あの病が、この町に来たのだ。' }],
  },
  {
    id: 'scapegoat', title: 'よそ者への疑い', category: 'major',
    auto: { on: 'zone:market', pri: 1, when: (s) => s.sc.town.phase === 2 },
    text: ['広場の隅で、数人の男が旅の行商人を取り囲んでいる。', say('男', '「こいつが井戸に何か入れるのを見たって者がいる！よそ者が病を持ち込んだんだ！」'), say('行商人', '「違う、私はただ水を……！」'), '男の一人が、石を拾い上げた。'],
    choices: [
      { label: '割って入る', key: '疑いをかけられた行商人をかばった', tag: 'help', run: (s) => {
        setFlag(s, 'savedPeddler'); adj(P(s), 'morale', 6); stat(s, 'helped');
        if (chance(s, 0.4)) { adj(P(s), 'health', -8); return ['「この人は水を汲んでいただけだ。俺が見ていた」', '石がひとつ、あなたの肩に当たった。だが男たちは、やがて散っていった。', say('行商人', '「……命の恩人だ。私はしばらく、路地の奥の空き地に身を隠す。入り用の物があれば、来てくれ」')]; }
        return ['「この人は水を汲んでいただけだ。俺が見ていた」', '顔見知りの職人であるあなたの言葉に、男たちは渋々、石を下ろした。', say('行商人', '「……命の恩人だ。私はしばらく、路地の奥の空き地に身を隠す。入り用の物があれば、来てくれ」')];
      } },
      { label: '門番を呼びに走る', cost: { time: 1 }, tag: 'guard', run: (s) => { if (chance(s, 0.7)) { setFlag(s, 'savedPeddler'); return ['門番の姿を見て、男たちは散った。行商人は額から血を流していたが、生きていた。', say('行商人', '「礼を言う。路地の奥の空き地にいる。困ったら来てくれ」')]; } adj(P(s), 'morale', -6); return '戻ったとき、行商人は石畳に倒れて動かなかった。男たちの姿は、もうなかった。'; } },
      { label: '目を伏せて通り過ぎる', key: '疑いをかけられた行商人を見過ごした', tag: 'leave', run: (s) => { adj(P(s), 'morale', -6); return '背中で、鈍い音と悲鳴を聞いた。あなたは、足を速めた。'; } },
    ],
  },
  {
    id: 'market_closed', title: '空の広場', category: 'crisis',
    auto: { on: 'zone:market', pri: 2, when: (s) => !s.sc.town.marketOpen },
    text: ['広場に、露店はひとつもない。倒れた台と、破れた日除けが残っているだけだ。', '香草を焚く煙が、低く流れている。'],
    choices: [{ label: '立ち尽くす', run: (s) => (npc(s, 'beppe').rel >= 3 ? 'そういえばベッペが言っていた。市が閉まったら、広場の南の、青い戸の家を訪ねろと。' : '食べ物を手に入れる当てを、別に探さなければならない。') }],
  },
  {
    id: 'bulk', title: '豆のまとめ売り', category: 'daily', speaker: '穀物売りのベッペ',
    auto: { on: 'zone:market', once: false, cooldown: 4, chance: 0.5, when: (s) => !!s.sc.town.marketOpen && s.sc.town.phase <= 1 && s.day >= 2 },
    text: (s) => [say('ベッペ', `「おう、ちょうどいい。底の豆を袋ごと持ってかねえか。六食ぶんで${s.sc.town.price * 4}ソルド。運ぶのも面倒でな」`)],
    choices: [
      { label: '袋ごと買う', cost: (s) => ({ money: s.sc.town.price * 4 }), tag: 'yes', run: (s) => { s.food += 6; npc(s, 'beppe').rel++; return '重い袋を肩に担いだ。（食料＋6）'; } },
      { label: '断る', tag: 'no' },
    ],
  },
  {
    id: 'beggar', title: '物乞い', category: 'daily',
    auto: { on: 'zone:church', once: false, cooldown: 5, chance: 0.4, when: (s) => s.sc.town.phase >= 1 },
    text: ['教会の入口に、痩せた老人が座っている。差し出された椀は空だ。', say('老人', '「旦那、神のご加護を。昨日から、何も……」')],
    choices: [
      { label: '1ソルド恵む', cost: { money: 1 }, tag: 'give', run: (s) => { adj(P(s), 'morale', 3); return say('老人', '「あんたとご家族に、聖母さまのお守りがありますように」'); } },
      { label: '通り過ぎる', tag: 'leave' },
    ],
  },
  {
    id: 'collapsed', title: '路地に倒れた男', category: 'crisis',
    auto: { on: 'zone:alley', pri: 1, when: (s) => s.sc.town.phase === 1 },
    text: ['路地の壁にもたれて、若い男が座り込んでいる。粉屋の下働きだ。顔が赤く、目がうつろだ。', say('若い男', '「……家まで……すぐそこなんだ……足が……」'), '道行く者は、皆、壁際に寄って足早に通り過ぎていく。'],
    choices: [
      { label: '肩を貸して、家まで送る', key: '路地に倒れた病人を家まで送った', tag: 'help', run: (s) => { adj(P(s), 'morale', 5); stat(s, 'helped'); expose(s, 'player', 0.05, 'flea', '病人に肩を貸した'); return ['男の体は、服越しにも分かるほど熱かった。', '戸口で、男の母親が泣きながら何度も頭を下げた。']; } },
      { label: '近くの家の戸を叩いて、人を呼ぶ', tag: 'call', run: (s) => { adj(P(s), 'morale', 1); return '戸は開かなかった。三軒目で、ようやく男の身内だという女が出てきた。'; } },
      { label: '壁際を、足早に通り過ぎる', tag: 'leave', run: (s) => { adj(P(s), 'morale', -3); } },
    ],
  },
  {
    id: 'purse', title: '落とし物', category: 'daily',
    auto: { on: 'zone:street', once: false, cooldown: 6, chance: 0.3, when: (s) => s.sc.town.phase <= 2 },
    text: ['石畳の隙間に、革の小袋が落ちている。振ると、硬貨の音がした。'],
    choices: [
      { label: '懐に入れる', tag: 'yes', run: (s) => { const n = randInt(s, 3, 7); s.money += n; adj(P(s), 'morale', -1); return `${n}ソルド入っていた。誰の物かは、分からない。`; } },
      { label: '教会に届ける', tag: 'no', run: (s) => { adj(P(s), 'morale', 3); npc(s, 'priest').rel++; return '落とし主が現れなければ、貧しい者の粥になるだろう。'; } },
    ],
  },

  // ================= 通りの人々・拾い物 =================
  {
    id: 'folk', speaker: '町の人',
    text: (s) => say('町の人', pick(s, RUMORS[s.sc.town.phase])),
    choices: [{ label: '別れる', tag: 'leave' }],
  },
  {
    id: 'stranger', title: '病人', category: 'crisis',
    text: (s) => s.ctx === 'sick2'
      ? ['壁際に、男がうずくまっている。体を折って咳き込むたび、石畳に赤い飛沫が散る。', say('男', '「……み、水……」')]
      : ['戸口の前に、女が横たわっている。首に、黒ずんだ腫れ物。浅い息をしている。', say('女', '「……誰か……子どもが、中に……」')],
    choices: [
      { label: '水を飲ませる', ok: (s) => (flag(s, 'strangerDay_' + s.ctx) === s.day ? '今日はもう世話をした' : true), tag: 'help', run: (s) => {
        setFlag(s, 'strangerDay_' + s.ctx, s.day); adj(P(s), 'morale', 4); stat(s, 'helped');
        if (s.ctx === 'sick2') { expose(s, 'player', 0.2, 'droplet', '血を吐く病人に水を飲ませた'); return '頭を支えて水を含ませた。男は咳き込み、あなたの袖に血の混じった唾が飛んだ。'; }
        expose(s, 'player', 0.03, 'flea', '行き倒れの病人の世話');
        return '水を含ませると、女はかすかに唇を動かした。礼を言ったのだと思う。';
      } },
      { label: '離れた所から、祈りの言葉をかける', tag: 'pray', run: (s) => { adj(P(s), 'morale', 1); return '「主が、あなたと共におられますように」　それしか、言えなかった。'; } },
      { label: '立ち去る', tag: 'leave' },
    ],
  },
  {
    id: 'pickup', title: '見つけた物',
    text: (s) => {
      const k = s.spots.find((x) => x.id === s.ctx)?.kind;
      return k === 'wood' ? '軒下に、薪の束が置き去りにされている。' : k === 'coins' ? '石畳の隙間で、何かが光った。' : k === 'herbs' ? '壁際に、セージとローズマリーが茂っている。' : k === 'basket' ? '倒れた籠から、蕪と固いパンがこぼれている。' : '戸口の前に、布の包みが放り出されている。上等な毛布と、衣類のようだ。';
    },
    choices: (s) => {
      const sp = s.spots.find((x) => x.id === s.ctx);
      const take = (fn: (s: S) => string) => (s: S) => { if (sp) sp.taken = true; stat(s, 'found'); return fn(s); };
      if (!sp || sp.taken) return [leave];
      if (sp.kind === 'bundle') return [
        { label: '持ち帰る', hint: '暖かそうな毛布だ', tag: 'take', run: take((s) => { s.supplies += 1; const n = randInt(s, 0, 4); s.money += n; expose(s, 'player', 0.04 + 0.12 * s.sc.town.prev, 'flea', '拾った毛布と衣類'); exposeFamily(s, 0.03 + 0.08 * s.sc.town.prev, 'flea', '拾った毛布と衣類'); return `毛布を丸めて抱えた。${n ? `衣類の隠しに${n}ソルド入っていた。` : ''}（生活用品＋1）`; }) },
        { label: '触らずにおく', tag: 'leave', run: take(() => '病人の出た家の物かもしれない。触れずに通り過ぎた。') },
      ];
      return [
        { label: '拾う', tag: 'take', run: take((s) => {
          if (sp.kind === 'wood') { s.supplies += 1; return '薪を抱えた。（生活用品＋1）'; }
          if (sp.kind === 'coins') { const n = randInt(s, 2, 5); s.money += n; return `${n}ソルド拾った。`; }
          if (sp.kind === 'herbs') { s.remedies += 1; return '葉を摘んで、布に包んだ。（薬草＋1）'; }
          const n = randInt(s, 1, 2); s.food += n; return `まだ食べられる。布に包んで持ち帰ることにした。（食料＋${n}）`;
        }) },
        leave,
      ];
    },
  },
  {
    id: 'empty_house', title: '空き家', category: 'major',
    text: ['路地奥の家は、戸が開いたままだ。住んでいた一家は、先週、皆死んだと聞く。', '中には、手つかずの食料や衣類が残っているかもしれない。'],
    choices: [
      { label: '中を物色する', hint: '見つかれば咎められる', cost: { time: 2, stamina: 15 }, ok: (s) => (flag(s, 'lootDay') === s.day ? '今日はもう探した' : flag(s, 'lootCount') >= 3 ? 'もう何も残っていない' : true), key: '死者の出た空き家を物色した', tag: 'loot', run: (s) => {
        setFlag(s, 'lootDay', s.day); setFlag(s, 'lootCount', flag(s, 'lootCount') + 1); stat(s, 'looted');
        const f = randInt(s, 2, 4), m = randInt(s, 0, 6); s.food += f; s.money += m; adj(P(s), 'morale', -4);
        expose(s, 'player', 0.08 + 0.25 * s.sc.town.prev, 'flea', '空き家の物色');
        exposeFamily(s, 0.02 + 0.06 * s.sc.town.prev, 'flea', '空き家から持ち帰った袋');
        const out = ['寝床には、人の形にへこんだ藁がそのまま残っていた。目をそらして、棚を探った。', `豆の袋と塩漬けの肉を見つけた（食料＋${f}${m ? `、${m}ソルド` : ''}）。袋を持ち上げると、ノミが足首に跳ねた。`];
        if (s.sc.town.phase === 2 && chance(s, 0.2)) { const fine = Math.min(s.money, 8); s.money -= fine; out.push(`出たところを夜警に見つかった。${fine}ソルドを握らせて、見逃してもらった。`); }
        return out;
      } },
      leave,
    ],
  },
  {
    id: 'peddler', speaker: '行商人',
    text: [say('行商人', '「あんたか。あの時は世話になった。——売り物は少ないが、あんたになら、まともな値で分ける」')],
    choices: [
      { label: '品物を見る', tag: 'shop', run: () => ({ next: 'shop:peddler' }) },
      leave,
    ],
  },
];
void M;
