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
import authenticate from "../middleware/authenticate.js";

const router = Router();

/*
 *method:   post
 *route:    /api/auth/register
 *access:   all users
 *validation:   name, email, password validation using express validator
 *description:  user first register
 */
router.post("/register", registerValidator, register);

/*
 *method:   post
 *route:    /api/auth/login
 *access:   only registered use
 *validation:   email and password
 *description:  for checking how is accessing resources
 */
router.post("/login", loginValidator, login);

/*
 *method:   get
 *route:    /api/auth/me
 *access:   only authenticate user
 *description:  send accessToken for identify which use doing request to server
 */
router.get("/me", authenticate, getMe);

/*
 *method:    post
 *router:    /api/auth/refresh
 *access:    protected
 *description:   when access token expired then use refresh api for new access and refresh token
 */
router.post("/refresh", refresh);

export default router;
