// 3D画面と操作用の領域。エンジンを作り、ストアの変化を3Dへ伝える。
import { useEffect, useRef } from 'react';
import { audio } from '../audio';
import { scenario, useStore } from '../store';
import { Game3D } from '../three/engine';

export function GameCanvas() {
  const canvas = useRef<HTMLCanvasElement>(null), stickZone = useRef<HTMLDivElement>(null), stickBase = useRef<HTMLDivElement>(null), stickKnob = useRef<HTMLDivElement>(null), lookZone = useRef<HTMLDivElement>(null);
  const engine = useRef<Game3D | null>(null);
  const s = useStore((x) => x.s), screen = useStore((x) => x.screen), scene = useStore((x) => x.scene), menu = useStore((x) => x.menu), settings = useStore((x) => x.settings);

  useEffect(() => {
    const st = useStore.getState;
    const e = new Game3D(
      { canvas: canvas.current!, stickZone: stickZone.current!, stickBase: stickBase.current!, stickKnob: stickKnob.current!, lookZone: lookZone.current! },
      scenario,
      {
        onPrompt: (p) => st().setPrompt(p),
        onZone: (z) => st().enterZone(z),
        onAction: () => st().interact(),
        onMenu: () => { const x = st(); x.setMenu(x.menu ? null : 'items'); },
        onStep: () => audio.step(),
      },
    );
    engine.current = e;
    st().setEngine(e);
    e.setView(scenario.worldView(scenario.newGame('title')));
    (window as any).__game = { engine: e, store: useStore, scenario };
    return () => { e.dispose(); st().setEngine(null); };
  }, []);

  useEffect(() => {
    if (!s || !engine.current) return;
    const v = scenario.worldView(s);
    engine.current.setView(v);
    audio.mood(v.bustle, v.phase);
  }, [s]);
  useEffect(() => { engine.current?.setMode(screen === 'play' ? 'play' : 'title'); }, [screen]);
  useEffect(() => { engine.current?.setBlocked(screen !== 'play' || !!scene || !!menu); }, [screen, scene, menu]);
  useEffect(() => {
    const e = engine.current; if (!e) return;
    e.setSensitivity(settings.sens);
    e.setQuality(settings.quality === 'auto' ? (document.body.classList.contains('touch') ? 'mid' : 'high') : settings.quality);
    audio.setBgm(settings.bgm); audio.setSe(settings.se);
  }, [settings]);

  const playing = screen === 'play';
  return (
    <>
      <canvas id="view" ref={canvas} />
      <div id="lookZone" ref={lookZone} style={{ display: playing ? 'block' : 'none' }} />
      <div id="stickZone" ref={stickZone} style={{ display: playing ? 'block' : 'none' }}>
        <div id="stickBase" ref={stickBase}><div id="stickKnob" ref={stickKnob} /></div>
      </div>
    </>
  );
}
