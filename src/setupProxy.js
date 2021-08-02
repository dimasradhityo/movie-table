// const express = require('express')
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const app = express()

// const PORT = process.env.PORT || 3001
// const API_SERVICE_URL = 'https://n7b67.sse.codesandbox.io' 

// app.use('/graphql', createProxyMiddleware({
//     target:API_SERVICE_URL,
//     changeOrigin: true,
// }))

// app.listen(PORT)

// module.exports = app

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,


    })
  );
};

//"proxy": "https://n7b67.sse.codesandbox.io",

