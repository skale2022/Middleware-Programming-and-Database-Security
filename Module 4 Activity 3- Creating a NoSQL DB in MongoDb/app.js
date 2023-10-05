const express = require('express');
const app = express();
const morgan = require('morgan');
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('combined'))
}

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req,res,next) => {
    console.log(`Hello from the middleware 👋`);
    next();
});


app.use((req,res,next) => {
    req.requestTime = Date.now().toString();
    next();
})

// app.use('/api/v1/loans',loansRouter);

//routes
const loanRouter = require('./routes/loanRouter');
app.use('/loans',loanRouter);

module.exports = app;