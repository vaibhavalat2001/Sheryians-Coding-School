import jwt from "jsonwebtoken";
import userModel from "../models/auth.models.js";
import bcrypt from "bcryptjs";

// api connection
export const connect = async (req, res) => {
  try {
    return res.status(200).json({
      message: "Connected successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};

// READ
export const getUser = async (req, res) => {
  try {
    const user = req.user;

    return res.status(200).json({
      message: "User get successfully",
      user: {
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};

// CREATE
export const createController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    return res.status(201).json({
      message: "Data created successfully",
      token,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};

// Login controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(isValidPassword)

    if (!isValidPassword) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    return res.status(200).json({
      message: "user loggedIn successfully",
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "invalid server error",
    });
  }
};
