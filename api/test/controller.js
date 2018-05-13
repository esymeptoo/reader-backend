const GrepNovel = require('../../services/test');

module.exports = {
    testFunction: async (ctx) => {
        const res = await GrepNovel();
        ctx.body = {
            code: 200,
            html: res
        };
        ctx.status = 200;
    }
}