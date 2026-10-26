const express = require("express");
const routerFile = require("./routers/router.file");
const cors = require("cors");


const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}))

app.use("/", routerFile);

module.exports = app;
