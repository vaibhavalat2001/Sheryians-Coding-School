import { readAccessToken } from "../utils/generateToken.js";

export const authenticate = (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];
  if (!accessToken) {
    return res.status(401).json({
      message: "access token required",
    });
  }
  try {
    const decoded = readAccessToken(accessToken);

    req.user = decoded;

    next();  
  } catch (error) {
    return res.status(400).json({
      message: "invalid or expired access token",
    });
  }
};
