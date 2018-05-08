const cors = require('kcors'),
    serve = require('koa-static'),
    logger = require('koa-logger'),
    mount = require('koa-mount'),
    bodyParser = require('koa-bodyparser');

const path = require('path');

function ApplyMiddleware(app) {
    app.proxy = true;
    app.use(cors({credentials: false}));
    app.use(logger());
    app.use(bodyParser());
    app.use(mount(
        '/static',
        serve(path.resolve('static'))
    ));
}

module.exports = ApplyMiddleware