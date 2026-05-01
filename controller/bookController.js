const Book = require("../models/books");

//Create Author -- Step 1
exports.borrowBook = async (req, res) => {
    try{
        const {studentId, attendantId, returnDate} = req.body;
        const rentBook = await findById(req.params.id);

        if (!rentBook) {
            return res.status(400).json({message: "Invalid Book ID"});
        }
        if (rentBook.status === "OUT") {
            return res.status(400).json({message: "Book has been rented out to Another"});
        }
        rentBook.status = "OUT",
        rentBook.borrowedBy = studentId,
        rentBook.issuedBy = attendantId,
        rentBook.returnDate = returnDate,

        await rentBook.save();
        return res.status(200).json({message: "Book Rented successfully."});
    } catch (err){
        return res.status(500).json({error: "an error occured."});
        process.exit(1);
    }
};
//Get Authors -- Step 2

//Get One Author -- Step 3

//Update Author -- Step 4

//Delete Authors -- Step 5