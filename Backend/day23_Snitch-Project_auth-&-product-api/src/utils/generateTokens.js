import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const generateTokens = (id, role) => {
  const accessToken = jwt.sign({ id, role }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ id, role }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: "7day",
  });

  return { accessToken, refreshToken };
};

export const verifyAccessToken = (accessToken) => {
  const decoded = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET);
  
  return decoded;
};

export const verifyRefreshToken = (refreshToken) => {
  const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);

  return decoded;
};
