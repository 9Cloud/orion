var express     = require('express');
var app         = express();
var port        = 2001;

// Start hot-reload socket
var chokidarEvEmitter = require('chokidar-socket-emitter');
chokidarEvEmitter({port: port, path: "orion", app: app.server});