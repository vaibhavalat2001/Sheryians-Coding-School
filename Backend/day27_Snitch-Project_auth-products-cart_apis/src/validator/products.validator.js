import { body, validationResult } from "express-validator";

// product validator
export const productsValidator = [
  body("title")
    .exists()
    .withMessage("title is required")
    .bail()
    .isString()
    .withMessage("title must be a string")
    .bail()
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("title must be english character space and hyphen allow")
    .bail()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("title must be between 2 to 50 character"),

  body("description")
    .exists()
    .withMessage("description is required")
    .bail()
    .isString()
    .withMessage("description must be a string")
    .bail()
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage("description must be between 20 to 500 character"),

  body("price.amount")
    .exists()
    .withMessage("price amount is required")
    .bail()
    .isFloat()
    .withMessage("price amount can be floating number"),

  body("price.currency")
    .exists()
    .withMessage("price currency is required")
    .bail()
    .isString()
    .withMessage("price currency must be a string")
    .bail()
    .isIn(["INR", "USD"])
    .withMessage("price currency one of these INR OR USD"),

  body("sizes")
    .exists()
    .withMessage("sizes is required")
    .bail()
    .isArray()
    .withMessage("sizes must be an array")
    .bail()
    .isIn([{ size: {}, stock: {} }])
    .withMessage("sizes must be an array of object size and stock"),

  body("sizes.*.size")
    .exists()
    .withMessage("size is required")
    .bail()
    .isString()
    .withMessage("size must be a string")
    .bail()
    .isAlpha("en-US")
    .withMessage("size must be english characters")
    .bail()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"])
    .withMessage("size must be one of these xs, s, m, l xl, xxl"),

  body("sizes.*.stock")
    .exists()
    .withMessage("stock is required")
    .bail()
    .isInt()
    .withMessage("stock must be an integer value"),

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
