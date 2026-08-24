const express = require("express");
const NotesModel = require("./model/note.model")

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("I am connected");
})

app.post("/create" , async(req, res) => {
    const {title, description} = req.body;
    
    const newNote = await NotesModel.create({
        title, description
    })

    res.send({
        success: true,
        message: "Notes created successfully.",
        data: newNote
    })
})

module.exports = app;