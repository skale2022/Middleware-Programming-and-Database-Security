const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, 'A customer must have a name'],
            unique: false,
            trim: true,
            maxlength: [40, 'A customer name must have less than or equal to 40 characters'],
            minlength: [2, 'A customer name must have more than or equal to 2 characters']
        },
        firstName: {
            type: String,
            unique: false,
            trim: true,
            maxlength: [40, 'A customer first name must have less than or equal to 40 characters'],
            minlength: [2, 'A customer first name must have more than or equal to 2 characters']
        },
        middleName: {
            type: String,
            unique: false,
            trim: true,
            maxlength: [40, 'A customer middle name must have less than or equal to 40 characters'],
            minlength: [2, 'A customer middle name must have more than or equal to 2 characters']
        },
        lastName: {
            type: String,
            unique: false,
            trim: true,
            maxlength: [40, 'A customer last name must have less than or equal to 40 characters'],
            minlength: [2, 'A customer last name must have more than or equal to 2 characters']
        },
        dateOfBirth: {
            type: Date,
            required: [true, 'A date of birth is required'],
            trim: false
        },
        gender:{
            type: String,
            required: [true, 'A gender is required'],
            enum: ["male", "female"]
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
            required: [true, 'isDeleted value is required']
        }
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;