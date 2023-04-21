const express = require('express');

const dogRouter = require('./routes/dogs')

const foodRouter = require("./routes/dog-foods")

const app = express();


// Express.json is a middleware that allows you to easily parse the incoming body of the request as JSON.
app.use(express.json());

// Express.static is a middleware that allows you to easily serve static files from your Express server.
app.use("/static", express.static("./assets"));

app.use(logRequest)

app.use("/dogs", dogRouter)

app.use("/dog-food", foodRouter)

// Logger Middleware
app.use("/*", errorMiddleware)

// useful for making sure that asynchronous middleware or route handlers will handle errors properly.
require('express-async-errors');


// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

// Logger Middleware
function logRequest(req, res, next) {
  res.on('finish', () => {
    console.log(`[${req.method}] ${req.url} - ${res.statusCode}`);
  })
  next();
}

// Resource Not Found
function errorMiddleware(req, res, next) {
  const customError = "The requested resource couldn't be found";
  customError.statusCode = 404;
  return next(customError)
}

function errorHandler(err, req, res, next) {
  res.status(err.statusCode || 500)
    .json({
      Error: {
        stack: process.env.NODE_ENV !== "production" ? err.stack : null
      }
    })
}

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
