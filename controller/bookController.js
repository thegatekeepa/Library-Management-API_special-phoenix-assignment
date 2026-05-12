const Book = require("../models/books");

//Create Book -- Step 1 (Adding book to the Library)
exports.addBook = async (req, res) => {
    try {
        const {authorId, attendantId} = req.body;

        const newBook = await Book.create({
            ...req.body,
            status: "IN",
            addedBy: authorId,
            verifiedBy: attendantId,
        });
        
        return res.status(201).json({
            message: "New Book added successfully.", book: newBook});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Could not process request."});
    }
};
//Get One Book -- Step 2 (Display a book)
exports.getBook = async (req, res) => {
    try {
        const displayBook = await Book.findById(req.params.id);
        if(!displayBook) {
            return res.status(404).json({message: "There is no Book with that ID"});
        } res.json(displayBook);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "A server error occured."});
    }
};

//Get Books -- Step 2.2 (Show all books)
exports.getBooks = async (req, res) => {
    try {
        const showBooks = await Book.find();
        return res.json(showBooks);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "A server error occured."});
    }
};

//Update Book -- Step 3 (borrow a book)
exports.borrowBook = async (req, res) => {
    try{
        const {matricNo, attendantId, returnDate} = req.body;
        const rentBook = await Book.findById(req.params.id);

        if (!rentBook) {
            return res.status(400).json({message: "There is no Book with that ID"});
        }
        if (rentBook.status === "OUT") {
            return res.status(400).json({message: "Book has been rented out to another student."});
        }
        rentBook.status = "OUT";
        rentBook.borrowedBy = matricNo;
        rentBook.issuedBy = attendantId;
        rentBook.returnDate = returnDate;

        await rentBook.save();
        return res.status(200).json({message: "Book borrowed successfully."});
    } catch (err){
        console.error(err);
        return res.status(500).json({error: "an error occured."});
    }
};
//Delete Book -- Step 4
exports.deleteBook = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({message: "The ID you entered is not assigned to any Book"});
        }
        if (book.status === "OUT") {
            return res.status(400).json({message: "This book is still on rent. Please call it back before Deletion."});
        }
        await Book.findByIdAndDelete(req.params.id);
        return res.json({message: "Book deleted successfully."});
    } catch (err){
        console.error(err);
        return res.status(500).json({error: "an error occured."});
    }
};