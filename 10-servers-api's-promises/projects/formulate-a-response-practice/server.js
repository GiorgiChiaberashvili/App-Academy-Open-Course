// Your code here
const http = require('http');

const response = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World!</title>
</head>
<body>
  <h1>Hello there!</h1>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(response);
    res.end();
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end(`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Hello World!</title>
// </head>
// <body>
//   <h1>Hello there!</h1>
// </body>
// </html>`);
// });

// server.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });
