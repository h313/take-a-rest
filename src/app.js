const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const router = require('./route');

const notify = require('./notification');
const redis = require('./db/redis');
const moment = require('moment');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(require('path').join('static')));

setInterval(function() {
    const keys = redis.keys('*');
    for (i = 0; i < keys.length; i++) {
        const time = redis.get(JSON.stringify(keys[i]));
        if (moment.duration(now.diff(time)).asHours() >= 2) {
            redis.set(JSON.stringify(keys[i]), moment());
            notify(keys[i]);
        }
    }
}, 60000);

app.listen(3000);
