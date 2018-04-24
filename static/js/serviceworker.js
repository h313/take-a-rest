self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification('Take a rest!', {
            body: 'Drink some water, or maybe go outside?',
            lang: 'en',
            vibrate: [50],
        })
    );
});
