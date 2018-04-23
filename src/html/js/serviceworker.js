self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: 'Take a rest!',
            lang: 'en',
            vibrate: [50],
        })
    );
});
