import { useEffect, useState } from 'react';
import { audio } from '../audio';
import { scenario, useStore, type MenuTab } from '../store';
import { GameCanvas } from './GameCanvas';

const tap = (fn: () => void) => ({ onClick: () => { audio.start(); fn(); } });
// 画面が切り替わった直後のタップは無視する（前の画面のボタンを押した指が、次の画面の選択肢に当たらないように）
let shownAt = 0;
const fresh = () => performance.now() - shownAt < 280;

function tryLandscape() {
  if (!document.body.classList.contains('touch')) return;
  const el = document.documentElement as any;
  const req = el.requestFullscreen || el.webkitRequestFullscreen;
  try {
    const p = req && !document.fullscreenElement ? req.call(el) : null;
    const lock = () => { const so = screen.orientation as any; if (so?.lock) so.lock('landscape').catch(() => {}); };
    if (p?.then) p.then(lock).catch(() => {}); else lock();
  } catch { /* 非対応なら何もしない */ }
}

export function App() {
  const screen = useStore((s) => s.screen), scene = useStore((s) => s.scene), menu = useStore((s) => s.menu);
  return (
    <>
      <GameCanvas />
      {screen === 'title' && <Title />}
      {screen === 'play' && <Hud />}
      {screen === 'play' && scene && <SceneView />}
      {screen === 'play' && menu && <Menu />}
      {screen === 'result' && <Result />}
      <div className="rotate">画面を横向きにすると遊びやすくなります</div>
    </>
  );
}

// ---------------- タイトル ----------------
function Title() {
  const hasSave = useStore((s) => s.hasSave), newGame = useStore((s) => s.newGame), cont = useStore((s) => s.continueGame);
  const [seed, setSeed] = useState(() => new URLSearchParams(location.search).get('seed') ?? '');
  const [help, setHelp] = useState(false);
  if (help) return <div className="overlay"><div className="sheet"><h2>遊び方</h2><Help /><div className="row"><button className="btn" {...tap(() => setHelp(false))}>戻る</button></div></div></div>;
  return (
    <div className="title">
      <div className="titleBox">
        <p className="series">歴史サバイバル・シミュレーション</p>
        <h1>人類史ハードモード</h1>
        <p className="chapter">第1章　{scenario.title} — {scenario.subtitle}</p>
        <p className="lead">もし自分が、人類史上最も過酷な時代に生まれていたら。<br />家族とともに、{scenario.totalDays}日間を生き延びよ。</p>
        <div className="row">
          <button className="btn primary" {...tap(() => { tryLandscape(); newGame(seed); })}>はじめから</button>
          {hasSave && <button className="btn" {...tap(() => { tryLandscape(); cont(); })}>つづきから</button>}
          <button className="btn" {...tap(() => setHelp(true))}>遊び方</button>
        </div>
        <label className="seed">シード（空欄なら毎回ちがう展開）<input value={seed} onChange={(e) => setSeed(e.target.value)} placeholder="例：1348" inputMode="text" maxLength={24} /></label>
        <p className="fine">この作品はフィクションです。町と登場人物は架空ですが、14世紀イタリアの暮らしと黒死病の史実を下敷きにしています。病や死の描写を含みます。</p>
      </div>
    </div>
  );
}

function Help() {
  return (
    <div className="help">
      <h3>操作</h3>
      <ul>
        <li><b>スマホ</b>：画面左のスティックで移動、右側をドラッグして視点。人や物に近づくと右下にボタンが出る。右上の「≡」でメニュー。</li>
        <li><b>PC</b>：WASD で移動（Shiftで早足）、画面クリック後マウスで視点、E で話す・調べる、Esc でメニュー。</li>
      </ul>
      <h3>一日の流れ</h3>
      <ul>
        <li>朝は自宅から始まる。一日に動ける時間は<b>6刻</b>。歩くだけでは時間は減らず、働く・買う・看病するなどの行動で減る。</li>
        <li>工房で働いてお金を稼ぎ、市場で食料を買う。食料は毎晩、家族の人数ぶん減る。</li>
        <li>自宅の<b>寝床</b>を調べると、夕食をとって一日が終わる。</li>
        <li>14日目の夜を越えれば終わり。誰が生き残るかで結末が変わる。</li>
      </ul>
      <h3>覚えておくこと</h3>
      <ul>
        <li>あなたは当時の人間で、病の正体を知らない。噂、症状、家の様子から危険を推し量るしかない。</li>
        <li>家族は意見を持っている。困ったら、ルチアに話しかけて相談しよう。</li>
        <li>すべてを行う時間はない。何を守り、何を諦めるかを決めるのはあなただ。</li>
        <li>進行は自動で保存される。メニューの「設定」で音・視点の速さ・画質を変えられる。</li>
      </ul>
    </div>
  );
}

