const Author = require("../models/author");

//Create Author -- Step 1
exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

//Get All Author -- Step 2
exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
//Get Single Author -- Step 3
exports.getAuthor = async (req, res) => {
    try {
        const foundAuthor = await Author.findById(req.params.id);
        if(!foundAuthor) {
            return res.status(404).json({message: "Invalid Author ID"});
        } res.json(foundAuthor);
    } catch (err) {
        res.status(500).json({message: "Internal server error."});
    };
};
//Update Author -- Step 4
exports.updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate (
            req.params.id,
            req.body,
            {new: true}
        );
        if(!updatedAuthor) {
            return res.status(404).json({message: "Author not found."});
        } res.json(updatedAuthor);
    } catch (err) {
        res.status(500).json({message:"Internal server error"});
    };
};
//Delete Author -- Step 5
exports.deleteAuthor = async (req, res) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id);

        if(!deletedAuthor) {
            return res.status(404).json({message: "Invalid Author Id, so Author not found."});
        };
        res.json({message: "Author deleted successfully"});
    } catch {
        res.status(500).json({message:"Internal server error"});
    }
};