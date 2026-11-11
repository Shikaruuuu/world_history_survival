// 画像ファイルを使わず、キャンバスで質感を作る。後から本物のテクスチャに差し替えるときはここを変える。
import * as THREE from 'three';

function tex(size: number, draw: (g: CanvasRenderingContext2D, n: number) => void): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d')!;
  draw(g, size);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
// 見た目用の乱数（ゲームの乱数とは別。毎回同じ模様になる）
let seed = 7;
const r = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
const speckle = (g: CanvasRenderingContext2D, n: number, count: number, a: number) => {
  for (let i = 0; i < count; i++) { const v = r() < 0.5 ? 0 : 255; g.fillStyle = `rgba(${v},${v},${v},${r() * a})`; g.fillRect(r() * n, r() * n, 1 + r() * 3, 1 + r() * 3); }
};

export function makeTextures() {
  const plaster = tex(128, (g, n) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, n, n);
    speckle(g, n, 900, 0.07);
    for (let i = 0; i < 5; i++) { g.strokeStyle = `rgba(60,40,20,${0.05 + r() * 0.06})`; g.beginPath(); const x = r() * n, y = r() * n; g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 40, y + r() * 50); g.stroke(); }
    const gr = g.createLinearGradient(0, 0, 0, n); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(60,40,20,0.12)'); g.fillStyle = gr; g.fillRect(0, 0, n, n);
  });
  const stone = tex(256, (g, n) => {
    g.fillStyle = '#8f887a'; g.fillRect(0, 0, n, n);
    const rows = 6, h = n / rows;
    for (let y = 0; y < rows; y++) {
      let x = y % 2 ? -h * 0.6 : 0;
      while (x < n) { const w = h * (1.1 + r() * 1.3); const v = 150 + r() * 60; g.fillStyle = `rgb(${v},${v - 6},${v - 18})`; g.fillRect(x + 2, y * h + 2, w - 3, h - 3); x += w; }
    }
    speckle(g, n, 2500, 0.1);
  });
  const cobble = tex(256, (g, n) => {
    g.fillStyle = '#5d564b'; g.fillRect(0, 0, n, n);
    const k = 8, c = n / k;
    for (let y = 0; y < k; y++) for (let x = 0; x < k; x++) {
      const v = 120 + r() * 55; g.fillStyle = `rgb(${v},${v - 5},${v - 16})`;
      const ox = (y % 2 ? c / 2 : 0) + x * c + r() * 3, oy = y * c + r() * 3;
      g.beginPath(); g.ellipse((ox + c / 2) % n, oy + c / 2, c * 0.43, c * 0.4, 0, 0, 7); g.fill();
    }
    speckle(g, n, 1500, 0.08);
  });
  const dirt = tex(128, (g, n) => { g.fillStyle = '#7d6a4f'; g.fillRect(0, 0, n, n); speckle(g, n, 2600, 0.12); });
  const grass = tex(128, (g, n) => { g.fillStyle = '#6f7a45'; g.fillRect(0, 0, n, n); speckle(g, n, 2600, 0.1); });
  const wood = tex(128, (g, n) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, n, n);
    for (let i = 0; i < 4; i++) { g.fillStyle = `rgba(0,0,0,${0.04 + r() * 0.1})`; g.fillRect(i * n / 4, 0, n / 4 - 2, n); g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(i * n / 4 + n / 4 - 2, 0, 2, n); }
    for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(0,0,0,${r() * 0.08})`; g.fillRect(r() * n, 0, 1, n); }
  });
  const roof = tex(128, (g, n) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, n, n);
    const rows = 8, h = n / rows;
    for (let y = 0; y < rows; y++) for (let x = 0; x < 8; x++) {
      const v = 190 + r() * 65; g.fillStyle = `rgb(${v},${v},${v})`;
      g.fillRect(x * n / 8 + (y % 2 ? n / 16 : 0), y * h, n / 8 - 2, h - 1);
      g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(x * n / 8 + (y % 2 ? n / 16 : 0), y * h + h - 3, n / 8 - 2, 3);
    }
  });
  return { plaster, stone, cobble, dirt, grass, wood, roof };
}
export type Textures = ReturnType<typeof makeTextures>;
