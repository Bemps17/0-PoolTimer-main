const CACHE_NAME = 'billiard-timer-v3'; // La version a été incrémentée
const ASSETS_TO_CACHE = [
  '/',
  'index.html',
  'manifest.json',
  'styles.css',
  'app.js',
  'img/icon/android-chrome-192x192.png',
  'img/icon/android-chrome-512x512.png',
  'img/icon/apple-touch-icon.png',
  'img/icon/favicon-16x16.png',
  'img.icon/favicon-32x32.png',
  'img/icon/favicon.ico',
  'https://cdnjs.cloudflare.com/ajax/libs/tone/14.7.77/Tone.js',
  'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Poppins:wght@600&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Mise en cache des ressources pour la v3');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});