const CACHE_NAME = 'billiard-timer-v4'; // Version incrémentée pour forcer la mise à jour
const ASSETS_TO_CACHE = [
  '/',
  'index.html',
  'maintenance.html', // Ajout de la page de maintenance au cache
  'manifest.json',
  'styles.css',
  'app.js',
  'img/icon/android-chrome-192x192.png',
  'img/icon/android-chrome-512x512.png',
  'img/icon/apple-touch-icon.png',
  'img/icon/favicon-16x16.png',
  'img/icon/favicon-32x32.png', // Correction du chemin
  'img/icon/favicon.ico',
  'https://cdnjs.cloudflare.com/ajax/libs/tone/14.7.77/Tone.js',
  'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Poppins:wght@600&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Mise en cache des ressources pour la v4');
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
  // On ne gère que les requêtes GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Si la ressource est en cache, on la retourne
        if (cachedResponse) {
          return cachedResponse;
        }

        // Sinon, on essaie de la récupérer sur le réseau
        return fetch(event.request).catch(() => {
          // Si la récupération échoue (ex: pas de réseau) et que c'est une requête de navigation
          if (event.request.mode === 'navigate') {
            return caches.match('maintenance.html');
          }
        });
      })
  );
});