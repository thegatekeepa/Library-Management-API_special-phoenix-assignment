const Student = require("../models/students");
const router = require("../routes/studentRoutes");
//create Student
exports.createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
//Get all Students
exports.getStudents = async (req, res) => {
    try {
        const showStudents = await Student.find();
        res.json(showStudents);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
//Get one student
exports.getStudent = async (req, res) => {
    try {
        const foundStudent = await Student.findById(req.params.id);
        if(!foundStudent) {
            return res.status(404).json({error: err.message});
        } res.json(foundStudent);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
//Update students
exports.updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if(!updatedStudent) {
            return res.status(404).json({error: err.message});
        } res.json(updatedStudent);
    } catch (err) {
        res.status(500).json({error: err.message});
    };
};
//Delete students
exports.deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if(!deletedStudent) {
        return res.status(404).json({error: err.message});
    };
    return res.status(200).json({message: "Student deleted succesfully.", deletedStudent});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
