import mongoose from "mongoose";

const userShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
      minLength: [6, "password at least 6 charater long"],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "seller"],
    },
    refreshToken: {  
      type: String,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("users", userShema);

export default userModel;
