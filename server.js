// Proxy server for static requests
// Also handles hot reloading

var httpProxy   = require('http-proxy');
var proxy       = httpProxy.createProxyServer({});
var express     = require('express');
var app         = express();
var compression = require('compression');

var ws_port     = 2001;
var http_port   = 2002;


// Server all static files in this directory
app.use(compression());
app.use(express.static(__dirname));

// Allow requests from anywhere
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Start hot-reload socket
var chokidarEvEmitter = require('chokidar-socket-emitter');
chokidarEvEmitter({port: ws_port, path: "orion", app: app.server});

// Proxy all other requests
app.get('/*', function (req, res) {
    proxy.web(req, res, {target: "http://localhost:2000"});
    //res.sendFile(__dirname + '/orion/index.html');
});

app.listen(http_port, function () {
    console.log('HTTP listening on port ', http_port);
});
