const test = require('./controller');

const routes = [
    {
        method: 'get',
        route: '/test',
        handlers: [test.testFunction]
    }
]

module.exports = routes;