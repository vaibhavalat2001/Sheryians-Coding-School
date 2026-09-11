import express from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/authToken.js";
import { decode } from "jsonwebtoken";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "request send successfully",
  });
});

/*
 * @post /api/auth/register
 */

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(401).json({
      message: "unauthorized, all fields are required",
    });
  }

  try {
    const isValidEmail = await userModel.findOne({ email });
    if (isValidEmail) {
      return res.status(401).json({
        message: "unauthorized, user already exists",
        errors: {
          path: "email",
          message: "user already exists",
        },
      });
    }

    const user = await userModel.create({
      name,
      email,
      passwordHash: await bcrypt.hash(password, 13),
    });

    const { accessToken, refreshToken } = generateTokens({ userId: user._id });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    return res.status(201).json({
      message: "user created successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
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
});

/*
 * @post /api/auth/login
 */

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      message: "unauthorized, all fields are required",
    });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "unauthorized, email id not matched",
      });
    }

    const passCompared = await bcrypt.compare(password, user.passwordHash);
    if (!passCompared) {
      return res.status(401).json({
        message: "unauthorized, incorrect password",
      });
    }

    const { accessToken, refreshToken } = generateTokens({ userId: user._id });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "user loggedin successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
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
});

/*
 * @get /api/auth/me
 */

router.get("/me", async (req, res) => {
  const accessToken = req.headers.authorization.split(" ")[1];

  if (!accessToken) {
    return res.status(404).json({
      message: "unauthorized, access token not found.",
    });
  }

  try {
    const decoded = verifyAccessToken(accessToken);
    const user = await userModel.findById(decoded.id);

    return res.status(200).json({
      message: "user fetched successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "unauthorized, invalid or expired access token",
    });
  }
});

/*
 * @post api/auth/refresh
 */

router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "unauthorized, refresh token not found",
    });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);
    const user = await userModel.findById(decoded.id);

    if (refreshToken !== user.refreshToken) {
      user.refreshToken = null;
      await user.save();

      return res.status(401).json({
        message: "unauthorized, invalid or expired refresh token",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      userId: user._id,
    });

    user.refreshToken = newRefreshToken;
    await user.save();

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "token generated successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
      token: {
        accessToken,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "unauthorized, invalid or expired refresh token",
    });
  }
});

export default router;
