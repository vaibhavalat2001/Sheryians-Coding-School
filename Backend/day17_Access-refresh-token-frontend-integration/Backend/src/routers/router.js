import { Router } from "express";
import userModel from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/token.js";

const router = Router();


// connection
router.get("/", (req, res) => {
  res.send("connected server");
});

/*
 * @post /api/auth/register
 */

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(404).json({
      message: "unauthorized, all fileds required",
    });
  }

  try {
    const isValidEmail = await userModel.findOne({ email });

    if (isValidEmail) {
      return res.status(401).json({
        message: "unauthorized, email already exists",
        errors: {
          email: "email already exists",
        },
      });
    }

    const user = await userModel.create({
      name,
      email,
      passwordHash: await bcrypt.hash(password, 13),
    });

    const { accessToken, refreshToken } = generateTokens(user._id);

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "user registered successfully",
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

export default router;

/*
 * @get /api/auth/me
 */

router.get("/me", async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
console.log(accessToken)
  if (!accessToken) {
    return res.status(404).json({
      message: "accessToken not found",
    });
  }

  try {
    const decoded = verifyAccessToken(accessToken);

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    return res.status(200).json({
      messag: "user matched successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "unauthorized, invalid or expired access token",
    });
  }
});

/*
 * @post     /api/auth/login
 */

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      message: "email, password not found",
    });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "unauthorized, email not exist",
        errors: {
          email: "email not exist",
        },
      });
    }

    const compare = await bcrypt.compare(password, user.passwordHash);

    if (!compare) {
      return res.status(401).json({
        message: "unauthorized, password wrong",
        errors: {
          password: "passwrod is wrong",
        },
      });
    }

    const { accessToken, refreshToken } = generateTokens(user._id);

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
      message: "unauthorized, invalid user",
    });
  }
});

/*
 *   @post /api/auth/refresh
 */

router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(404).json({
      message: "refresh token not found",
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

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      user._id,
    );

    user.refreshToken = newRefreshToken;
    await user.save();

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "Generated new access and refresh token",
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
