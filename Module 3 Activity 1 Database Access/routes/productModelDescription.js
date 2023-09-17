// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023
const express = require('express');
const router = express.Router();
const productModelDescriptionController = require('../controllers/productModelDescription');
router
.route('/')
.get(productModelDescriptionController.getAllProductModelAndDescription)
.post(productModelDescriptionController.createNewProductModelAndDescription);
router
.route('/:id')
.get(productModelDescriptionController.getProductModelAndDescriptionByID)
.patch(productModelDescriptionController.patchProductModelAndDescriptionById)
.delete(productModelDescriptionController.deleteProductModelAndDescriptionByID);
module.exports = router;