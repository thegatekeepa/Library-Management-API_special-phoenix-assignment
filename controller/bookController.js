const Book = require("../models/books");

//Create Book -- Step 1 (Adding book to the Library)
exports.addBook = async (req, res) => {
    try {
        const newBook = await Book.create({...req.body, status: "IN",});
        return res.status(201).json({
            message: "New Book added successfully.", book: newBook});
    } catch (err) {
        console.error(err);
        res.status(400).json({error: err.message});
    }
};
//Get Books -- Step 2 (Display a book)
exports.getBooks = async (req, res) => {
    try {
        const showBooks = await Book.find()
         .populate("authors")
         .populate("addedBy")
         .populate("borrowedBy")
         .populate("issuedBy");
        
        res.json(showBooks);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message});
    }
};
//Get one book -- Step 2.2 (Show all books)
exports.getBook = async (req, res) => {
    try {
        const showBook = await Book.findById(req.params.id)
         .populate("authors")
         .populate("addedBy")
         .populate("borrowedBy")
         .populate("issuedBy");
        
         if(!showBook) {
            return res.status(404).json({message: "Invalid Book ID."});
         } return res.json(showBook);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message});
    }
};

//Borrow a book -- Step 3
exports.borrowBook = async (req, res) => {
    try{
        const {matricNo, attendantId, returnDate} = req.body;
        const rentedBook = await Book.findById(req.params.id);
        if (!rentedBook) {
            return res.status(400).json({message: "There is no Book with that ID"});
        }
        if (rentedBook.status === "OUT") {
            return res.status(400).json({message: "Book is currently on rent.", rentedBook});
        }
        rentedBook.status = "OUT";
        rentedBook.borrowedBy = matricNo;
        rentedBook.issuedBy = attendantId;
        rentedBook.returnDate = returnDate;

        await rentedBook.save();
        return res.status(200).json({message: "Book borrowed successfully.", rentedBook});
    } catch (err){
        console.error(err);
        return res.status(500).json({error: err.message});
    }
};
//Return a book -- Step 4
exports.returnBook = async (req, res) => {
  try {

    //const {matricNo, returnDate} = req.body;
    const returnedBook = await Book.findById(req.params.id);

    if (!returnedBook) {
      return res.status(404).json({message: "Book not found"}); // Check if book exists
    }
    if (returnedBook.status === "IN") {
      return res.status(400).json({message: "Book is back in the library"}); // Check if already returned
    }
    returnedBook.status = "IN";
    returnedBook.returnedBy = null;
    returnedBook.issuedBy = null;
    returnedBook.returnDate = null;

    await returnedBook.save();
    res.json({message: "Book returned successfully", returnedBook});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

//Update a Book -- Step 5
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true}
        );
        if(!updatedBook) {
            return res.status(404).json({message: "Invalid Book ID."});
        } res.json(updatedBook);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err.message});
    }
};
//Delete Book -- Step 6
exports.deleteBook = async (req, res) => {
    try{
        const deletedBook = await Book.findById(req.params.id) //not closed with (;) because of the conditions that follow.

        if (!deletedBook) {
            return res.status(404).json({message: "Invalid Book ID."});
        }
        if (deletedBook.status === "OUT") {
            return res.status(400).json({message: "Book still on rent."});
        }
        await Book.findByIdAndDelete(req.params.id);
        return res.json({message: "Book deleted successfully.", deletedBook});
    } catch (err){
        console.error(err);
        return res.status(500).json({error: err.message});
    }
};
