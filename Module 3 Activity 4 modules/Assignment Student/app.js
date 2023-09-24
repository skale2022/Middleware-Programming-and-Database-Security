// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/24/2023

const express = require('express');
const bodyParser = require('body-parser');
const { makeUpperCase } = require('./middlewares');
const studentsRouter = require('./controllers/students')

const app = express();

app.use(bodyParser.json());// using the middleware body-parser to parse
app.use(makeUpperCase);// global middleware

app.use('/students', studentsRouter)// use studentsRouter

app.use('/', function(req, res, next){
    console.log('Request Url:' + req.url);
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});