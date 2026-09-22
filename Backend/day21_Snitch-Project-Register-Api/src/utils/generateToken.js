import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateToken = (userId) => {
  const accessToken = jwt.sign({ id: userId }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ id: userId }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: "7day",
  });

  return { accessToken, refreshToken };
};

export default generateToken;
