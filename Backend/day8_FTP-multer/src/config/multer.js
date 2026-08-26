const multer = require("multer");

const localStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cd) => {
        cd(null, Date.now() + file.originalname)
    }
})


const memoryStorage = multer.memoryStorage()

const upload = multer({storage: memoryStorage})

module.exports = upload;