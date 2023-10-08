const Student = require('../models/studentModel')

exports.getData = async (req, res) => {
    //get data from database
    const students = await Student.find().populate('courses')
 
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
};

exports.postData = async (req, res) =>{
    try{
        const newStudent = req.body;
        const student = await Student.create(newStudent);
        
        console.log(`new Student - ${newStudent}`);
        
        res.status(201).json({
            status: 'success',
            data: student
        })
    }
    catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
    
}