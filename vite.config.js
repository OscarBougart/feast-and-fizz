import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      base: '/',
      injectRegister: 'script',
      devOptions: {
        enabled: false
      },
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Feast & Fizz',
        short_name: 'FeastFizz',
        description: 'Food and cocktail app',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ],
      },
      server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              ['document', 'script', 'style', 'image', 'font'].includes(request.destination),
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
              },
            },
          },
        ],
      },
    })
  ]
});
