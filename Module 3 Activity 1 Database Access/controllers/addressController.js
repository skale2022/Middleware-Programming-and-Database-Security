// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023

const db = require('../config/db.manager');
exports.getAllAddresses = function (req, res) {
const addressProduct = db.getAddress().then(results=>{
console.log(results);
// res.status(200).json({
// status: 'successfull',
// data: results.recordsets[0]
// }); // send all the data
res.render('addressView', { data: results.recordsets[0]});
});
}
exports.getAddressByID = function( req, res){
const {id} = req.params; // get id
res.status(200).json({
status: 'no implemented'
});
}
exports.createNewAddress = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.patchAddressById = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.deleteAddressByID = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id
res.status(200).json({
status: 'no implemented'
});
}