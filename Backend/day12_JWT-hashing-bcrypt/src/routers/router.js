import express from "express"
import { getUser } from "../controllers/auth.controller.js";

const router = express.Router();


router.get("/api", getUser);

// router.post("/api/auth/register", );

export default router