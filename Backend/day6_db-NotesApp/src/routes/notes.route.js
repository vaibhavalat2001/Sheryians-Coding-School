const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  updateNotesController,
  deleteNotesController,
  getSingleNotesController,
} = require("../controllers/notes.controller");
const NotesModel = require("../models/notes.model");
const router = express.Router();

// CREATE
router.post("/create", createNotesController);

// READ
router.get("/allNotes", getAllNotesController);

router.get("/:id", getSingleNotesController);

// UPDATE
router.put("/:id", updateNotesController);

router.delete("/:id", deleteNotesController)

module.exports = router;
