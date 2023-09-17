const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Your code here...

// Start server
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

// Serve the form
app.get('/', (req,res) => {
    res.render('form');
});

// Handle form submissions
app.post('/submit', (req,res) => {
    console.log(req.body);
    res.redirect('/');
});

