const express = require('express');
const router = express.Router()

const studentController = require('../controllers/studentController')

router.route('/')
    .get(studentController.getData)
    .post(studentController.postData)

module.exports = router;