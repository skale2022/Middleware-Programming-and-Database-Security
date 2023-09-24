// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

// Create a data store for our student data
const students = require('./model/01-student');

// new code and changes
// We are going to implement all the CRUD operations in this file
// i.e. create, read, update and delete
// The GET All students route for the form students data base
app.get('/students', (req, res) => {
  // Render the form and pass in the current student data
  res.render('index', { students: students.getStudents() });
});
// The GET a specific route for the form students data base
app.get('/students/:id', (req, res) => {
  // Render the form and pass in the current student data
  const id = Number(req.params.id);
  res.render('index', { students: students.getSpecificStudent(id) });
});
// The POST route for form submissions
app.post('/students', (req, res) => {
  console.log(`req body - ${JSON.stringify(req.body)}`)
  // Add the submitted student data to our data store
  students.addStudent(req.body);

  // Redirect back to the form
  res.redirect('/students');
});

// The GET route for the form
app.put('/students/:id', (req, res) => {
  // Render the form and pass in the current student data
  var tempstudent = req.body;
  const id = Number(req.params.id);
  res.render('index', { students: students.upDateStudent(id, tempstudent) });
});

// The GET route for the form
app.delete('/students/:id', (req, res) => {
  // Render the form and pass in the current student data
  const id = Number(req.params.id);
  res.render('index', { students: students.deleteStudent(id) });
});
// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
