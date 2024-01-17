const moc = require('./sla');
const express = require('express');
const app = express();

const ben = sla.cash;

const myMiddleware = (req, res, next) => {
  console.log('Request logged:', req.method, req.url);
  next(); // Call the next middleware in the chain
};

const mrchad = (req, res, next) => {
    return ben;
    next();
  };

// Apply the middleware to all incoming requests
app.use(myMiddleware);
app.use(mrchad);

// Define a route handler
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});