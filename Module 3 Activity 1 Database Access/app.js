// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
const path = require('path')
//This is CORS Ref:https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(express.urlencoded({extended: true}));

// if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
// }

app.set('view engine', 'ejs');
console.log('dirname', __dirname);
app.set('views',path.join(__dirname, 'views'));

var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// 1) MIDDLEWARES Morgan is used for debugging
if (process.env.NODE_ENV === 'development') {
app.use(morgan('dev'));
}
// 2)MIDDLEWARE json is used for injecting the body attribute in the pipeline
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
console.log('Hello from the middleware 👋');
next();
});

// Root Route
app.get('/',(req,res) =>{
    console.log(req.requestTime);
    console.log('ROOT was reached!');
    // res.send('You have reached the ROOT!');
    res.render('index', {title: 'Home'});
});

// 3) MIDDLE ROUTES loading
const salesRouter = require('./routes/salesRoutes');
app.use('/api/v1/sales', salesRouter);

const userRouter = require('./routes/userRoutes');
app.use('/api/v1/users', userRouter);

const addressRouter = require('./routes/addressRoutes');
app.use('/api/v1/address', addressRouter);

const modelRouter = require('./routes/modelRoutes');
app.use('/api/v1/models', modelRouter);

const productModelDescription = require('./routes/productModelDescription');
app.use('/api/v1/productModelDescription', productModelDescription);


module.exports = app;