import { Router } from "express";
import { productValidator } from "../validator/products.validator.js";
import { products } from "../controllers/products.controller.js";

const router = Router();

//  @post   /api/products

// router.post("/", productValidator, products);

export default router;
