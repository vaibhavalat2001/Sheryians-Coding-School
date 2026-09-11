import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

const userModel = mongoose.model("tokens", userSchema);

export default userModel;
