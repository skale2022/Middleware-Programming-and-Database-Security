const Grade = require('../models/gradeModel')
exports.getData = async (req, res) => {
    //get data from database
    const grades = await Grade.find()
 
    res.status(200).json({
        status: 'success',
        results: grades.length,
        data: {
            grades
        }
    });
};

exports.getDataById = async (req, res) => {
    const {id} = req.params;
    //get data from database
    const grades = await Grade.find({_id: id})
 
    res.status(200).json({
        status: 'success',
        results: grades.length,
        data: {
            grades
        }
    });
};

exports.postData = async (req, res) =>{
    const newGrade = req.body;
    const grade = await Grade.create(newGrade);
    
    console.log(`new Grade - ${newGrade}`);
    
    res.status(201).json({
        status: 'success',
        data: grade
    })
}
exports.updateDataById = (req, res) => res.send('Hello World! from grade PUT');
exports.patchById = (req, res) => res.send('Hello World! from grade PUT');

exports.deleteDataById = async (req, res) => {
    const {id} = req.params;
    //get data from database
    await Grade.deleteOne({_id: id})
 
    res.status(201).json({
        status: 'success'
    })
}


