const express = require('express');
const router = express.Router()

const gradeController = require('../controllers/gradeController')

router.route('/')
    .get(gradeController.getData)
    .post(gradeController.postData)

router.route('/:id')
    .get(gradeController.getDataById)
    .patch(gradeController.updateDataById)
    .put( gradeController.updateDataById)
    .delete(gradeController.deleteDataById);

module.exports = router;