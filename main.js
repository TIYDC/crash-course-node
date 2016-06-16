
var http = require('http');

var server = http.createServer(function( req, res ) {
    console.log(req.url);

    if (req.url === '/home') {

        res.writeHead(200, {
            contentType: 'text/html'
        });

        res.end('<html><body><h1>hello world</h1></body></html>');

    } else {
        res.writeHead(404, {
            contentType: 'text/html'
        });
        res.end('<h1>Not Found!</h1>');
    }


});

server.listen(3000, function() {
    console.log('your server is now running!');
});
