const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  updateNotesController,
  deleteNotesController,
} = require("../controllers/notes.controller");
const NotesModel = require("../models/notes.model");
const router = express.Router();

// CREATE
router.post("/create", createNotesController);

// READ
router.get("/allNotes", getAllNotesController);

// UPDATE
router.put("/:id", updateNotesController);

router.delete("/:id", deleteNotesController)

module.exports = router;
