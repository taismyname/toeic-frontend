import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html',
      onwarn(warning, rollup) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          console.error('Unresolved import:', warning.importer, warning.source);
        }
        return true; // Keep going
      }
    }
  },
  server: {
    proxy: {
      '/api': 'https://toeic-backend.vercel.app' // Thay bằng URL backend của mày
    }
  }
});
