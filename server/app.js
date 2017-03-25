// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

var port = process.env.PORT || '3000';

// read quotes
var file = fs.readFileSync('server/quotes.txt', 'UTF-8');
var quotes = file.split('\n').slice(0, -1);

function randomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  var line = quotes[i];

  var index = line.lastIndexOf('-');
  var quote = line.slice(0, index);
  var author = line.slice(index + 1, line.length);

  debugger

  return {quote: quote.trim(), author: author.trim()};
}

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (req, res) {
  res.end(JSON.stringify(randomQuote()));
});

server.listen(port);

// Put a friendly message on the terminal
console.log('Server running');
