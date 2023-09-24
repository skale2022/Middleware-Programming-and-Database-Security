const express = require('express');
const bodyParser = require('body-parser');
const User = require('./model/userModel'); // Import the User model
const app = express();
const port = 3000; // You can change the port as needed

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const { registerUser, login, home, postLogin, updateInfo, getUpdatePassword, postUpdateInfo, postUpdatePassword, getLogout } = require('./controllers/userController');
// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: false }));

// In-memory user storage (for simplicity)
global.users = [];
global.currentLoggedInUser = {}

// Home page (login page)
app.get('/', (req, res) => {
    res.render('login');
});

// Registration page
app.get('/register', (req, res) => {
    res.render('register');
});

// Handle registration form submission
app.post('/register',registerUser);

// Login page
app.get('/login', login);

app.get('/home', home);

// Handle login form submission
app.post('/login', postLogin );

app.get('/updateInfo', updateInfo);

app.get('/updatePassword', getUpdatePassword);

// Handle login form submission
app.post('/updateInfo', postUpdateInfo);

// Handle login form submission
app.post('/updatePassword',postUpdatePassword);

app.get('/logout', getLogout);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
