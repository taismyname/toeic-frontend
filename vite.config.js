import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html' // Xác nhận entry point
    }
  },
  server: {
    proxy: {
      '/api': 'https://toeic-backend.vercel.app' // Thay bằng URL backend của mày
    }
  }
});
