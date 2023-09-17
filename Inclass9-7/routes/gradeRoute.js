const express = require('express');
const router = express.Router();

//get call for grades
router.get('/', (req,res) =>{
    res.send('You have reached the GET METHOD GRADES!');
});

//post call for grades
router.post('/', (req,res) =>{
    res.send('You have reached the POST METHOD GRADES!');
});

//put call for grades
router.put('/', (req,res) =>{
    res.send('You have reached the PUT METHOD GRADES!');
});

//delete call for grades
router.delete('/', (req,res) =>{
    res.send('You have reached the DELETE METHOD GRADES!');
});

module.exports = router