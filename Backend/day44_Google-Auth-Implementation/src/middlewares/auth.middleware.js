import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import config from "../app/config.js";

const requireAuth = async (req, res, next) => {
  const token = req.cookies.refreshToken;

  if (!token) {     
    return res.status(404).json({
      message: "unauthorized, required refresh token",
    });
  }

  try {
    const { id } = jwt.verify(token, config.JWT_SECRET);
    req.user = await userModel.findById(id);
    if (!req.user) {
      return res.status(404).json({ message: "user not found" });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      message: "unauthorized, invalid or expired refresh token",
    });
  }
};

export default requireAuth;
