const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    dob: {type: String, required: true},
    email: {type: String, unique: true},
    matricNo: {type: String, unique: true},
},
{timestamps: true});

module.exports = mongoose.model("students", studentsSchema);