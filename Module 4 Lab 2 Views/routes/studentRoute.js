const express = require('express');
const router = express.Router()

const studentController = require('../controllers/studentController')

router.route('/')
    .get(studentController.getData)

router.route('/new')
    .get(studentController.getCreateData)
    .post(studentController.postData)

router.route('/update/:id')
    .get(studentController.getEditData)
    .put(studentController.putData)

router.route('/delete/:id')
    .delete(studentController.deleteData)

module.exports = router;