var http = require('http');
var url = require('url');

 http.createServer(function(req, res) {
     res.end(new Date().toGMTString());

 }).listen(8000,'localhost');
 console.log('Start server on port 8000');