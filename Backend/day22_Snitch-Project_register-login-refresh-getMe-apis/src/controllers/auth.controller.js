import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens, readRefreshToken } from "../utils/generateToken.js";

//  ### @post /api/auth/register
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const isValidEmail = await userModel.findOne({ email });

    if (isValidEmail) {
      return res.status(400).josn({
        message: "user already exists with this email address",
        errors: {
          path: "email",
          msg: "user already exists with this email address",
        },
      });
    }

    const user = await userModel.create({
      name,
      email,
      passwordHash: await bcrypt.hash(password, 13),
    });
   
    const { accessToken, refreshToken } = generateTokens(user._id, user.role);

    await userModel.findByIdAndUpdate(user._id, { refreshToken });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    return res.status(201).json({
      message: "user registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
    });
  }
};

//  ### @get  /api/auth/login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        messag: "invalid email or password",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);

    if (!isValidPassword) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    const { accessToken, refreshToken } = generateTokens(user._id, user.role);

    await userModel.findByIdAndUpdate(user._id, { refreshToken });

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(200).json({
      message: "user loggedin successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid login data",
    });
  }
};

//  ### @get  /api/auth/refreshToken
export const refresh = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(400).json({
      message: "refresh token required",
    });
  }

  try {
    const { id } = readRefreshToken(refreshToken);
    const user = await userModel.findById(id);

    if (refreshToken != user.refreshToken) {
      await userModel.findByIdAndUpdate(user._id, { refreshToken: null });

      return res.status(401).json({
        message: "refresh token mismatch",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      id,
      user.role,
    );

    await userModel.findByIdAndUpdate(id, {
      refreshtoken: newRefreshToken,
    });

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

    return res.status(200).json({
      message: "generated new refresh token",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid refresh token",
    });
  }
};

//  ### @get  /api/auth/me
export const getMe = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(401).json({
        message: "unauthorized or expired access token",
      });
    }

    return res.status(200).json({
      message: "user data fetched successfully",
      data: {
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
