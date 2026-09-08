import config from "./config.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Mongodb connected successfully");
  } catch (error) {  
    console.log("error while connection mongodb: ", error.message);
  }
};

export default connectDB;
