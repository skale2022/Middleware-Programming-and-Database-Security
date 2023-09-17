// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/14/2023
exports.getGrade = function(req,res){
    res.render('gradeView', { title: 'grade'});
};
exports.createGrade = function(req,res){
    res.send('You have created the GRADE sucessfully');
};
exports.updateGrade = function(req,res){
    res.send('You have updated the GRADE sucessfully');
};
exports.deleteGrade = function(req,res){
    res.send('You have deleted the GRADE sucessfully');
};