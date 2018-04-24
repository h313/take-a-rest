const Router = require('koa-router');
const redis = require('../db/redis');
const moment = require('moment');

const router = new Router();

router.post('/register', async (ctx) => {
    await redis.set(req.body.subscription, moment());
    ctx.body = JSON.stringify({success: 1});
});

router.get('/vapidPublicKey', async (ctx) => {
    ctx.body = process.env.VAPID_PUBLIC_KEY;
});

module.exports = router;