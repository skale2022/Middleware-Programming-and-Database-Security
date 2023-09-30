const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    subject: String,
    grade: String,
    date: Date
})

const Grade = mongoose.model('Grade', gradeSchema);
module.exports = Grade;