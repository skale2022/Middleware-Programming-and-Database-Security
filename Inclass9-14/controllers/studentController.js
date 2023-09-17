// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/14/2023
const studentsDB = [];
studentsDB.push({id:1, name:'John', course:'cs572', grade:95});
studentsDB.push({id:2, name:'Jane', course:'cs572', grade:95});
studentsDB.push({id:3, name:'Jim', course:'cs572', grade:95});
studentsDB.push({id:4, name:'Jill', course:'cs572', grade:95});
studentsDB.push({id:5, name:'Jack', course:'cs572', grade:95});
exports.getStudents = function(req,res){
    res.send(studentsDB);
    // res.render('studentView', { title: 'Students'});
};
exports.createStudents = function(req,res){
    res.send('You have created the STUDENT sucessfully');
};
exports.updateStudents = function(req,res){
    res.send('You have updated the STUDENT sucessfully');
};
exports.deleteStudents = function(req,res){
    res.send('You have deleted the STUDENT sucessfully');
};
exports.patchStudents = function(req,res){
    res.send('You have patch the STUDENT sucessfully');
};