// ES5
'use strict';
var myArgs = require('optimist').argv;

// Argument: Should browser-sync open a window. Valid values are true/false/"external"/"local"
var browserSyncOpen = myArgs.bsOpen ? myArgs.bsOpen : false;

var express     = require('express');
var app         = express();
var compression = require('compression');
var port        = 2000;
var browserSync = require("browser-sync").create();

app.use(compression());
//app.use(express.static(__dirname + '/public'));
app.use('/config.js', express.static(__dirname + '/config.js'));
app.use('/build.js', express.static(__dirname + '/build.js'));
app.use('/build.js.map', express.static(__dirname + '/build.js.map'));

// White listed directories
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/tide', express.static(__dirname + '/tide'));
app.use('/jspm_packages', express.static(__dirname + '/jspm_packages'));

// Legacy
app.use('/Album', express.static(__dirname + '/Album'));
app.use('/App', express.static(__dirname + '/App'));
app.use('/Signup', express.static(__dirname + '/Signup'));
app.use('/Upload', express.static(__dirname + '/Upload'));
app.use('/orion', express.static(__dirname + '/orion'));

// CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Start hot-reload socket
var chokidarEvEmitter = require('chokidar-socket-emitter');
chokidarEvEmitter({port: 2001, path: "orion", app: app.server});

// Start static files server
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/orion/index.html');
});

app.listen(port, function () {
    console.log('HTTP listening on port ', port);
});

// Browser-Sync
browserSync.init({
    port : 2002,
    open : browserSyncOpen,
    ui   : {
        port: 2003
    },
    files: ["App/main.css", "App/demo.css"],
    proxy: "localhost:2000"
});