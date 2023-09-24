// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/19/2023
const express = require('express');
const router = express.Router();
const userController = require('../UserAuthentication/userController')

router.route('/')
    .get(userController.getUsers)
    .post(userController.createUsers)

router.route('/:id')
    .get(userController.getUsers)
    .put(userController.updateUsers)
    .delete(userController.deleteUsers)
    // .patch(userController.patchUSERs)
//get call for USER
// router.get('/', userController.getUSERs ); 

//post call for USER
// router.post('/', userController.createUSERs);

//put call for USER
router.put('/', userController.updateUsers);

//delete call for USER
router.delete('/', userController.deleteUsers);

module.exports = router