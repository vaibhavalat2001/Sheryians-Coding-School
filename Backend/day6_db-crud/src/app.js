const express = require("express");
const connectDB = require("./config/db");
const notesRouter = require("./routes/notes.route") 

const app = express();
app.use(express.json())

connectDB();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "response successfully"
    })
})

// CREATE

app.use("/notes", notesRouter)

module.exports = app;
