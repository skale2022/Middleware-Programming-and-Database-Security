// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/19/2023
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')

router.route('/')
    .get(studentController.getStudents)
    .post(studentController.createStudents)

router.route('/:id')
    .get(studentController.getStudents)
    .put(studentController.updateStudents)
    .delete(studentController.deleteStudents)
    // .patch(studentController.patchStudents)
//get call for STUDENT
// router.get('/', studentController.getStudents ); 

//post call for STUDENT
// router.post('/', studentController.createStudents);

//put call for STUDENT
router.put('/', studentController.updateStudents);

//delete call for STUDENT
router.delete('/', studentController.deleteStudents);

module.exports = router