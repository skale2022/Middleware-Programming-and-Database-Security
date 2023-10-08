const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path')

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const studentRoute = require('./routes/studentRoute')
app.use('/students', studentRoute)
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