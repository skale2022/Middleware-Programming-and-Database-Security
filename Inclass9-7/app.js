const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const apiVersion = '/api/v1';
app.use(express.urlencoded({extended: true}));

// if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
// }

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Root Route
app.get('/',(req,res) =>{
    console.log(req.requestTime);
    console.log('ROOT was reached!');
    res.send('You have reached the ROOT!');
});

// Grades Route
const gradeRoute = require('./routes/gradeRoute');
app.use(`${apiVersion}/grades`, gradeRoute);

//Students Route
const studentRoute = require('./routes/studentRoute')
app.use(`${apiVersion}/student`, studentRoute);

const courseRoute = require('./routes/courseRoute')
app.use(`${apiVersion}/course`, courseRoute);

// Start server
app.listen(PORT, ()=>{
    console.log("Server is running on port 3000");
});