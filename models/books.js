const mongoose = require("mongoose");
const Author = require("./author");

const booksSchema = new mongoose.Schema({
    title: {type: String, required: true},
    isbn: {type: String, unique: true}, 
    authors: [{type: mongoose.Schema.Types.ObjectId, ref: "author"}],
    status: {type: String, 
        enum: ["IN", "OUT"],
        default: "IN"
    },
    addedBy: {type: mongoose.Schema.Types.ObjectId, ref: "author"},
    borrowedBy: {type: mongoose.Schema.Types.ObjectId, ref: "students", default: null},
    issuedBy: {type: mongoose.Schema.Types.ObjectId, ref: "libraryAttendant", default: null},
    
    issuedDate: {type: Date, default: null},
    returnDate: {type: Date, default: null},
    createdAt: {type: Date, default: Date.now}
},
{timestamps: true});
  
 module.exports = mongoose.model("books", booksSchema);
