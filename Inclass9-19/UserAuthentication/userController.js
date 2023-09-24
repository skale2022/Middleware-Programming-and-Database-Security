// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/19/2023
const userDB = [];
userDB.push({id:1, name:'John', course:'cs572', grade:95});
userDB.push({id:2, name:'Jane', course:'cs572', grade:95});
userDB.push({id:3, name:'Jim', course:'cs572', grade:95});
userDB.push({id:4, name:'Jill', course:'cs572', grade:95});
userDB.push({id:5, name:'Jack', course:'cs572', grade:95});
exports.getUsers = function(req,res){
    // res.send(userDB);
    res.render('userLoginForm', { title: 'Users'});
};
exports.createUsers = function(req,res){
    var user = req.body;
    console.log(`user - ${JSON.stringify(user)}`)
    res.send('You have created the User sucessfully');
};
exports.updateUsers = function(req,res){
    res.send('You have updated the User sucessfully');
};
exports.deleteUsers = function(req,res){
    res.send('You have deleted the User sucessfully');
};
exports.patchUsers = function(req,res){
    res.send('You have patch the User sucessfully');
};