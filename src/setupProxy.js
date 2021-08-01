// const express = require('express')


// const app = express()

// const PORT = process.env.PORT || 3001
// const HOST = 'localhost'
// const API_SERVICE_URL = 'https://n7b67.sse.codesandbox.io' 

// app.use('/graphql', createProxyMiddleware({
//     target:API_SERVICE_URL,
//     changeOrigin: true,
//     pathRewrite: {
//         ['^/graphql']: '',
//     }
// }))

// app.post('/graphql', (req,res) => {

// })

// app.listen(PORT, () =>{
//     console.log(`starting dev Proxy at ${HOST}:${PORT}`)
// })
// const express = require('express')
// const request = require('request')
// const cors = require('cors')
// const app = express();


// app.options('/graphql', cors())
// app.post('graphql', cors(), function(req,res){
//   const targetURL = 'https://n7b67.sse.codesandbox.io'; // Target-URL ie. https://example.com or http://example.com
//         if (!targetURL) {
//             res.status(500).send({ error: 'There is no Target-Endpoint header in the request' });
//             return;
//         }
//         request(targetURL,
//             function (error, response, body) {
//                 if (error) {
//                     console.error('error: ' + response.statusCode)
//                 }
// //                console.log(body);
//             }).pipe(res);
// })
// app.all('*', function (req, res, next) {

//     // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

//     if (req.method === 'OPTIONS') {
//         // CORS Preflight
//         res.send();
//     } else {
//         const targetURL = req.header('https://n7b67.sse.codesandbox.io'); // Target-URL ie. https://example.com or http://example.com
//         if (!targetURL) {
//             res.status(500).send({ error: 'There is no Target-Endpoint header in the request' });
//             return;
//         }
//         request({ url: targetURL + req.url, method: req.method, json: req.body, headers: {'Authorization': req.header('Authorization')} },
//             function (error, response, body) {
//                 if (error) {
//                     console.error('error: ' + response.statusCode)
//                 }

//             }).pipe(res);
//     }
// });


// const port = process.env.PORT || 3001
// app.listen(port, function () {
//     console.log('Proxy server listening on port ' + app.get('port'));
// });

// module.exports = app

const { createProxyMiddleware, fixRequestBody } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'https://n7b67.sse.codesandbox.io',
      changeOrigin: true,
      onProxyReq:fixRequestBody,

    })
  );
};
// function onProxyReq(proxyReq, req, res) {
//   // add custom header to request
//   proxyReq.setHeader("Access-Control-Allow-Origin", "*");
//   // or log the req
// }
//"proxy": "https://n7b67.sse.codesandbox.io",

// "http-proxy-middleware": "^2.0.1",