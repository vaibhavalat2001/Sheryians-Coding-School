import { body, validationResult } from "express-validator";

//  cart validator
export const cartValidator = [
  body("productId")
    .exists()
    .withMessage("product ID is required")
    .bail()
    .isString()
    .withMessage("product ID must be string")
    .bail()
    .isMongoId()
    .withMessage("product ID must be valid mongo id"),

  body("quantity")
    .exists()
    .withMessage("quantity is required")
    .bail()
    .isInt({min: 1})
    .withMessage("quantity must be an integer number greater then 0"),

  body("size")
    .exists()
    .withMessage("size is required")
    .bail()
    .isString()
    .withMessage("size must be string")
    .bail()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"])
    .withMessage("size must be one of these XS, S, M, L, XL, XXL"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];
