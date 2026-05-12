const express = require("express");
const router = express.Router();

const {
    addBook, 
    getBooks,
    getBook,
    borrowBook,
    returnBook,
    updateBook,
    deleteBook
} = require("../controller/bookController");

router.post("/", addBook); // CREATE
router.get("/", getBooks);    // READ ALL
router.get("/:id", getBook);  // READ ONE
router.post("/:id/borrow", borrowBook); //BORROW BOOK
router.post("/:id/return", returnBook); // RETURN BOOK
router.patch("/:id", updateBook); //UPDATE BOOK
router.delete("/:id", deleteBook);   // DELETE


module.exports = router;
//ChatGPT Help