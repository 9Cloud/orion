// ES5
'use strict';
var express     = require('express');
var app         = express();
var compression = require('compression');
var port        = 8000;

// Start hot-reload socket
var chokidarEvEmitter = require('chokidar-socket-emitter');
chokidarEvEmitter({port: 5776, path: "orion"});

// Start static files server
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/web/index.html');
});

app.listen(port, function () {
  console.log('Listing on port ', port);
});

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.methodOverride());
    app.use(allowCrossDomain);
    app.use(app.router);
    app.use(compression());
    
    app.use(express.static(__dirname + '/public'));
    
    app.use('/config.js', express.static(__dirname + '/config.js'));
    app.use('/', express.static(__dirname + '/orion'));
    app.use('/app', express.static(__dirname + '/tide'));
    app.use('/jspm_packages', express.static(__dirname + '/jspm_packages'));
});




