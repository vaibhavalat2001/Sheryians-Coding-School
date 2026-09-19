import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isAlreadyExists = await userModel.findOne({ email });

    if (isAlreadyExists) {
      return res.status(400).json({
        message: "user of this email already exists",
        error: {
          field: email,
          message: "user of this email already exists.",
        },
      });
    }

    const user = await userModel.create({
      name,
      email,
      passwordHash: await bcrypt.hash(password, 13),
    });

    const { accessToken, refreshToken } = generateToken({ id: user._id });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(201).json({
      message: "user registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: {
        accessToken,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};
