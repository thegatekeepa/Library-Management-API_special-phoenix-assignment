const Attendant = require("../models/libraryAttendant");
const router = require("../routes/attendantRoutes");
//create Attendant
exports.createAttendant = async (req, res) => {
    try {
        const newAttendant = await Attendant.create(req.body);
        res.status(201).json(newAttendant);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
//Show all Attendants
exports.getAttendants = async (req, res) => {
    try {
        const showAttendants = await Attendant.find();
        res.json(showAttendants);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
//Show one Attendant
exports.getAttendant = async (req, res) => {
    try {
        const foundAttendant = await Attendant.findById(req.params.id);
        if(!foundAttendant) {
            return res.status(404).json({error: err.message});
        } res.json(foundAttendant);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
//Update Attendants
exports.updateAttendant = async (req, res) => {
    try {
        const updatedAttendant = await Attendant.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if(!updatedAttendant) {
            return res.status(404).json({error: err.message});
        } res.json(updatedAttendant);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
//Delete Attendants
exports.deleteAttendant = async (req, res) => {
    try {
        const deletedAttendant = await Attendant.findByIdAndDelete(req.params.id);
    if(!deletedAttendant) {
        return res.status(404).json({error: err.message});
    };
    return res.status(200).json({message: "Attendant deleted succesfully.", deletedAttendant});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
