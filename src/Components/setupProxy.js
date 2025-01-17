const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9090',  // Change this to your backend server's URL
      changeOrigin: true,
    })
  );
};
