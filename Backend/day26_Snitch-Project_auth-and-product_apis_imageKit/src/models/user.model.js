import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [2, "name must be at least 2 character"],
      maxLength: [50, "name must be less than 50 character"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
      minLength: [6, "password must be at least 6 character"],
    },
    role: {
      type: String,
      enum: ["user", "seller"],
      default: "user",
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("users", userSchema);

export default userModel;
