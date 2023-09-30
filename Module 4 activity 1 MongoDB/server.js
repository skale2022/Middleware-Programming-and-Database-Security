const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
//routes
const studentRoute = require('./routes/studentRoute')
const gradeRoute = require('./routes/gradeRoute')
app.use(express.static('views'));

app.use('/student', studentRoute)
app.use('/grade', gradeRoute)

app.listen(port, () => console.log(`App listening on port ${port}!`));

//Connecting to the database
const mongoose = require('mongoose');

//Synchronous connection
// mongoose.connect('mongodb://localhost:27017/StudentDB', {useNewUrlParse: true} , (err) => {
//     if(!err){console.log('MongoDB Connection Succeeded.')}
//     else{console.log('Error in DB connection : ' + err)}
// })

//Asynchronous connection
mongoose.connect('mongodb+srv://skale12:Bing_2905@cluster0.hi0evjq.mongodb.net/demodb')
    .then(() => console.log('MongoDB connection Succesful'))
    .catch((err) => console.error(err))