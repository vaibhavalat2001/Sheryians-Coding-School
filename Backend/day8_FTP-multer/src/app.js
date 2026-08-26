const express = require("express");
const routeFile = require("./routes/file.routes");
const app = express();
app.use(express.json());
app.use("/", routeFile);

app.get("/", (req, res) => {
  res.send("Backend connected");
});

module.exports = app;
