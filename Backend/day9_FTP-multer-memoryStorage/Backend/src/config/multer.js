const multer = require("multer");

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
})

const memoryStorage = multer.memoryStorage()

const upload = multer({storage: memoryStorage})

module.exports = upload