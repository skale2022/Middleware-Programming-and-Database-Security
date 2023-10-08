const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const studentRoute = require('./routes/studentRoute')
app.use('/student', studentRoute)
app.listen(port, () => console.log(`App listening on port ${port}!`));

//Connecting to the database
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://skale12:Bing_2905@cluster0.hi0evjq.mongodb.net/StudentDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    );
    
const db = mongoose.connection;

db.on('connected', () => {
console.log('MongoDB connection Succesful');
});

db.on('error', err => {
console.error(`MongoDB connection error: ${err}`);
});

db.on('disconnected', () => {
console.log('MongoDB disconnected');
});