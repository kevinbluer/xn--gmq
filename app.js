var express = require('express');
var port = process.env.PORT || 3002;
var app = express();
 
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/site/index.html');
}).configure(function() {
    app.use('/site', express.static(__dirname + '/site'));
}).listen(port);