const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const acte = require('./Acte');
const actioncaisse = require('./Actioncaisse');

const moment = require('moment');

const venteSchema = new Schema({
    datevente: {
        type: Date,
        default: moment().format("YYYY-MM-DD")
    },

    nombre: {
        type: Number,
        required: true
    },

    nom: {
        type: String,
        required: false
    },

    montant: {
        type: Number,
        required: true
    },

    typereglement: {
        type: String,
        required: true
    },

    acte: { 
        type: Schema.Types.ObjectId, 
        ref: acte,
        required: true
    },

    actioncaisse: { 
        type: Schema.Types.ObjectId, 
        ref: actioncaisse,
        required: true
    },

    etat: {
        type: Number,
        required: true
    },

    pu: {
        type: Number,
        required: true
    }
});

module.exports = Vente = mongoose.model("vente", venteSchema);