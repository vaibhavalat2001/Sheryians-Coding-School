const mongoose = require("mongoose");

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    cachedConnection = await mongoose.connect(
      "mongodb+srv://vaibhavgalat123_db_user:vaibhav123@cohort-3-cluster.2ajtckf.mongodb.net/notesapp?appName=cohort-3-Cluster"
    );

    console.log("MongoDB connected successfully");

    return cachedConnection;
  } catch (error) {
    cachedConnection = null;

    console.error("MongoDB connection failed:", error);

    throw error;
  }
};

module.exports = connectDB;
