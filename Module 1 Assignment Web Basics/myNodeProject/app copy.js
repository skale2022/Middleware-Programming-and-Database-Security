// Student Name: Saurabh Kale
// Student ID: 1223450319
// Date: 08/26/2023

const express = require('express');
const app = express();
require('dotenv').config();
// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Your code here...

// Serve the form
app.get('/', (req,res) => {
    res.render('form');
});

// Handle form submissions
app.post('/submit', (req,res) => {
    console.log(req.body);
    res.redirect('/welcome');
});

app.get('/welcome', (req,res) => {
    res.render('Thank you for submitting the form');
});

// Start server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});