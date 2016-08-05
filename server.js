// ES5
'use strict';
var express     = require('express');
var app         = express();
var compression = require('compression');
var port        = 2000;

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);
app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use('/config.js', express.static(__dirname + '/config.js'));
app.use('/tide', express.static(__dirname + '/tide'));
app.use('/jspm_packages', express.static(__dirname + '/jspm_packages'));

// Legacy
app.use('/Album', express.static(__dirname + '/Album'));
app.use('/App', express.static(__dirname + '/App'));
app.use('/Signup', express.static(__dirname + '/Signup'));
app.use('/Upload', express.static(__dirname + '/Upload'));
app.use('/orion', express.static(__dirname + '/orion'));

// Start hot-reload socket
var chokidarEvEmitter = require('chokidar-socket-emitter');
chokidarEvEmitter({port: 2001, path: "orion", app: app.server});

// Start static files server
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/orion/index.html');
});

app.listen(port, function () {
    console.log('HTTP listening on port ', port);
});