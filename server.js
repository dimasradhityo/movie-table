const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/graphql', createProxyMiddleware({ 
	target: 'https://n7b67.sse.codesandbox.io', 
	changeOrigin: true,

}));
app.listen(3001);