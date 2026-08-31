const express = require("express");
const upload = require("../config/multer");
const createFiles = require("../controller/file.controller");

const router = express.Router();

router.post("/create", upload.array("images"), createFiles)


module.exports = router;