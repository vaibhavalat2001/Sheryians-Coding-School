import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
      // minLenght: [6, "6 character required"],
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

const userModel = mongoose.model("users", userSchema);

export default userModel;
