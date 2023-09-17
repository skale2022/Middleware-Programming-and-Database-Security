// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
router
.route('/')
.get(salesController.getAllSales)
.post(salesController.createNewSales);
router
.route('/:id')
.get(salesController.getSalesByID)
.patch(salesController.patchSalesById)
.delete(salesController.deleteSalesByID);
module.exports = router;