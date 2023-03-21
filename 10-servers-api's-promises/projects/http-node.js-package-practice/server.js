// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.end();
    // ...
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
