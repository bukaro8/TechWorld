const mongoose = require('mongoose');

const ventasSchema = new mongoose.Schema({

    nombreProduct: {
        type: String
    },

    cantidadCompras: {
        type: Number
    },

    tipoCompras: {
        type: String
    },

    ventas: {
        type: String
    },

    favoritos: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Ventas', ventasSchema);
