const express = require('express');
const router = express.Router();
const cusomterController = require('../controllers/customerController');

router.route('/')
    // .get(loanController.getLoan)
    .get(cusomterController.getAllCustomers)
    .post(cusomterController.createCustomer)


router.route('/:id')
    .get(cusomterController.getCustomerById)
    .patch(cusomterController.updateCustomerById)
    .put(cusomterController.updateCustomerById)
    .delete(cusomterController.deleteCustomerById);

router.route('/byCustomer/:name')
    .get(cusomterController.getCustomerByName);

module.exports = router;