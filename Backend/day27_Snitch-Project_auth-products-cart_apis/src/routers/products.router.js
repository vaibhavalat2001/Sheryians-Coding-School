import { json, Router } from "express";
import { productsValidator } from "../validator/products.validator.js";
import {
  createProduct,
  getAllProducts,
} from "../controllers/products.controller.js";
import multer, { memoryStorage } from "multer";
import authenticate from "../middleware/authenticate.js";

const router = Router();

const upload = multer({
  storage: memoryStorage(),
  limits: {
    files: 5,
    fileSize: 1 * 1024 * 1024, //  mb * kb * b
  },
});

/*
 *method:    post
 *route:    /api/products
 *access:   seller only
 *description:  only seller create product
 */
router.post(
  "/",

  // authenticate valid access token or not
  authenticate,

  // check is seller creating product or not
  (req, res, next) => {
    if (req.user.role != "seller") {
      return res.status(400).json({
        message: "user not allow to create product",
      });
    }
    next();
  },

  upload.array("images"),

  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price));
    req.body?.price && (req.body.sizes = JSON.parse(req.body.sizes));
    next();
  },

  productsValidator,

  createProduct,
);

/*
 *method:  get
 *route: /api/products/
 *access:  for all
 *description: fetched all products
 */
router.get("/", authenticate, getAllProducts);

export default router;
