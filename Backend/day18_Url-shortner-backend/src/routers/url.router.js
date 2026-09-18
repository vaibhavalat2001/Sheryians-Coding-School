import { Router } from "express";
import {
  allUrls,
  createShortUrl,
  deleteUrl,
} from "../controllers/url.controller.js";

const router = Router();

/*  ### @post   /api/urls/  */
router.post("/", createShortUrl);

/*  ### @get    /api/urls   */
router.get("/", allUrls);

/*  ### @delete /api/urls   */
router.delete("/:id", deleteUrl);

export default router;
