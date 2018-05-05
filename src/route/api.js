const Router = require('koa-router');
const redis = require('../db/redis');
const moment = require('moment');
const notify = require('../notification');

const router = new Router();

router.post('/register', async (ctx) => {
    console.log(ctx.request.body);
    await redis.set(JSON.stringify(ctx.request.body['subscription']), moment().unix());
    ctx.body = JSON.stringify({success: 1});
});

router.post('/testNotify', async (ctx) => {
    notify(ctx.request.body['subscription']);
    ctx.body = JSON.stringify({success: 1});
});

router.get('/vapidPublicKey', async (ctx) => {
    ctx.body = process.env.VAPID_PUBLIC_KEY;
});

module.exports = router;