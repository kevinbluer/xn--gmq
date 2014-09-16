var express = require('express');
var port = process.env.PORT || 3002;
var app = express();
 
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/site/index.html');
}).configure(function() {
    app.use('/', express.static(__dirname + '/site'));
}).listen(port);

// "Receive without conceit, release without struggle." - Marcus Aurelius, Meditations