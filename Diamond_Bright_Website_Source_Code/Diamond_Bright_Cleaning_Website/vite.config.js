import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { allowedHosts: ['terminal.local'] },
  preview: { allowedHosts: ['terminal.local'] },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        services: resolve(process.cwd(), 'services/index.html'),
        about: resolve(process.cwd(), 'about/index.html'),
        videos: resolve(process.cwd(), 'videos/index.html'),
        contact: resolve(process.cwd(), 'contact/index.html'),
      },
    },
  },
});
