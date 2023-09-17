const express = require('express');
const router = express.Router();

//get call for course
router.get('/', (req,res) =>{
    res.send('You have reached the GET METHOD COURSE!');
});

//post call for course
router.post('/', (req,res) =>{
    res.send('You have reached the POST METHOD COURSE!');
});

//put call for course
router.put('/', (req,res) =>{
    res.send('You have reached the PUT METHOD COURSE!');
});

//delete call for course
router.delete('/', (req,res) =>{
    res.send('You have reached the DELETE METHOD COURSE!');
});

module.exports = router