const express = require("express");
const { createNotesController, getSingleNotesController, getAllNotesController, updateNotesController, deleteNotesController } = require("../controllers/notes.controller");

const router = express.Router();

// CREATE
router.post("/create", createNotesController);

// READ all
router.get("/allNotes", getAllNotesController);

// READ single
router.get("/:id", getSingleNotesController);


// UPDATE
router.put("/:id", updateNotesController);

// DELETE
router.delete("/:id", deleteNotesController);

module.exports = router;   