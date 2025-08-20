import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html',
      onwarn(warning, rollup) {
        if (warning.code === 'UNRESOLVED_IMPORT' || warning.code === 'PARSE_ERROR') {
          console.error('Build warning:', warning.message, 'File:', warning.loc?.file || 'unknown');
        }
        return true; // Keep going
      }
    }
  },
  server: {
    proxy: {
      '/api': 'toeic-backend.vercel.app' // Thay bằng URL backend thật
    }
  }
});
