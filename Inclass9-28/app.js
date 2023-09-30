const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser')

const app = express();
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())


// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); //req.body

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
const userRouter = require('./routes/userRoutes');

app.use('/api/v1/users', userRouter);

module.exports = app;
