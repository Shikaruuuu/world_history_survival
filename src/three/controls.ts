// 入力：スマホは左のスティック＋右側ドラッグ、PCは WASD＋マウス。
// 「〇〇にテロリスト」と同じ操作感（左側のどこを触ってもスティックになる／視点とボタンが干渉しない）にしてある。

export interface ControlEls { canvas: HTMLCanvasElement; stickZone: HTMLElement; stickBase: HTMLElement; stickKnob: HTMLElement; lookZone: HTMLElement }

export class Controls {
  moveX = 0; moveZ = 0; run = false;
  yawDelta = 0; pitchDelta = 0;
  sensitivity = 1;
  enabled = true;
  onAction: () => void = () => {};
  onMenu: () => void = () => {};
  private keys = new Set<string>();
  private stickId: number | null = null;
  private stick = { x: 0, z: 0 };
  private lookId: number | null = null;
  private lookAt = { x: 0, y: 0 };
  private mouseDrag = false;
  private off: (() => void)[] = [];

  constructor(private els: ControlEls) {
    const on = <K extends keyof HTMLElementEventMap>(el: EventTarget, ev: K | string, fn: (e: any) => void, opt?: AddEventListenerOptions) => { el.addEventListener(ev, fn as EventListener, opt); this.off.push(() => el.removeEventListener(ev, fn as EventListener, opt)); };
    const { canvas, stickZone, stickBase, stickKnob, lookZone } = els;
    const R = 46;
    const stickTo = (e: PointerEvent) => {
      const r = stickBase.getBoundingClientRect();
      let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy);
      if (d > R) { dx *= R / d; dy *= R / d; }
      this.stick.x = dx / R; this.stick.z = dy / R;
      stickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    };
    on(stickZone, 'pointerdown', (e: PointerEvent) => {
      if (e.pointerType === 'mouse') { this.mouseDown(); return; }
      if (this.stickId !== null) return;
      e.preventDefault(); this.stickId = e.pointerId;
      try { stickZone.setPointerCapture(e.pointerId); } catch { /* 取れなくても動く */ }
      stickBase.classList.add('on'); stickTo(e);
    });
    on(stickZone, 'pointermove', (e: PointerEvent) => { if (e.pointerId === this.stickId) stickTo(e); });
    const endStick = (e: PointerEvent) => {
      if (e.pointerId !== this.stickId) return;
      this.stickId = null; this.stick.x = this.stick.z = 0;
      stickBase.classList.remove('on'); stickKnob.style.transform = 'translate(-50%, -50%)';
    };
    on(stickZone, 'pointerup', endStick); on(stickZone, 'pointercancel', endStick);

    // 視点：タッチは右側ドラッグ
    on(lookZone, 'pointerdown', (e: PointerEvent) => {
      if (e.pointerType === 'mouse') { this.mouseDown(); return; }
      if (this.lookId !== null) return;
      e.preventDefault(); this.lookId = e.pointerId; this.lookAt.x = e.clientX; this.lookAt.y = e.clientY;
      try { lookZone.setPointerCapture(e.pointerId); } catch { /* 取れなくても動く */ }
    });
    on(lookZone, 'pointermove', (e: PointerEvent) => {
      if (e.pointerId !== this.lookId) return;
      this.yawDelta -= (e.clientX - this.lookAt.x) * 0.006 * this.sensitivity;
      this.pitchDelta -= (e.clientY - this.lookAt.y) * 0.006 * this.sensitivity;
      this.lookAt.x = e.clientX; this.lookAt.y = e.clientY;
    });
    const endLook = (e: PointerEvent) => { if (e.pointerId === this.lookId) this.lookId = null; };
    on(lookZone, 'pointerup', endLook); on(lookZone, 'pointercancel', endLook);

    // マウス：クリックでポインタロック。使えない環境ではドラッグで回す
    on(window, 'pointerup', (e: PointerEvent) => { if (e.pointerType === 'mouse') this.mouseDrag = false; });
    on(window, 'mousemove', (e: MouseEvent) => {
      if (!this.enabled) return;
      if (document.pointerLockElement === canvas || this.mouseDrag) {
        this.yawDelta -= e.movementX * 0.0024 * this.sensitivity;
        this.pitchDelta -= e.movementY * 0.0024 * this.sensitivity;
      }
    });
    on(window, 'keydown', (e: KeyboardEvent) => {
      if (e.repeat) return;
      const k = e.key.toLowerCase();
      this.keys.add(k);
      if (k === 'e' || k === 'enter' || k === ' ') { this.onAction(); if (k === ' ') e.preventDefault(); }
      if (k === 'escape' || k === 'm' || k === 'tab') { this.onMenu(); e.preventDefault(); }
    });
    on(window, 'keyup', (e: KeyboardEvent) => this.keys.delete(e.key.toLowerCase()));
    on(window, 'blur', () => this.keys.clear());

    // ブラウザ側の拡大・スクロール・長押しメニューを止める
    for (const ev of ['gesturestart', 'gesturechange', 'gestureend']) on(document, ev, (e: Event) => e.preventDefault(), { passive: false });
    on(document, 'touchmove', (e: TouchEvent) => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
    for (const el of [stickZone, lookZone]) on(el, 'touchstart', (e: TouchEvent) => e.preventDefault(), { passive: false });
    on(document, 'contextmenu', (e: Event) => e.preventDefault());
  }

  private mouseDown() {
    if (!this.enabled) return;
    this.mouseDrag = true;
    const c = this.els.canvas;
    if (c.requestPointerLock && document.pointerLockElement !== c) {
      try { const r = c.requestPointerLock() as unknown as Promise<void> | undefined; if (r && r.catch) r.catch(() => {}); } catch { /* 使えなければドラッグで操作 */ }
    }
  }

  /** いまの移動入力（-1〜1）を返す */
  read() {
    const k = this.keys;
    let x = (k.has('d') || k.has('arrowright') ? 1 : 0) - (k.has('a') || k.has('arrowleft') ? 1 : 0);
    let z = (k.has('s') || k.has('arrowdown') ? 1 : 0) - (k.has('w') || k.has('arrowup') ? 1 : 0);
    if (x || z) { const m = Math.hypot(x, z); x /= m; z /= m; }
    if (this.stickId !== null) { x = this.stick.x; z = this.stick.z; }
    this.moveX = x; this.moveZ = z; this.run = k.has('shift');
  }
  release() {
    this.keys.clear(); this.mouseDrag = false; this.yawDelta = this.pitchDelta = 0;
    if (document.pointerLockElement) document.exitPointerLock?.();
  }
  dispose() { this.off.forEach((f) => f()); this.off = []; }
}
