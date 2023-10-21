const ledgerModel = require('../models/ledgerModel');
const APIFeatures = require('../databaseManager/loadDbContext');

exports.getLedger = async (req, res) => {
    // get data from database
    const customerLedger = await ledgerModel.find()
    res.status(200).json({
        status: 'Success',
        results: customerLedger.length,
        data: {
            customerLedger
        }
    })
    // res.send(`Hello World from customerLoan GET ${JSON.stringify(data)}`);
};

exports.getLedgerById = async (req, res) => {
    // get particular loan details from database
    const { id } = req.params;
    const customerLedger = await ledgerModel.find({ _id: id });
    res.status(200).json({
        status: 'Success',
        results: customerLedger.length,
        data: {
            customerLedger
        }
    });
};

exports.getAllLedger = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(ledgerModel.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const customerLedger = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: customerLedger.length,
            data: {
                customerLedger
            }
        });
    } catch (err) {
        res.send(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createLedger = async (req, res) => {
    // get particular loan details from database
    const newledgerData = req.body;

    const newLedger = newledgerData;

    try{
        const customerLedger = await ledgerModel.create(newLedger)
        res.status(200).json({
            status: 'Success',
            data: customerLedger
            
        });
    }   catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.updateLedgerById = async (req, res) => {
    try {
        const customerloan = await ledgerModel.findByIdAndUpdate(req.params.id, req.body, {
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

exports.deleteLedgerById = async (req, res)=> {
    try {
        await ledgerModel.findByIdAndDelete(req.params.id);

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
