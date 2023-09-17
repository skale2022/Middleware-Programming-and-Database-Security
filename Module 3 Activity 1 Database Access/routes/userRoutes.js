// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router
.route('/')
.get(userController.getAllUser)
.post(userController.createNewUser);
router
.route('/:id')
.get(userController.getUserByID)
.patch(userController.patchUserById)
.delete(userController.deleteUserByID);
module.exports = router;