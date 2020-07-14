const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const famille = require('./Famille');

const acteSchema = new Schema({
    libelle: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true
    },

    typeprix: {
        type: String,
        required: true
    },

    prix: {
        type: Number,
        required: true
    },

    familles: { 
        type: Schema.Types.ObjectId, 
        ref: famille,
        required: true
    },

    etat: {
        type: Number,
        required: true
    },

    duree: {
        type: Number,
        required: true
    }
});

module.exports = Acte = mongoose.model("actes", acteSchema);