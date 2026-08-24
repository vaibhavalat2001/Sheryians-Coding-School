const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vaibhavgalat123_db_user:vaibhav123@cohort-3-cluster.2ajtckf.mongodb.net/",
    );
    console.log("Mongodb connected:");
  } catch (error) {
    console.log("Error while connecting database: ", error);
  }
};

module.exports = connectDb;