import http from 'node:http';

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/ plain' });
    res.end ('Hello World!');
}) .listen (8080, () => console.log('http://localhost:8080'));
