import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("error while connecting mongodb");
  }
}

export default connectDB;
