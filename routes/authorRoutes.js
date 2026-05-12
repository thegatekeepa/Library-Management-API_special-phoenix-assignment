const express = require("express");
const router = express.Router();

const {
    createAuthor,
    getAuthors,
    getAuthor,
    updateAuthor,
    deleteAuthor
} = require("../controller/authorController");

router.post("/", createAuthor); // CREATE
router.get("/", getAuthors);    // READ ALL
router.get("/:id", getAuthor);  // READ ONE
router.patch("/:id", updateAuthor);   // UPDATE
router.delete("/:id", deleteAuthor);   // DELETE

module.exports = router;