// const express = require('express')
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express()
// //CONFIG
// const PORT = 3001
// const HOST = 'localhost'
// const API_SERVICE_URL = 'https://n7b67.sse.codesandbox.io' 

// app.use('/graphql', createProxyMiddleware({
//     target:API_SERVICE_URL,
//     changeOrigin: true,
//     pathRewrite: {
//         ['^/graphql']: '',
//     }
// }))

// app.listen(PORT, HOST, () =>{
//     console.log(`starting dev Proxy at ${HOST}:${PORT}`)
// })

// module.exports = app

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'https://n7b67.sse.codesandbox.io',
      changeOrigin: true,
      

    })
  );
};

//"proxy": "https://n7b67.sse.codesandbox.io",

// "http-proxy-middleware": "^2.0.1",