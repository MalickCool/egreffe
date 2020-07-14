const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caisseSchema = new Schema({
    libelle: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model("caisses", caisseSchema);