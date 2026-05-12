const express = require("express");
const router = express.Router();

const {
    addBook, 
    getBook,
    getBooks,
    borrowBook,
    deleteBook
} = require("../controller/bookController");

router.post("/", addBook); // CREATE
router.get("/:id", getBook);    // READ ALL
router.get("/", getBooks);  // READ ONE
router.patch("/:id", borrowBook);   // UPDATE
router.delete("/:id", deleteBook);   // DELETE


module.exports = router;