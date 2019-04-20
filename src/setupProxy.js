const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://39.98.172.236' }));
  app.use(proxy('/auth', { target: 'http://39.98.172.236' }));
};
