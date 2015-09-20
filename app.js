/**
 * Created by emperor on 9/19/2015.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');


var hellofun = function (a){
    console.log('Inside the function'+a);
};

hellofun('Welcome');