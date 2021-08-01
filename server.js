// const express = require('express')
// const cors = require('cors')
// const app = express()

// app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
// app.del('/products/:id', cors(), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// app.set('port', process.env.PORT || 3001);
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

// const express = require('express')
// const request = require('request')
// const bodyParser = require('body-parser')
// const app = express();

// const myLimit = typeof(process.argv[2]) != 'undefined' ? process.argv[2] : '100kb';
// console.log('Using limit: ', myLimit);

// app.use(bodyParser.json({limit: myLimit}));

// app.all('*', function (req, res, next) {

//     // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

//     if (req.method === 'OPTIONS') {
//         // CORS Preflight
//         res.send();
//     } else {
//         var targetURL = req.header('https://n7b67.sse.codesandbox.io'); // Target-URL ie. https://example.com or http://example.com
//         if (!targetURL) {
//             res.send(500, { error: 'There is no Target-Endpoint header in the request' });
//             return;
//         }
//         request({ url: targetURL + req.url, method: req.method, json: req.body, headers: {'Authorization': req.header('Authorization')} },
//             function (error, response, body) {
//                 if (error) {
//                     console.error('error: ' + response.statusCode)
//                 }
// //                console.log(body);
//             }).pipe(res);
//     }
// });

// app.set('port', process.env.PORT || 3001);

// app.listen(app.get('port'), function () {
//     console.log('Proxy server listening on port ' + app.get('port'));
// });