const webPush = require('web-push');

webPush.setVapidDetails(
    'https://serviceworke.rs/',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);

const notify = function(subscription) {
    webPush.sendNotification(subscription, 'take a rest', {TTL: 0})
        .then(function() {
            res.sendStatus(201);
        })
        .catch(function(error) {
            console.log(error);
            res.sendStatus(500);
        });
};

module.exports = notify;
