// Service Worker for basic PWA installability
const CACHE_NAME = 'obyo-trade-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass through without caching everything
  event.respondWith(fetch(event.request));
});
