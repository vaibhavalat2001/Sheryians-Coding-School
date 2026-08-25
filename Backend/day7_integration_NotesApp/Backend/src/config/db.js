const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/")
        console.log("Mongodb connected");
    } catch (error) {
        console.log("error while connect db", error)
    }
}

module.exports = connectDB;