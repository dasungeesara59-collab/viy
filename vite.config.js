import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for GitHub Pages deployment
  // URL: https://dasungeesara59-collab.github.io/prolok/
  base: '/prolok/',
  
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
  
  server: {
    port: 3000,
    open: true
  }
});
