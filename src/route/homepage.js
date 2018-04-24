const Router = require('koa-router');

const router = new Router();

router.get('/test', async (ctx) => {
    ctx.body = 'working';
});

router.get('/vapidPublicKey', async (ctx) => {
    ctx.body = process.env.VAPID_PUBLIC_KEY;
});

module.exports = router;