const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    fonction: {
        type: String,
        required: true
    },

    niveau: {
        type: Number,
        required: true
    },

    etat: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);