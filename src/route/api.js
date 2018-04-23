const Router = require('koa-router');
const notify = require('../notification');
const redis = require('../db/redis');
const moment = require('moment');

const router = new Router();

router.get('/key', async (ctx) => {
    ctx.body = process.env.VAPID_PUBLIC_KEY;
});

router.post('/register', async (ctx) => {
    await redis.set(ctx.request.body, moment());
    ctx.status = 201;
});

module.exports = router;