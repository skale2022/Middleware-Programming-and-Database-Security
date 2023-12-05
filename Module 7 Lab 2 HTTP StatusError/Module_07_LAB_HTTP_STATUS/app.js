const express = require('express');
const app = express();
const port = 3000;

// Middleware for logging every incoming request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes for different HTTP status codes
app.get('/200', (req, res) => {
  res.status(200).send('OK: The request has succeeded');
});

app.get('/201', (req, res) => {
  res.status(201).send('Created: The request has been fulfilled and resulted in a new resource being created');
});

app.get('/400', (req, res) => {
  res.status(400).send('Bad Request: The server could not understand the request due to invalid syntax');
});

app.get('/404', (req, res) => {
  // Middleware for handling 404 errors
  res.status(404).send('Not Found: The server can not find the requested resource');
});

app.get('/500', (req, res) => {
  res.status(500).send('Internal Server Error: The server has encountered a situation it doesn\'t know how to handle');
});

app.get('/simulate-error', (req, res, next) => {
    // Simulate an error
    throw new Error('Simulated error');
  });

// Route for simulating an asynchronous action using Promises
app.get('/async-action', async (req, res, next) => {
  try {
    // Simulate an asynchronous action with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    res.status(200).send('Async Action Successful: The asynchronous action has been completed');
  } catch (error) {
    // Error handling using the error handling middleware
    next(error);
  }
});

// Middleware for hadnling 404 Error
app.use((req, res, next) => {
    res.status(404).send('Not Found: The server can not find the requested resource');
  });

// Middleware for handling other types of errors (500 Internal Server Error)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error: Something went wrong on the server');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
