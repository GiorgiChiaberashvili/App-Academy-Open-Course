const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.use((req, res, next) => {
  const error = new Error("Sorry, the requested resource coudn't be found");
  error.statusCode = 404;
  next(error);
})

// app.use((err, req, res, next) => {
//   console.log(err)
//   res.body = JSON.stringify({
//     message: err.message,
//     statusCode: err.statusCode || 500
//   });
//   console.log(JSON.parse(req.body));
//   res.send(JSON.parse(res.body));
// })

app.use((err, req, res, next) => {
  console.log(err);
  res.statusCode = (err.statusCode || 500);
  resBody = { "message": err.message, "statusCode": res.statusCode };
  res.send(resBody);
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
