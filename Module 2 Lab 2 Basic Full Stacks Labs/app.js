// Student Name: Saurabh
// Student ID: 1223450319
// Date: 09/08/2023

// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require("axios");
// Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

// The GET route for the form
app.get('/', (req, res) => {
    // Render the form and pass in the current student data
    res.render('index');
    // res.render("books", { books });
    // res.render("user")
    // res.render("fruits", { fruits });
    // res.render("async")
    // res.render("httpRequest")
});

// create a route for user to enter the numbers
app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1) / Number(num2);
    res.render("result", { sum,difference, product, quotient, num1, num2});
});

const books = [];

app.post("/addBook", (req, res) => {
    const { title, author, publicationYear } = req.body;
    books.push({title, author, publicationYear});
    res.redirect("/")
})

function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

// route handler for the form
app.post("/createUser", (req, res) => {
const { name, age, email } = req.body;
const user = new User(name, age, email);
const { name: userName, age: userAge, email: userEmail } = user;
res.render("userInfo", { userName, userAge, userEmail });
});

const fruits = ["Apple", "Orange", "Banana"];

app.post("/addFruit", (req,res) => {
    const { fruit } = req.body;
    fruits.push(fruit);
    res.redirect("/");
});

app.get("/simulateAsync", (req, res) => {
    setTimeout(() => {
      res.json({ message: "Asynchronous operation completed!" });
    }, 2000);
  });
  
app.post("/makeRequest", async (req,res) => {
    const { url } = req.body;
    console.log(`url - ${url}`)
    try {
        const response = await axios.get(url);
        console.log(`response is ${response}`)
        res.json(response.data);
    }catch(error) {
        res.json({ error: error.message });
    }
})

// Start the server on port 4000
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 3000
// NOTE
// this quotes are replaced by back ticks ` next to key caps 1
app.listen(port, () => {
    console.log('views', path.join(__dirname, 'views'));
    console.log(`Server is running on port ${port}`);
});
