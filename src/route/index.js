const Router = require('koa-router');
const homepageRouter = require('./homepage');
const apiRouter = require('./api');

const router = new Router();

router
    .use('/home', homepageRouter.routes(), homepageRouter.allowedMethods())
    .use('/api', apiRouter.routes(), apiRouter.allowedMethods());

module.exports = router;
