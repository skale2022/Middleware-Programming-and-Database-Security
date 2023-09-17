// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023

const db = require('../config/db.manager');
exports.getAllModels = function (req, res) {
const model = db.getProductModel().then(results=>{
console.log(results);
// res.status(200).json({
// status: 'successfull',
// data: results.recordsets[0]
// }); // send all the data
res.render('modelsView', { data: results.recordsets[0]});
});
}
exports.getModelByID = function( req, res){
const {id} = req.params; // get id
res.status(200).json({
status: 'no implemented'
});
}
exports.createNewModel = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.patchModelById = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.deleteModelByID = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id
res.status(200).json({
status: 'no implemented'
});
}