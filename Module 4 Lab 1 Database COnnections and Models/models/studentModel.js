const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `Age is not an integer value`
                },
                min: [0, 'Age cannot be less than 0']
        },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function(v){
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
        required: [true, 'User email required']
    },
    courses: [
        {
            name: String,
            grade: {
                type: Number,
                validate: [
                    {
                        validator: Number.isInteger,
                        message: `Grade is not an integer value`
                    },
                    {
                        validator: function(grade) {
                            return grade >= 0 && grade <= 100; // Custom validation for grade
                        },
                        message: `Grade must be between 0 and 100`
                    }
                ]
            }
        }
    ]
});

const Student = mongoose.model('Students', studentSchema);
module.exports = Student;