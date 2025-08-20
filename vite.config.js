import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.js', '**/*.jsx'], // Đảm bảo bao gồm file .js và .jsx
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html',
      onwarn(warning, rollup) {
        if (warning.code === 'UNRESOLVED_IMPORT' || warning.code === 'PARSE_ERROR') {
          console.error('Build warning:', warning.message, 'File:', warning.loc?.file || 'unknown');
        }
        return true;
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js', // Giữ hash để debug
        assetFileNames: 'assets/[name]-[hash][extname]' // Đảm bảo asset
      }
    }
  },
  server: {
    proxy: {
      '/api': 'https://toeic-backend.vercel.app'
    }
  }
});
