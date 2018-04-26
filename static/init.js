function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

navigator.serviceWorker.register('serviceworker.js');

navigator.serviceWorker.ready
    .then(function(registration) {
        return registration.pushManager.getSubscription()
            .then(async function(subscription) {
                if (subscription) {
                    return subscription;
                }

                const response = await fetch('./api/vapidPublicKey');
                const vapidPublicKey = await response.text();

                const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

                return registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey
                });
            });
    })
    .then(function(subscription) {
        fetch('./api/register', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                subscription: subscription
            }),
        });

        document.getElementById('enableNotify').onclick = function() {
            fetch('./api/testNotify', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    subscription: subscription
                }),
            });
        };
    });
