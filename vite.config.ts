import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  // server: {
  //   allowedHosts: ['.ngrok-free.app'],
  // },
  plugins: [
    svgr(),
    react(),
    VitePWA({
      manifest: {
        name: 'Pest ID',
        display: 'standalone',
        icons: [
          {
            src: '/logo/180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/logo/180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: '/screenshots/mobile.png',
            sizes: '990x1454',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Mobile view of the app',
          },
          {
            src: '/screenshots/desktop.png',
            sizes: '3024x1648',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Desktop view of the app',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
