const express = require("express");
const upload = require("../config/multer");

const router = express.Router();

// middleware controller
router.post(
  "/middleware",
  (req, res, next) => {
    let body = req.body;
    console.log("form-data", body);
    res.send("i am middleware");
    next();
  },
  (req, res) => {
    try {
      console.log("middleware");
    } catch (error) {
      return res.status(500).json({
        message: "Invalid server error",
      });
    }
  },
);

// multer
router.post("/", upload.single("image"), (req, res) => {
  try {
    let file = req.file;
    let body = req.body;
    console.log("file data", file);
    console.log("body data", body);
    return res.status(200).json({
        message: "image uploaded successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message: "Invalid server error",
    });
  }
});

module.exports = router;
