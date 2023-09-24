// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/24/2023

const User = require('../model/userModel');

const registerUser =  (req, res) => {
    const { username, email, password, verifyPassword } = req.body;

    // Check for duplicate usernames and emails
    const existingUser = global.users.find(user => user.username === username || user.email === email);

    if (existingUser) {
        // User or email already exists, show an error message
        res.render('register', { errorMessage: 'Username or email already exists' });
    }
    else if(verifyPassword != password) {
        // password and verify password not matching show an error
        res.render('register', { errorMessage: 'Password and verify password not matching type again' });
    } 
    else {
        // Create a new user and add it to the users array (for simplicity)
        const newUser = new User(username, email, password);
        global.users.push(newUser);
        console.log(`users- ${JSON.stringify(global.users)}`)
        // Redirect to login page after successful registration
        res.redirect('/login?success=User%20Created%20successfully!');
    }
};

const login = (req, res) => {
    const successMessage = req.query.success;

    res.render('login', { successMessage });
}

const home =  (req, res) => {
    const successMessage = req.query.success;

    res.render('home', { successMessage });
}

const postLogin = (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    const user = global.users.find(user => user.username === username);
    global.currentLoggedInUser = user;
    if (!user || user.password !== password) {
        // User not found or password is incorrect, show an error message
        res.render('login', { errorMessage: 'Invalid username or password' });
    } else {
        // Redirect to a user profile or dashboard page after successful login
        res.render('home'); //Succesfull Login
    }
}

const updateInfo = (req, res) => {
    const successMessage = req.query.success;
  
    res.render('updateInfo', { successMessage });
  }

const getUpdatePassword = (req, res) => {
    const successMessage = req.query.success;
    res.render('updatePassword', { successMessage });
  }

const postUpdateInfo = (req, res) => {
    const { username, email  } = req.body;
        const user = global.users.find(user => user.username === global.currentLoggedInUser.username);
        user.username = username;
        user.email = email
        console.log(`user updated and updated list- ${JSON.stringify(global.users)}`)
        res.redirect('/home?success=User%20Details%20Updated%20successfully!');
    }

const postUpdatePassword =  (req, res) => {
    const { password, verifyPassword } = req.body;
    if(verifyPassword != password) {
        // password and verify password not matching show an error
        res.render('updatePassword', { errorMessage: 'Password and verify password not matching type again' });
    } 
    else{
        // Find the user by username
        const user = global.users.find(user => user.username === global.currentLoggedInUser.username);
        user.password = password;
        console.log(`user updated and updated list- ${JSON.stringify(global.users)}`)
        res.redirect('/home?success=User%20Details%20Updated%20successfully!');
    }
}

const getLogout = (req, res) => {
    global.currentLoggedInUser = {}
    res.redirect('/login?success=User%20Logged%20Out%20successfully!');
}

module.exports = {
    registerUser,
    login,
    home,
    postLogin,
    updateInfo,
    getUpdatePassword,
    postUpdateInfo,
    postUpdatePassword,
    getLogout
}