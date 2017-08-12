var express = require('express')
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.listen(3001, function() {
    console.log('Listening on 3001');
});

// Mount the public directory at /
app.use('/', express.static('/public'));