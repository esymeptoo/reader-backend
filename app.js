const Koa = require('koa');

// import applyMiddleware from './middleware';
const applyMiddleware = require('./middleware');
const api = require('./api');


const app = new Koa();


(async function init() {
  applyMiddleware(app);
  await api(app);

  app.listen(3000);
  console.log(`Server started, listening on port: 3000`);
})()
exports.default = app;