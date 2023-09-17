// Impot the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();

// We use the 'body-parse' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Create a data store for our student data
let students = [];

app.get('/', (req,res)=>{
    res.redirect('/StudentForm');
})

// The GET route for the form
app.get('/StudentForm', (req, res) => {
    // Render the form and pass in the current student data
    res.render('index', { students: students });
});

// The POST route for form submissions
app.post('/StudentData', (req, res) => {
    //Add the submitted student data to our data store
    students.push(req.body);

    //Redirect back to the form
    res.redirect('/');
    // res.redirect('/StudentForm');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