// ---------------- HUD ----------------
function Bar({ label, v, warn }: { label: string; v: number; warn?: boolean }) {
  return <div className={'bar' + (warn ? ' warn' : '')}><span>{label}</span><i><b style={{ width: `${Math.max(0, Math.min(100, v))}%` }} /></i></div>;
}

function Hud() {
  const s = useStore((x) => x.s)!, prompt = useStore((x) => x.prompt), toast = useStore((x) => x.toast), scene = useStore((x) => x.scene), menu = useStore((x) => x.menu);
  const interact = useStore((x) => x.interact), setMenu = useStore((x) => x.setMenu);
  const me = scenario.selfState(s), p = s.people.player;
  const days = Math.floor(s.food / Math.max(1, Object.values(s.people).filter((x) => x.alive).length));
  const quiet = !!scene || !!menu;
  const [who, text] = toast?.includes('｜') ? toast.split('｜') : ['', toast ?? ''];
  return (
    <div className={'hud' + (quiet ? ' quiet' : '')}>
      <div className="top">
        <div className="date">
          <b>{scenario.dateLabel(s)}</b>
          <span className="tod">{scenario.timeLabel(s)}</span>
          <span className="pips" aria-label={`残り${s.time}刻`}>{Array.from({ length: s.maxTime }, (_, i) => <i key={i} className={i < s.time ? 'on' : ''} />)}</span>
        </div>
        <div className="stats">
          <Bar label="体力" v={s.stamina} warn={s.stamina < 25} />
          <Bar label="満腹" v={p.satiety} warn={p.satiety < 35} />
          <span className={'chip ' + me.tone}>体調：{me.text}</span>
          <span className="chip">所持金 <b>{s.money}</b></span>
          <span className={'chip' + (days < 2 ? ' warn' : '')}>食料 <b>{s.food}</b><small>（{days}日ぶん）</small></span>
        </div>
        <button className="menuBtn" aria-label="メニュー" {...tap(() => setMenu('items'))}>≡</button>
      </div>
      {!quiet && <div className="hint">{scenario.hint(s)}</div>}
      {!quiet && toast && <div className="toast">{who && <b>{who}</b>}{text}</div>}
      {!quiet && prompt && (
        <button className="act" {...tap(interact)}>
          <b>{prompt.verb}</b><small>{prompt.label}</small>
        </button>
      )}
      {!quiet && <div className="cross" />}
    </div>
  );
}

// ---------------- 会話・イベント ----------------
function Line({ text }: { text: string }) {
  const i = text.indexOf('｜');
  if (i < 0) return <p className="narr">{text}</p>;
  return <p className="say"><b>{text.slice(0, i)}</b>{text.slice(i + 1)}</p>;
}

function Pager({ lines, title, category, children, onEnd }: { lines: string[]; title?: string; category?: string; children?: React.ReactNode; onEnd?: () => void }) {
  const [page, setPage] = useState(0);
  useEffect(() => { shownAt = performance.now(); }, []);
  const last = page >= lines.length - 1;
  const next = () => { if (fresh()) return; audio.start(); if (!last) { audio.page(); setPage(page + 1); } else onEnd?.(); };
  return (
    <div className="dialog" onClick={!last || onEnd ? next : undefined}>
      {title && <div className={'evTitle ' + (category ?? '')}>{title}</div>}
      <div className="text">
        {lines.slice(Math.max(0, page - 1), page + 1).map((l, k, arr) => <div key={page + '-' + k} className={k === arr.length - 1 ? 'cur' : 'old'}><Line text={l} /></div>)}
      </div>
      {last && children}
      {(!last || onEnd) && <div className="more">{last ? '閉じる ▸' : `つづき ▸　${page + 1}/${lines.length}`}</div>}
      {!last && lines.length > 3 && <button className="skip" onClick={(e) => { e.stopPropagation(); setPage(lines.length - 1); }}>送る ▸▸</button>}
    </div>
  );
}

