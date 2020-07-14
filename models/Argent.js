const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const argentSchema = new Schema({
    valeur: {
        type: Number,
        required: true
    },

    typee: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model("argents", argentSchema);