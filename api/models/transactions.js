const mongoose = require('mongoose');

const transactionsSchemas = new mongoose.Schema({

    price: {
        type: Number
    },

    userEmail: {
        type: String
    },

    itemsBought: [
        {
            product: {
                type: String
            },

            quantity: {
                type: Number
            }
        }
    ],

    status: {
        type: String,
        enum: {
            values: [
                'Pending',
                'Approved',
                'Cancelled'
            ]
        },
        default: 'Pending'
    },

    shipping: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transactions', transactionsSchemas);