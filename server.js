
var express = require('express');
var dogCreator = require('./dog');

var app = express();

app.use( require('./auth') );

app.get('/', function(req, res) {
    res.end('<h1>hello world</h1>');
});

app.get('/foo/:bar', function(req, res) {
    res.end('<h1>hello ' + req.params.bar + '</h1>');
});

app.get('/dogs', function(req, res) {
    console.log('inside dogs route');

    var dogone = dogCreator({ name: 'Vincent', age: 11 });
    var dogtwo = dogCreator({ name: 'Moose', age: 3 });

    res.json( [ dogone, dogtwo ] );
});

app.use( require('./error-handler') );


app.listen(3000, function() {
    console.log('my express server is running!');
});
