var http = require('http');

var hostname = '127.0.01'

var port = 8080



var server = http.createServer((req, res) => {
    res.statusCode = '200';
    res.setHeader = ('Content-type', 'text/plain');
    res.end('hello world');

})

server.listen(port, hostname, () => {
    console.log('server running my bratha')
})