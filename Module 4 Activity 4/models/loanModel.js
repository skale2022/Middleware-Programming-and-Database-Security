const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
    {
        loanType: {
            type: String, 
            required: [true, 'A Loan type is required'],
            unique: false,
            trim: true,
            enum: ['Home', 'Auto', 'Boat', 'Life']
        },
        loanNumber: {
            type: Number,
            required: [true, 'A loan number is required'],
            unique: false,
            trim: true,
            maxlength: [40, 'A loan number must have less than or equal to 40 numbers'],
            minlength: [2, 'A loan number must have more than or equal to 2 numbers']
        },
        amount: {
            type: Number,
            required: [true, 'A loan amount is required'],
            unique: false,
            trim: true,
            maxlength: [40, 'An amount must have less than or equal to 40 numbers'],
            minlength: [2, 'An amount must have more than or equal to 2 characters']
        },
        interestRate: {
            type: Number,
            required: [true, 'A loan interest Rate is required'],
            unique: false,
            trim: true,
            maxlength: [40, 'An interest Rate must have less than or equal to 40 characters'],
            minlength: [2, 'An interest Rate must have more than or equal to 2 characters']
        },
        loanTerm: {
            type: Number,
            required: [true, 'A date of birth is required'],
            trim: false,
            maxlength: [40, 'A loan term must have less than or equal to 40 number'],
            minlength: [2, 'A loan term must have more than or equal to 2 number']
        },
        startDate: {
            type: Date,
            required: [true, 'A start date is required'],
            trim: false
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

const loanModel = mongoose.model('Loan', loanSchema);

module.exports = loanModel;