const express = require("express");
const connectDB = require("./config/db");
const notesRouter = require("./routes/notes.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://nottivo.vercel.app"
}))



app.get("/", (req, res) => {
    res.send("Nottivo Backend is live 🚀");
})

app.get("/notes", (req, res) => {
    res.send("Backend Connected")
})

app.use("/notes", notesRouter)

module.exports = app;
