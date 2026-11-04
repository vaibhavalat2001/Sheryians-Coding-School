import { Router } from "express";
import passport from "../config/passport.js";
import config from "../app/config.js";
import jwt from "jsonwebtoken";
import requireAuth from "../middlewares/auth.middleware.js";
import userModel from "../models/user.model.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("continue with google account");
});

// step 1-2: start the flow -> passport redirect to Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
    session: false,
  }),
);

// step 6-15: Google sends the user ?code=
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${config.CLIENT_URL}/login?error=google`,
  }),
  async (req, res) => {
    const user = req.user;
    const email = user.emails[0].value;

    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
      const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
        expiresIn: "1hr",
      });
      return res.status(200).json({ token });
    }

    user = await userModel.create({
      googleId: user._id,
      name: user.displayName,
      email: user.emails[0].value,
      avatar: user.photos?.[0]?.value,
    });
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: "1hr",
    });
    return res.status(200).json({ token });
  },
);

router.get("/me", requireAuth, (req, res) => {
  res.json({ user: req.user });
});

router.post("/logout", (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ message: "user logged out" });
});
export default router;
