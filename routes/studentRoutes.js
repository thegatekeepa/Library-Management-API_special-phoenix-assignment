const express = require("express");
const router = express.Router();
const {
    createStudent, 
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent,
} = require("../controller/studentController");

router.post("/", createStudent); // CREATE
router.get("/", getStudents);    // READ ALL
router.get("/:id", getStudent);  // READ ONE
router.patch("/:id", updateStudent);   // UPDATE
router.delete("/:id", deleteStudent);   // DELETE


module.exports = router;