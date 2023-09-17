// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023
const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');
router
.route('/')
.get(addressController.getAllAddresses)
.post(addressController.createNewAddress);
router
.route('/:id')
.get(addressController.getAddressByID)
.patch(addressController.patchAddressById)
.delete(addressController.deleteAddressByID);
module.exports = router;