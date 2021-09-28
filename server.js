const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hola Mundo');
    }   
    else if (req.url === "/kevin"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hola Kevin!');
    } 
    else if (req.url === "/urls"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('google.com');
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 NOT FOUND');
    } 

});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});