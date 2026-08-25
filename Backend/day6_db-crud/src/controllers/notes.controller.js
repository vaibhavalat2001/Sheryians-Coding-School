const NotesModel = require("../models/notes.model");

// CREATE
const createNotesController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = await NotesModel.create({ title, description });

    res.status(201).json({
      message: "Notes created successfully",
      note: newNote,
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
    const notes = await NotesModel.find();
    res.status(200).json({
      message: "Notes fetched successfully",
      notes: notes,  
    });
  } catch (error) {
    return res.status(500).json({
      message: "invalid serverl error",
    });
  }
};


// UPDATE
const updateNotesController = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const updatedNotes = await NotesModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.status(200).json({
      message: "Updatemd successfully",
      updated: updatedNotes,
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
        const id = req.params.id;
        const notes = await NotesModel.findByIdAndDelete(id)
        return res.status(200).json({
            message: "Note delete successfully",
            deleted: notes
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal serverl error"
        })
    }
}

module.exports = {
  createNotesController,
  getAllNotesController,
  updateNotesController,
  deleteNotesController
};
