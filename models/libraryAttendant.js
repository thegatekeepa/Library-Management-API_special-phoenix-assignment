const mongoose = require("mongoose");

const attendantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    attendantId: {type: String, unique: true},
},
{timestamps: true});

module.exports = mongoose.model("libraryAttendant", attendantSchema);
