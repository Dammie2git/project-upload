var express = require('express')
var app = express();

app.listen(3001, function() {
    console.log('Listening on 3001');
});

// Mount the public directory at /
app.use('/', express.static('./public'));
console.log('deploy public');