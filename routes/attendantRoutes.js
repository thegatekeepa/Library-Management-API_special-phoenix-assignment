const express = require("express");
const router = express.Router();
const {
    createAttendant, 
    getAttendants,
    getAttendant,
    updateAttendant,
    deleteAttendant,
} = require("../controller/attendantController");

router.post("/", createAttendant); // CREATE
router.get("/", getAttendants);    // READ ALL
router.get("/:id", getAttendant);  // READ ONE
router.patch("/:id", updateAttendant);   // UPDATE
router.delete("/:id", deleteAttendant);   // DELETE


module.exports = router;