function SceneView() {
  const scene = useStore((s) => s.scene)!, s = useStore((x) => x.s)!;
  const choose = useStore((x) => x.choose), closeLines = useStore((x) => x.closeLines), closeDay = useStore((x) => x.closeDay), closeIntro = useStore((x) => x.closeIntro), buy = useStore((x) => x.buy), closeShop = useStore((x) => x.closeShop);
  if (scene.kind === 'intro') return (
    <div className="overlay dark">
      <div className="card">
        <p className="small">第1章</p>
        <h2>{scenario.title}<small> — {scenario.subtitle}</small></h2>
        {scenario.intro.map((l, i) => <p key={i} className="introLine" style={{ animationDelay: `${0.3 + i * 0.7}s` }}>{l}</p>)}
        <button className="btn primary" {...tap(closeIntro)}>はじめる</button>
      </div>
    </div>
  );
  if (scene.kind === 'day') return (
    <div className="overlay dark">
      <div className="card">
        <p className="small">1348年 春</p>
        <h2>{scene.day}日目<small> / {scenario.totalDays}日</small></h2>
        {scene.report.length > 0 && <ul className="report">{scene.report.map((l, i) => <li key={i}>{l}</li>)}</ul>}
        <div className="mini">
          {scenario.familyRows(s).map((r) => <span key={r.id} className={'chip ' + r.tone}>{r.name}：{r.state}</span>)}
          <span className="chip">食料 {s.food}</span><span className="chip">所持金 {s.money}</span>
        </div>
        <button className="btn primary" {...tap(closeDay)}>朝を迎える</button>
      </div>
    </div>
  );
  if (scene.kind === 'shop') {
    const v = scene.view;
    return (
      <div className="dialogWrap">
        <div className="dialog shop">
          <div className="evTitle">{v.name}<span className="purse">所持金 {s.money}ソルド</span></div>
          {v.items.map((it) => {
            const own = it.key === 'food' ? s.food : it.key === 'supplies' ? s.supplies : s.remedies;
            return (
              <div className="item" key={it.key}>
                <div><b>{it.name}</b><small>　1{it.unit} {it.price}ソルド・残り{it.stock}・手持ち{own}</small><p>{it.desc}</p></div>
                <button className="btn primary" disabled={it.stock <= 0 || s.money < it.price} {...tap(() => buy(it.key))}>買う</button>
              </div>
            );
          })}
          {v.items.every((i) => i.stock <= 0) && <p className="narr">売り物は、もう何も残っていない。</p>}
          <p className="shopNote">{scene.msg || v.note}</p>
          <div className="choices one"><button className="choice" {...tap(closeShop)}><b>買い物を終える</b></button></div>
        </div>
      </div>
    );
  }
  if (scene.kind === 'lines') return <div className="dialogWrap"><Pager key={scene.lines.join('|').slice(0, 60) + s.rng} lines={scene.lines} title={scene.title} onEnd={closeLines} /></div>;
  const v = scene.view;
  return (
    <div className="dialogWrap">
      <Pager key={v.id + s.rng} lines={v.lines} title={v.title ?? v.speaker} category={v.category}>
        <div className={'choices' + (v.choices.length === 1 ? ' one' : '')}>
          {v.choices.map((c) => (
            <button key={c.idx} className="choice" disabled={!!c.disabled} onClick={(e) => { e.stopPropagation(); if (fresh()) return; audio.start(); choose(c.idx); }}>
              <b>{c.label}</b>
              {(c.disabled || c.hint) && <small>{c.disabled ?? c.hint}</small>}
            </button>
          ))}
        </div>
      </Pager>
    </div>
  );
}

// ---------------- メニュー ----------------
const TABS: [MenuTab, string][] = [['items', '持ち物'], ['family', '家族'], ['log', '記録'], ['settings', '設定'], ['help', '遊び方']];

