import express from "express";
import {
  connect,
  createController,
  getUser,
  loginController,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", connect);

router.get("/me", authenticate, getUser);

router.post("/login", loginController);

router.post("/register", createController);

export default router;
