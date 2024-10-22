// A minimal backend:
// Start a web server that servers the frontend.
import express from 'express';
const port = 5500;
const app = express();
app.use(express.static('frontend'));
app.listen(port, () =>
  console.log('Listening on http://localhost:' + 5500));