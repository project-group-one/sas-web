const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/*', { target: 'http://39.98.172.236' }));
};
