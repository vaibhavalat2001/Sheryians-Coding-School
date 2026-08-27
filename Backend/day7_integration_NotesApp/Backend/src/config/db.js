const mongoose = require("mongoose");

const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("MongoDB already connected");
        return;
    }

    try {
        await mongoose.connect(
           "mongodb+srv://vaibhavgalat123_db_user:vaibhav123@cohort-3-cluster.2ajtckf.mongodb.net/notesapp?appName=cohort-3-Cluster",
            {
                serverSelectionTimeoutMS: 10000,
            }
        );

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error.message);

        throw error;
    }
};

module.exports = connectDB;