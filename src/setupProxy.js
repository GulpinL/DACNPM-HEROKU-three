const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mua-web-l-be.herokuapp.com/',//'http://localhost:5000',
      changeOrigin: true,
    })
  );
};