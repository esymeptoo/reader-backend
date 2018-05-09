const test = require('./controller');

// const A = async (ctx, next) => {
//     await next()
// }

const routes = [
    {
        method: 'get',
        route: '/test',
        handlers: [
            test.testFunction
        ]
    }
]

module.exports = routes;