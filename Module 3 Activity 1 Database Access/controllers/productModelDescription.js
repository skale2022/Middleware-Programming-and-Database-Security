// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023

const db = require('../config/db.manager');
exports.getAllProductModelAndDescription = function (req, res) {
const getProductModelAndDescription = db.getProductModelAndDescription().then(results=>{
console.log(results);
// res.status(200).json({
// status: 'successfull',
// data: results.recordsets[0]
// }); // send all the data
res.render('productModelDescriptionView', { data: results.recordsets[0]});
});
}
exports.getProductModelAndDescriptionByID = function( req, res){
const {id} = req.params; // get id
res.status(200).json({
status: 'no implemented'
});
}
exports.createNewProductModelAndDescription = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.patchProductModelAndDescriptionById = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.deleteProductModelAndDescriptionByID = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id
res.status(200).json({
status: 'no implemented'
});
}