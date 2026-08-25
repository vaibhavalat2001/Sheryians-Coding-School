const NotesModel = require("../models/notes.model");

// CREATE
const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;
    let newNotes = await NotesModel.create(
      { title, description }
    );
    return res.status(201).json({
      message: "Notes created successfully",
      newNotes: newNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "invalid server error",
    });
  }
};

// READ single
const getSingleNotesController = async (req, res) => {
  try {
    let id = req.params.id;
    let singleNotes = await NotesModel.findById(id);
    return res.status(200).json({
      message: "Single notes fetched successfully",
      singleNotes: singleNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

// READ
const getAllNotesController = async (req, res) => {
  try {
    let allNotes = await NotesModel.find();
    return res.status(200).json({
      message: "All notes fetched successfully",
      allNotes: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

// UPDATE
const updateNotesController = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body
    let updatedNotes = await NotesModel.findByIdAndUpdate(id, body, {new: true});
    return res.status(200).json({
      message: "Notes updated successfully",
      updatedNotes: updatedNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

// DELETE
const deleteNotesController = async (req, res) => {
  try {
    let id = req.params.id;
    let deletedNotes = await NotesModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Notes deleted successfully",
      deletedNotes: deletedNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal serverl error",
    });
  }
};

module.exports = {
  createNotesController,
  getSingleNotesController,
  getAllNotesController,
  updateNotesController,
  deleteNotesController,
};
