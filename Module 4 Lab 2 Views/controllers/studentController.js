const Student = require('../models/studentModel')

exports.getData = async (req, res) => {
    //get data from database
    const students = await Student.find()
 
    res.render('list-students', { students: students});
};

exports.getCreateData = (req,res) => {
    res.render('new-student');
}

exports.getEditData = (req,res) => {
    res.render('edit-student');
}

exports.postData = async (req, res) =>{
    try{
        const newStudent = req.body;
        const student = await Student.create(newStudent);
        
        console.log(`new Student - ${student}`);
        const students = await Student.find()
        // res.status(201).json({
        //     status: 'success',
        //     data: student
        // })

        res.redirect('/students')
    }
    catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
    
}

exports.putData = async (req, res) =>{
    try{
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        console.log(`update Student- ${updateStudent}`)
        res.redirect('/students')
    }
    catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
    
}

exports.deleteData = async (req, res) =>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        
        console.log(`delete Student- ${deleteStudent}`)
        
        res.redirect('/students')
    }
    catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
    
}