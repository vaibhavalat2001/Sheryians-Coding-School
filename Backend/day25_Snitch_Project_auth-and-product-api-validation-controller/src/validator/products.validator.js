import { body, validationResult } from "express-validator";

export const productsValidator = [
  body("images")
    .exists()
    .withMessage("images is required")
    .bail()
    .isString()
    .withMessage("images must be a string")
    .bail()
    .isLength({ min: 0, max: 5 })
    .withMessage("images length must be between 0 or 5"),

  body("title")
    .exists()
    .withMessage("title is required")
    .bail()
    .isString()
    .withMessage("title must be a string")
    .bail()
    .isAlpha("en-US", { ignore: " " })
    .withMessage(
      "title must be english capital and small case character including space",
    )
    .bail()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("title must be between 2 to 50 character long"),

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
    .withMessage("price amount must be a floating number")
    .bail(),

  body("price.currency")
    .exists()
    .withMessage("price currency is required")
    .bail()
    .isString()
    .withMessage("price currency must be a string")
    .bail()
    .isAlpha("en-US")
    .withMessage(
      "price currency must be a english capital and small character without space",
    )
    .bail()
    .isIn(["INR", "USD"])
    .withMessage("price currency must be INR or USD"),

  body("sizes")
    .exists()
    .withMessage("sizes is required")
    .bail()
    .isArray()
    .withMessage("sizes must be an array of object")
    .bail()
    .isIn([{ size: {}, stock: {} }])
    .withMessage("sizes must be array of object size and stock"),

  body("sizes.*.size")
    .exists()
    .withMessage("size is required")
    .bail()
    .isObject()
    .withMessage("size must be an object ")
    .bail()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"])
    .withMessage("size can have one of these xs, s, m, l, xl, xxl"),

  body("size.*.stock")
    .exists()
    .withMessage("stock is required")
    .bail()
    .isObject()
    .withMessage("stock must be an object")
    .bail()
    .isInt()
    .withMessage("stock must be an integer number"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors) {
      return res.status(400).json({
        message: "invalid request",
        errors: errors.array(),
      });
    }
    next();
  },
];
