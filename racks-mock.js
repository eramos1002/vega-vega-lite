const http = require('http');
const data = require('./racks-mock-response.json');

const hostname = 'localhost';
const port = parseInt(process.argv[2]) || 2001;

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});