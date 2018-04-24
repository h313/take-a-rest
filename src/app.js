const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./route');

const notify = require('./notification');
const redis = require('./db/redis');
const moment = require('moment');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

setInterval(function() {
    const keys = redis.keys();
    keys.forEach(function(element) {
        const time = redis.get(element);
        if(moment.duration(now.diff(time)).asHours() >= 2) {
            notify(element);
        }
    });
}, 300000);

app.listen(3000);
