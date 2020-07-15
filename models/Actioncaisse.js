const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const caisse = require('./Caisse');
const user = require('./User');
const moment = require('moment');

const actioncaisseSchema = new Schema({
    dateouverture: {
        type: Date,
        default: moment().format("YYYY-MM-DD")
    },

    solde: {
        type: Number,
        default: 0
    },

    etat: {
        type: Number,
        default: 0
    },

    commentaire: {
        type: String,
        required: false
    },

    caisse: { 
        type: Schema.Types.ObjectId,
        ref: caisse,
        required: true
    },

    user: { 
        type: Schema.Types.ObjectId, 
        ref: user,
        required: true
    }
});

module.exports = Actioncaisse = mongoose.model("actioncaisse", actioncaisseSchema);