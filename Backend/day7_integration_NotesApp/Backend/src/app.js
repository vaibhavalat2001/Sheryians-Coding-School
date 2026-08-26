const express = require("express");
const connectDB = require("./config/db");
const notesRouter = require("./routes/notes.routes");

const app = express();
app.use(express.json());
connectDB();    

app.get("/", (req, res) => {
    res.send("Backend connected");
})

app.use("/notes", notesRouter)

module.exports = app;
