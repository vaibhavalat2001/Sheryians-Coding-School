import { body, validationResult } from "express-validator";

export const productsValidator = [
  body("title")
    .exists()
    .withMessage("title is required")
    .bail()
    .isString()
    .withMessage("title must be a string")
    .bail()
    .isAlpha("en-US", { ignore: " -" })
    .withMessage(
      "tile must be an english capital and lower case character and ignored space and special character",
    )
    .bail()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("tilte length must be between 2 to 100 character"),

  body("description")
    .exists()
    .withMessage("description is required")
    .bail()
    .isString()
    .withMessage("description must be a string")
    .bail()
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage("desction must be between 20 to 500 character"),

  body("price.amount")
    .exists()
    .withMessage("price amount is required")
    .bail()
    .isFloat({ min: 0 })
    .withMessage("price amount must be a floting number and greter than 0"),

  body("price.currancy")
    .exists()
    .withMessage("price currency is required")
    .bail()
    .isString()
    .withMessage("price currancy must be a string")
    .isIn(["INR", "USD"])
    .withMessage("price currancy either INR or USD"),

  body("sizes")
    .exists()
    .withMessage("sizes is required")
    .isArray()
    .withMessage("sizes must be an array of object"),

  body("sizes.*.size")
    .exists()
    .withMessage("size must be present in every entry of sized array")
    .bail()
    .trim()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"])
    .withMessage("size can be one of these XS, S, M, L, XL, XXL"),

  body("sizes.*.stock")
    .exists()
    .withMessage("stock is required")
    .bail()
    .isInt({ min: 0 })
    .withMessage("size of stock must be an integer value"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "invalid request",
        errors: errors.array(),
      });
    }

    next();
  },
];
