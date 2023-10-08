const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema(
    {
        paymentAmount: {
            type: Number,
            required: [true, 'A payment amount is required'],
            unique: false,
            trim: true,
            maxlength: [40, 'A payment amount must have less than or equal to 40 numbers'],
            minlength: [2, 'A payment amount must have more than or equal to 2 numbers']
        },
        interest: {
            type: Number,
            required: [true, 'An interest rate is required'],
            unique: false,
            trim: true,
            maxlength: [40, 'An interest must have less than or equal to 40 number'],
            minlength: [2, 'An interest must have more than or equal to 2 number']
        },
        principal: {
            type: Number,
            required: [true, 'A principal amount is required'],
            unique: false,
            trim: true,
            maxlength: [40, 'A principal must have less than or equal to 40 numbers'],
            minlength: [2, 'A principal must have more than or equal to 2 numbers']
        },
        createdDate: {
            type: Date,
            default: Date.now,
            required: [true, 'A created date is required'],
            autopopulate: true,
            trim: false
        },
        modifiedDate: {
            type: Date,
            default: Date.now,
            required: [true, 'A modiefied date is required'],
            autopopulate: true,
            trim: false
        },
        isDeleted: {
            type: Boolean,
            default: false,
            enum:[true,false],
            required: [true, 'isDeleted value is required']
        }
});

const ledgerModel = mongoose.model('Ledger', ledgerSchema);

module.exports = ledgerModel;