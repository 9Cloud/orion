const express     = require('express');
const app         = express();
const compression = require('compression');

const http_port   = 2002;

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

app.use('/assets', express.static(__dirname + '/assets'));

// ALl other requests go to index
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/site/dev_index.html');
});

app.listen(http_port, function () {
    console.log('HTTP listening on port ', http_port);
});