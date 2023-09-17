// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023
const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');
router
.route('/')
.get(modelController.getAllModels)
.post(modelController.createNewModel);
router
.route('/:id')
.get(modelController.getModelByID)
.patch(modelController.patchModelById)
.delete(modelController.deleteModelByID);
module.exports = router;