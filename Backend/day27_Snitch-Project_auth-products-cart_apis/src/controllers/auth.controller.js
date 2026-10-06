import userModel from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import { generateTokens, verifyRefreshToken } from "../utils/generateTokens.js";

//  @post   /api/auth/register
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const isValidEmail = await userModel.findOne({ email });

    if (isValidEmail) {
      return res.status(404).json({
        message: "user already registered of this email address",
      });
    }

    const user = await userModel.create({
      name,
      email,
      passwordHash: await bcrypt.hash(password, 13),
    });

    const { accessToken, refreshToken } = generateTokens(user._id, user.role);

    await userModel.findByIdAndUpdate(user._id, { refreshToken });

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(201).json({
      message: "user created successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in register api",
    });
  }
};

//  @post   /api/auth/login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "invalid email or password",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);

    if (!isValidPassword) {
      return res.status(401).json({
        message: "invalid email or password",
      });
    }

    const { accessToken, refreshToken } = generateTokens(user._id, user.role);

    await userModel.findByIdAndUpdate(user._id, { refreshToken });

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(200).json({
      message: "user logging successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in login api",
    });
  }
};

//  @get    /api/auth/me
export const getMe = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(401).json({
        message: "unauthorized or invalid user",
      });
    }

    return res.status(200).json({
      message: "user fetched successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in me api",
    });
  }
};

//  @post   /api/auth/refresh
export const refresh = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(404).json({
      message: "refresh token required",
    });
  }

  try {
    const { id, role } = verifyRefreshToken(refreshToken);

    const user = await userModel.findById(id);

    if (refreshToken != user.refreshToken) {
      await userModel.findByIdAndUpdate(user._id, { refreshToken: null });
      return res.status(400).json({
        message: "invalid or expired refresh token please login again",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      id,
      role,
    );

    await userModel.findByIdAndUpdate(id, { refreshToken: newRefreshToken });

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

    return res.status(200).json({
      message: "token generated successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in refresh token",
    });
  }
};
