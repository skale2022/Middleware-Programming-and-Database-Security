const Student = require('../models/studentModel')
exports.getData = async (req, res) => {
    //get data from database
    const students = await Student.find()
 
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
};

exports.getDataById = async (req, res) => {
    const {id} = req.params;
    //get data from database
    const students = await Student.find({_id: id})
 
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
};

exports.postData = async (req, res) =>{
    const newStudent = req.body;
    const student = await Student.create(newStudent);
    
    console.log(`new Student - ${newStudent}`);
    
    res.status(201).json({
        status: 'success',
        data: student
    })
}
exports.updateDataById = (req, res) => res.send('Hello World! from student PUT');
exports.patchById = (req, res) => res.send('Hello World! from student PUT');

exports.deleteDataById = async (req, res) => {
    const {id} = req.params;
    //get data from database
    await Student.deleteOne({_id: id})
 
    res.status(201).json({
        status: 'success'
    })
}

