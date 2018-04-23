const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./route');
const webPush = require('web-push');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
