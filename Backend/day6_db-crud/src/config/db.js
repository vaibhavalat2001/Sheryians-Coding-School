const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017")
        console.log("Database Connected")
    } catch (error) {
        console.log("error while connecting db:", error)
    
    }
}

module.exports = connectDB;