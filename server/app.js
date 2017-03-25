// Load the http module to create an http server.
var http = require('http');

var port = process.env.PORT || '3000';

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (req, res) {
  res.end(JSON.stringify({quote: "hi!", author: "lesia"}));
});

server.listen(port);

// Put a friendly message on the terminal
console.log("Server running");
