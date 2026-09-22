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
      minLenght: [6, "6 character required"],
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

const userModel = mongoose.model("user", userSchema);

export default userModel;
