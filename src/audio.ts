// 効果音と音楽。音声ファイルを使わず WebAudio で合成する。
class GameAudio {
  private ctx: AudioContext | null = null;
  private bgm!: GainNode; private se!: GainNode; private crowd!: GainNode; private wind!: GainNode;
  private bgmOn = true; private seOn = true;
  private phase = 0; private timer = 0;

  /** 最初のタップで呼ぶ（ブラウザは操作なしに音を出せない） */
  start() {
    if (this.ctx) { if (this.ctx.state === 'suspended') void this.ctx.resume(); return; }
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.bgm = ctx.createGain(); this.bgm.gain.value = this.bgmOn ? 0.5 : 0; this.bgm.connect(ctx.destination);
    this.se = ctx.createGain(); this.se.gain.value = this.seOn ? 0.6 : 0; this.se.connect(ctx.destination);
    // 町のざわめき・風（雑音を帯域で絞る）
    const buf = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate), d = buf.getChannelData(0);
    let last = 0; for (let i = 0; i < d.length; i++) { last = (last + (Math.random() * 2 - 1) * 0.08) * 0.985; d[i] = last * 3; }
    const noise = (freq: number, q: number) => { const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q; const g = ctx.createGain(); g.gain.value = 0; s.connect(f); f.connect(g); g.connect(this.se); s.start(); return g; };
    this.crowd = noise(520, 0.7); this.wind = noise(180, 0.5);
    // 低い持続音
    for (const [f, v] of [[73.4, 0.05], [110, 0.03], [146.8, 0.018]]) { const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f; const g = ctx.createGain(); g.gain.value = v; o.connect(g); g.connect(this.bgm); o.start(); }
    this.timer = window.setInterval(() => this.pluck(), 2600);
    this.mood(1, 0);
  }
  private tone(freq: number, dur: number, vol: number, type: OscillatorType, out: GainNode, when = 0) {
    const ctx = this.ctx; if (!ctx) return;
    const t = ctx.currentTime + when, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(out); o.start(t); o.stop(t + dur + 0.05);
  }
  // リュートのような爪弾き。町が荒れるほど、音は低く、間遠になる
  private pluck() {
    if (!this.ctx || !this.bgmOn || Math.random() < 0.15 + this.phase * 0.2) return;
    const scale = [146.8, 164.8, 174.6, 196, 220, 246.9, 261.6, 293.7];
    const base = scale[Math.floor(Math.random() * scale.length)] * (this.phase >= 2 ? 0.5 : 1);
    this.tone(base, 2.2, 0.07, 'triangle', this.bgm);
    if (Math.random() < 0.5) this.tone(base * 1.5, 1.8, 0.04, 'triangle', this.bgm, 0.35);
  }
  mood(bustle: number, phase: number) {
    this.phase = phase;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.crowd.gain.linearRampToValueAtTime(0.22 * bustle, t + 2);
    this.wind.gain.linearRampToValueAtTime(0.05 + 0.12 * (1 - bustle), t + 2);
  }
  setBgm(on: boolean) { this.bgmOn = on; if (this.ctx) this.bgm.gain.value = on ? 0.5 : 0; }
  setSe(on: boolean) { this.seOn = on; if (this.ctx) this.se.gain.value = on ? 0.6 : 0; }
  step() { if (this.ctx) this.tone(70 + Math.random() * 25, 0.07, 0.06, 'triangle', this.se); }
  click() { this.tone(660, 0.06, 0.05, 'sine', this.se); }
  page() { this.tone(420, 0.05, 0.035, 'sine', this.se); }
  coin() { this.tone(1320, 0.12, 0.05, 'sine', this.se); this.tone(1760, 0.18, 0.04, 'sine', this.se, 0.06); }
  bell() { for (const [m, v] of [[1, 0.16], [2.01, 0.08], [2.76, 0.05], [5.4, 0.02]]) this.tone(196 * m, 3.5, v, 'sine', this.se); }
}
export const audio = new GameAudio();
