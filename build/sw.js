
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Seoul Drinker';
  const options = {
    body: 'Yay it works.',
    icon: '../static/img/icons/logo_128x128.png',
    badge: '../static/img/icons/favicon.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});


self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(clients.openWindow('https://jicjjang.github.io/blog'));
});


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mysite-static-v3').then(function(cache) {
      return cache.addAll([
        '/static/img/logo.1d2aa89.png',
      ]);
    }).catch(function (e) {
      console.log(e);
    })
  );
});
