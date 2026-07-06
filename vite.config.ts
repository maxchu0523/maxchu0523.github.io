import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// User GitHub Pages site (maxchu0523.github.io) is served at the domain root,
// so no base subpath is needed.
export default defineConfig({
  base: '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