function Menu() {
  const tab = useStore((s) => s.menu)!, s = useStore((x) => x.s)!, setMenu = useStore((x) => x.setMenu), toTitle = useStore((x) => x.toTitle);
  const settings = useStore((x) => x.settings), set = useStore((x) => x.setSettings);
  const p = s.people.player, me = scenario.selfState(s);
  return (
    <div className="overlay">
      <div className="sheet menu">
        <div className="tabs">
          {TABS.map(([k, label]) => <button key={k} className={k === tab ? 'on' : ''} {...tap(() => setMenu(k))}>{label}</button>)}
          <button className="close" {...tap(() => setMenu(null))}>閉じる ✕</button>
        </div>
        <div className="body">
          {tab === 'items' && <table className="items"><tbody>{scenario.items(s).map((it) => <tr key={it.name}><th>{it.name}</th><td className="num">{it.count}</td><td>{it.desc}</td></tr>)}</tbody></table>}
          {tab === 'family' && (
            <div className="fam">
              <div className="person"><h3>あなた<span className={'chip ' + me.tone}>{me.text}</span></h3><Bar label="体力" v={s.stamina} /><Bar label="健康" v={p.health} warn={p.health < 40} /><Bar label="満腹" v={p.satiety} warn={p.satiety < 35} /><Bar label="気力" v={p.morale} warn={p.morale < 25} /><Bar label="疲労" v={s.fatigue} warn={s.fatigue >= 50} /></div>
              {scenario.familyRows(s).map((r) => (
                <div className={'person' + (r.alive ? '' : ' gone')} key={r.id}>
                  <h3>{r.name}<span className={'chip ' + r.tone}>{r.state}</span></h3>
                  {r.alive ? <><Bar label="健康" v={r.health} warn={r.health < 40} /><Bar label="満腹" v={r.satiety} warn={r.satiety < 35} /><Bar label="気力" v={r.morale} warn={r.morale < 25} /><Bar label="絆" v={r.bond} warn={r.bond < 30} /></> : null}
                  {r.note && <p className="small">{r.note}</p>}
                </div>
              ))}
            </div>
          )}
          {tab === 'log' && (s.journal.length ? <ul className="log">{[...s.journal].reverse().map((j, i) => <li key={i} className={j.key ? 'key' : ''}><span>{j.day}日目</span>{j.text}</li>)}</ul> : <p className="narr">まだ記すべきことは起きていない。大きな選択や出来事が、ここに残る。</p>)}
          {tab === 'settings' && (
            <div className="settings">
              <label><span>音楽</span><button className={'toggle' + (settings.bgm ? ' on' : '')} {...tap(() => set({ bgm: !settings.bgm }))}>{settings.bgm ? 'オン' : 'オフ'}</button></label>
              <label><span>効果音</span><button className={'toggle' + (settings.se ? ' on' : '')} {...tap(() => set({ se: !settings.se }))}>{settings.se ? 'オン' : 'オフ'}</button></label>
              <label><span>視点の速さ</span><input type="range" min={0.4} max={2.2} step={0.1} value={settings.sens} onChange={(e) => set({ sens: Number(e.target.value) })} /><em>{settings.sens.toFixed(1)}</em></label>
              <label><span>画質</span><span className="seg">{(['auto', 'low', 'mid', 'high'] as const).map((q) => <button key={q} className={settings.quality === q ? 'on' : ''} {...tap(() => set({ quality: q }))}>{{ auto: '自動', low: '軽量', mid: '標準', high: '高' }[q]}</button>)}</span></label>
              <p className="small">シード：{s.seed}　／　進行は自動で保存されます。</p>
              <div className="row"><button className="btn" {...tap(toTitle)}>タイトルへ戻る</button></div>
            </div>
          )}
          {tab === 'help' && <Help />}
        </div>
      </div>
    </div>
  );
}

// ---------------- リザルト ----------------
function Result() {
  const r = useStore((s) => s.result)!, newGame = useStore((s) => s.newGame), toTitle = useStore((s) => s.toTitle);
  useEffect(() => { document.querySelector('.resultSheet')?.scrollTo(0, 0); }, []);
  return (
    <div className="overlay dark">
      <div className="sheet resultSheet">
        <p className="small">結末 {r.ending.code}</p>
        <h2 className="endTitle">{r.ending.title}</h2>
        <div className="story">{r.ending.story.map((l, i) => <p key={i}>{l}</p>)}</div>
        <div className="cols">
          <section>
            <h3>記録</h3>
            <table className="items"><tbody>
              {r.rows.map((x) => <tr key={x.label}><th>{x.label}</th><td>{x.value}</td></tr>)}
              {r.family.map((f) => <tr key={f.name}><th>{f.name}</th><td className={f.alive ? '' : 'bad'}>{f.fate}</td></tr>)}
              <tr><th>最も危険だった出来事</th><td>{r.danger}</td></tr>
            </tbody></table>
          </section>
          <section>
            <h3>主な選択と出来事</h3>
            {r.choices.length ? <ul className="log">{r.choices.map((c, i) => <li key={i}>{c}</li>)}</ul> : <p className="small">大きな選択はなかった。</p>}
          </section>
        </div>
        <section><h3>振り返り</h3><ul className="reflect">{r.reflections.map((c, i) => <li key={i}>{c}</li>)}</ul></section>
        <section><h3>歴史の中の黒死病</h3><ul className="history">{r.history.map((h, i) => <li key={i}><span className={'tag ' + (h.tag === '史実' ? 'fact' : h.tag === '創作' ? 'fic' : 'est')}>{h.tag}</span>{h.text}</li>)}</ul></section>
        <p className="question">あのとき違う選択をしていたら、家族を救えたのだろうか。</p>
        <div className="row">
          <button className="btn primary" {...tap(() => newGame())}>もう一度（新しい展開）</button>
          <button className="btn" {...tap(() => newGame(r.seed))}>同じシードでやり直す</button>
          <button className="btn" {...tap(toTitle)}>タイトルへ</button>
        </div>
        <p className="small">シード：{r.seed}</p>
      </div>
    </div>
  );
}
