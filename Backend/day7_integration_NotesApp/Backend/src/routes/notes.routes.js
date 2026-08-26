const express = require("express");
const { createNotesController, getSingleNotesController, getAllNotesController, updateNotesController, deleteNotesController, deleteAllNotesController } = require("../controllers/notes.controller");

const router = express.Router();

// CREATE
router.post("/create", createNotesController);

// READ ALL
router.get("/allNotes", getAllNotesController);

// READ SINGLE
router.get("/:id", getSingleNotesController);

// UPDATE
router.put("/:id", updateNotesController);

// DELETE ALL
router.delete("/allDelete", deleteAllNotesController);

// DELETE
router.delete("/:id", deleteNotesController);

module.exports = router;   