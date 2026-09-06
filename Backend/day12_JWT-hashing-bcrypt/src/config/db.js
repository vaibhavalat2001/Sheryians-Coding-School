import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("error while connecting Mongodb: ", error.message);
  }
};
  
export default connectDB;
