var express     = require('express');
var app         = express();
var compression = require('compression');
var httpProxy   = require('http-proxy');
var proxy       = httpProxy.createProxyServer({});

var ws_port     = 2001;
var http_port   = 2002;

// Server all static files in this directory
app.use(compression());
app.use(express.static(__dirname));

// CORS
// Allow requests from anywhere
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



// Proxy JS requests to webpack
app.get('/js/*', function (req, res) {
    proxy.web(req, res, {target: "http://localhost:8080"});
});

app.use('/assets', express.static(__dirname + '/assets'));

// ALl other requests go to index
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(http_port, function () {
    console.log('HTTP listening on port ', http_port);
});