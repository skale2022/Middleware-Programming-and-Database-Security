// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/19/2023
const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradesController')
//get call for grades
router.get('/', gradeController.getGrade);

//post call for grades
router.post('/', gradeController.createGrade);

//put call for grades
router.put('/', gradeController.updateGrade);

//delete call for grades
router.delete('/', gradeController.deleteGrade);

module.exports = router