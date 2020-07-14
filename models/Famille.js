const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familleSchema = new Schema({
    libelle: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model("familles", familleSchema);