self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/icon-192x192.png',
        '/icon-512x512.png',
        '/manifest.json',
        '/styles.css',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
