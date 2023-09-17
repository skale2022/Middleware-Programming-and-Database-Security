// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/12/2023
const express = require('express');
const router = express.Router();

//get call for STUDENT
router.get('/', (req,res) =>{
    // res.send('You have reached the GET METHOD STUDENT!');
    res.render('studentView',{title: 'student'})
});

//post call for STUDENT
router.post('/', (req,res) =>{
    res.send('You have reached the POST METHOD STUDENT!');
});

//put call for STUDENT
router.put('/', (req,res) =>{
    res.send('You have reached the PUT METHOD STUDENT!');
});

//delete call for STUDENT
router.delete('/', (req,res) =>{
    res.send('You have reached the DELETE METHOD STUDENT!');
});

module.exports = router