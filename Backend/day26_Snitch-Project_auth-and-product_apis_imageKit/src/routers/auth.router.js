import { Router } from "express";
import {
  loginValidator,
  registerValidator,
} from "../validator/auth.validator.js";
import {
  getMe,
  login,
  refresh,
  register,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

//  @post   /api/auth/register
router.post("/register", registerValidator, register);

//  @post   /api/auth/login
router.post("/login", loginValidator, login);

//  @get   /api/auth/me
router.get("/me", authenticate, getMe);

//  @post   /api/auth/refresh
router.post("/refresh", refresh);

export default router;
