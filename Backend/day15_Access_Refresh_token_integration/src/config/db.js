import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("error while connecting mongodb", error.message);
  }
};

export default connectDB;
