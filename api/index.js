const glob = require('glob');
const Router = require('koa-router');
const compose = require('koa-compose');

function initApi(app) {
    return new Promise((resolve, reject) => {
        glob(`${__dirname}/*`, { ignore: '**/index.*s' }, (err, result) => {
            if (err) {
                reject(err)
            }
            result.forEach(item => {
                const routes = require(`${item}/router`);
                const instance = new Router();
                routes.forEach(config => {
                    const { method, route, handlers } = config;
                    //拎出处理ctx的中间件
                    const lastHandler = handlers.pop(0) || (async () => {});
                    instance[
                        method.toLowerCase()
                    ](route, ...handlers, async (ctx) => {
                        return await lastHandler(ctx)
                    });
                    app.use(compose([
                        instance.routes(),
                        instance.allowedMethods()
                    ]))
                })
            })
            resolve();
        })
    })
}

module.exports = initApi;