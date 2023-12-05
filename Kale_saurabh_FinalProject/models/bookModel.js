const mongoose = require('mongoose');

const bookExchangeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    exchangeType: {
        type: String,
        enum: ['borrow', 'trade'],
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'unavailable'],
        default: 'available'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    requests: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            status: {
                type: String,
                enum: ['pending', 'accepted'],
                default: 'pending',
            },
        },
    ],
}, { timestamps: true });

const BookExchange = mongoose.model('BookExchange', bookExchangeSchema);

module.exports = BookExchange;
