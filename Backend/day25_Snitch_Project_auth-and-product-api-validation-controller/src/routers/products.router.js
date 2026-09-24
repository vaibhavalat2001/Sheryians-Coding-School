import { Router } from "express";
import { authenticate } from "../middleware/authenticate.js";
import multer from "multer";
import { memoryStorage } from "multer";
import { productsValidator } from "../validator/products.validator.js";
import { createProduct } from "../controllers/products.controller.js";

const router = Router();

const upload = multer({
  storage: memoryStorage(),
  limits: {
    files: 5,
    fileSize: 1 * 1024 * 1024, // 1MB  // mb * kb * b
  },
});

//  ### @post   /api/products
//  if (seller !== req.user.role)
//  multer({storage: memoryStorage})
//  create controllers

router.post(
  "/",

  // get access token and check it's valid or not
  authenticate,

  // check product creating seller or not
  (req, res, next) => {
    if ("seller" != req.user.role) {
      return res.status(403).json({
        message: "user not authorized to create product",
      });
    }
    next();
  },

  // used multer middleware form read req.body data from form data
  upload.array("images"),

  // parse json formate into array and object
  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price));
    req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes));
    next();
  },

  // images, title, description, price:{amount, currency}, sizes:[{size, stock}] validator
  productsValidator,

  // create product controller
  createProduct,
);

export default router;
