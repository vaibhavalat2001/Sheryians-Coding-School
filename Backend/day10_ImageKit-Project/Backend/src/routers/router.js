import express from "express";
import { createController, getController } from "../controllers/controller.js";
import upload from "../config/multer.js";

const router = express.Router();

router.get("/allimg", getController);

router.post("/upload", upload.array("images"), createController);

export default router;
