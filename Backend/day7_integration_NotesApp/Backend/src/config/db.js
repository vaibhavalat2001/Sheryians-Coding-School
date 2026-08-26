const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://vaibhavgalat123_db_user:vaibhav123@cohort-3-cluster.2ajtckf.mongodb.net/?appName=cohort-3-Cluster")
        console.log("Mongodb connected");
    } catch (error) {
        console.log("error while connect db", error)
    }
}

module.exports = connectDB;