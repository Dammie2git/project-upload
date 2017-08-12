var express = require('express')
var app = express();
var port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log('Listening on port' + port);
});

// Mount the public directory at /
app.use('/', express.static('./public'));
console.log('deploy public');

app.use('/time', function(req, res) {
    res.json(Date.now());
});