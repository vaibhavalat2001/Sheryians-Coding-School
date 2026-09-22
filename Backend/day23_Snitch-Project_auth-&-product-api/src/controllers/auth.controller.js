import userModel from "../models/user.model.js";
import { generateTokens, verifyRefreshToken } from "../utils/generateTokens.js";
import bcrypt from "bcryptjs";

//  @post   /api/auth/register
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isEmailValid = await userModel.findOne({ email });

    if (isEmailValid) {
      return res.status(400).json({
        message: "user already exist of this email address",
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
      message: "invalid register fields",
    });
  }
};

//  @post   /api/auth/login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    const isValidPassword = bcrypt.compare(password, user.passwordHash);

    if (!isValidPassword) {
      return res.status(400).json({
        message: "invalid email and password",
      });
    }

    const { accessToken, refreshToken } = generateTokens(user._id, user.role);

    await userModel.findByIdAndUpdate(user._id, { refreshToken });

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(200).json({
      message: "user loggdin successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid login credential",
    });
  }
};

//  @post   /api/auth/refresh
export const refresh = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(400).json({
      message: "invalid or expired refresh token",
    });
  }

  try {
    const { id } = verifyRefreshToken(refreshToken);

    const user = await userModel.findById(id);

    if (!user) {
      return res.status(400).json({
        message: "user not existe.",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      user._id,
      user.role,
    );
    await userModel.findByIdAndUpdate(id, { refreshToken });

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

    return res.status(200).json({
      message: "token generated successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid or expired refresh token",
    });
  }
};

//  @post   /api/auth/getMe
export const getMe = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(400).json({
        message: "user not matched",
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
      message: "invalid or expired access token",
    });
  }
};
