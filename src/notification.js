const webPush = require('web-push');

webPush.setVapidDetails(
    'https://127.0.0.1/',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);

const notify = function(subscription) {
    console.log(subscription);
    webPush.sendNotification(subscription, 'take a rest', {TTL: 0})
        .catch(function(error) {
            console.log(error);
        });
};

module.exports = notify;
