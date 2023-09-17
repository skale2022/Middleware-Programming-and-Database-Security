// Name: Saurabh Kale
// ASUID: 1223450319
// Date: 9/17/2023
const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);
async function getSalesProducts(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT TOP(20)
    productId,
    name,
    productNumber,
    color
    listPrice
    FROM
    salesLT.Product
    `);
    console.log(`Returned SQL results`);
    return results;
}

async function getUser(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT TOP(20)
    CustomerID,
    FirstName,
    MiddleName,
    LastName,
    EmailAddress,
    Phone,
    CompanyName
    FROM
    SalesLT.Customer;
    `);
    console.log(`Returned SQL results`);
    return results;
}

async function getProductModel(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`SELECT TOP(20)
    Name,
    CatalogDescription,
    rowguid,
    ModifiedDate
    FROM
    salesLT.ProductModel`);
    console.log(`Returned SQL results`);
    return results;
}

async function getAddress(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`  SELECT TOP(20)
    AddressLine1,
    City,
    StateProvince,
    CountryRegion,
    PostalCode
    FROM
    salesLT.Address`
    );
    console.log(`Returned SQL results`);
    return results;
}

async function getProductModelAndDescription(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`SELECT TOP(20)
    SalesLT.Product.ProductID,
    SalesLT.Product.Name,
    SalesLT.Product.ProductModelID,
    SalesLT.ProductModel.Name,
    SalesLT.Product.ProductCategoryID,
    SalesLT.ProductModelProductDescription.Culture
    FROM SalesLT.Product
    JOIN SalesLT.ProductModel
    ON SalesLT.Product.ProductModelID = SalesLT.ProductModel.ProductModelID
    JOIN SalesLT.ProductModelProductDescription
    ON SalesLT.Product.ProductCategoryID = SalesLT.ProductModelProductDescription.ProductModelID;`
    );
    console.log(`Returned SQL results`);
    return results;
}





//Export
module.exports = {getSalesProducts :getSalesProducts, getUser:getUser, getProductModel:getProductModel, getAddress: getAddress, getProductModelAndDescription: getProductModelAndDescription};