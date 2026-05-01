const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    bio: {type: String, required: true}, 
    dob: {type: String, required: true},
}, 
{timestamps: true});

module.exports = mongoose.model("author", authorSchema);