import config from "./config.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("Error while connecting mongodb");
  }
};

export default connectDB;
