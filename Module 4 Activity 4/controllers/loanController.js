const loanModel = require('../models/loanModel');
const APIFeatures = require('../databaseManager/loadDbContext');

exports.getLoan = async (req, res) => {
    // get data from database
    const customerloan = await loanModel.find()
    res.status(200).json({
        status: 'Success',
        results: customerloan.length,
        data: {
            customerloan
        }
    })
    // res.send(`Hello World from customerLoan GET ${JSON.stringify(data)}`);
};

exports.getLoanById = async (req, res) => {
    // get particular loan details from database
    const { id } = req.params;
    const customerloan = await loanModel.find({ _id: id });
    res.status(200).json({
        status: 'Success',
        results: customerloan.length,
        data: {
            customerloan
        }
    });
};

exports.getAllLoans = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(loanModel.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const customerloan = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: customerloan.length,
            data: {
                customerloan
            }
        });
    } catch (err) {
        res.send(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createLoan = async (req, res) => {
    // get particular loan details from database
    const newLoan = req.body;
    const dateTime = new Date().toISOString();

    const newcustomerLoan = {...newLoan};

    try{
        const customerloan = await loanModel.create(newcustomerLoan)
        res.status(200).json({
            status: 'Success',
            data: customerloan
            
        });
    }   catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.updateLoanById = async (req, res) => {
    try {
        const customerloan = await loanModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: `success`,
            data: {
                customerloan
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

exports.deleteLoanById = async (req, res)=> {
    try {
        await loanModel.findByIdAndDelete(req.params.id);

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
