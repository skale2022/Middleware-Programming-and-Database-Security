const customerModel = require('../models/customerModel');
const APIFeatures = require('../databaseManager/loadDbContext');

exports.getCustomer = async (req, res) => {
    // get data from database
    const customer = await customerModel.find()
    res.status(200).json({
        status: 'Success',
        results: customer.length,
        data: {
            customer
        }
    })
    // res.send(`Hello World from customerLoan GET ${JSON.stringify(data)}`);
};

exports.getCustomerById = async (req, res) => {
    // get particular loan details from database
    const { id } = req.params;
    const customer = await customerModel.find({ _id: id });
    res.status(200).json({
        status: 'Success',
        results: customer.length,
        data: {
            customer
        }
    });
};

exports.getAllCustomers = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(customerModel.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const allCustomers = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: allCustomers.length,
            data: {
                allCustomers
            }
        });
    } catch (err) {
        res.send(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createCustomer = async (req, res) => {
    // get particular loan details from database
    const newCust = req.body;

    const newcustomer = {...newCust};

    try{
        const customer = await customerModel.create(newcustomer)
        res.status(200).json({
            status: 'Success',
            data: customer
            
        });
    }   catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.updateCustomerById = async (req, res) => {
    try {
        const customer = await customerModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: `success`,
            data: {
                customer
            }
        });
    } catch (err) {
        console.error(`error - ${JSON.stringify(err)}`)
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteCustomerById = async (req, res)=> {
    try {
        await customerModel.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getCustomerByName = async (req, res) => {
    try {
        const { name } = req.params;
        const customer = await customerModel.find({ customerName: name });

        if (customer.length === 0) {
            return res.status(404).json({
                status: 'fail',
                message: 'No loans found for the specified customer name.'
            });
        }

        res.status(200).json({
            status: 'success',
            results: customer.length,
            data: {
                customer
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            error: err.message
        });
    }
};
