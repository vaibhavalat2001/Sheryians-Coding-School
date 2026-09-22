import { verifyAccessToken } from "../utils/generateTokens.js";

const authenticate = (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];
  if (!accessToken) {
    return res.status(400).json({
      message: "invalid access token",
    });
  }

  const decoded = verifyAccessToken(accessToken);

  req.user = decoded;

  next();
};

export default authenticate;
