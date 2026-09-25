import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/products.controller.js";
import { productsValidator } from "../validator/products.validator.js";
import multer, { memoryStorage } from "multer";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

const upload = multer({
  storage: memoryStorage(),  
  limits: {
    files: 5,
    fileSize: 1 * 1024 * 1024, // 1MB  // mb * kb * b
  },
});

//  @post   /api/product
router.post(
  "/",
  // authenticate: who are you
  authenticate,

  // check is seller uploading product or not
  (req, res, next) => {
    if (req.user.role !== "seller") {
      return res.status(403).json({
        message: "user is not authorize to create products",
      });
    }
    next();
  },

  // used multer for getting data from form-data
  upload.array("images"),

  // parse json data into array or object
  (req, res, next) => {
    req.body.price = JSON.parse(req.body.price);
    req.body.sizes = JSON.parse(req.body.sizes);
    next();
  },

  // check validation on product data
  productsValidator,

  // product controller
  createProduct,
);

//  @post   /api/product
router.get("/", authenticate, getAllProducts);

export default router;
