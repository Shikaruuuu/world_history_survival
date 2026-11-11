import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// base を相対にしておくと、GitHub Pages のサブディレクトリでもそのまま動く
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { target: 'es2020', chunkSizeWarningLimit: 900 },
  test: { environment: 'node', include: ['tests/**/*.test.ts'] },
});
