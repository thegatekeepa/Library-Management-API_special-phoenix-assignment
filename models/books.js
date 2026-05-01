const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    title: {type: String, required: true},
    isbn: {type: String, unique: true}, 
    authors: [{type: mongoose.Schema.Types.ObjectId, ref: "author"}],
    status: {type: String, 
        enum: ["IN", "OUT"],
        default: "IN"
    },
    borrowedBy: {type: mongoose.Schema.Types.ObjectId, ref: "students"},
    issuedBy: {type: mongoose.Schema.Types.ObjectId, ref: "libraryAttendant"},
    
    issuedDate: {type: Date, default: null},
    returnDate: {type: Date, default: null},
},
{timestamps: true});
  
 module.exports = mongoose.model("books", booksSchema);