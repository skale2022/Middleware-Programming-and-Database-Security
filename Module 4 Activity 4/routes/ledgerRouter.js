const express = require('express');
const router = express.Router();
const ledgerController = require('../controllers/ledgerController');

router.route('/')
    // .get(ledgerController.getLoan)
    .get(ledgerController.getAllLedger)
    .post(ledgerController.createLedger)


router.route('/:id')
    .get(ledgerController.getLedgerById)
    .patch(ledgerController.updateLedgerById)
    .put(ledgerController.updateLedgerById)
    .delete(ledgerController.deleteLedgerById);

module.exports = router;