import { body, validationResult } from "express-validator";

// create products validator
export const productsValidator = [
//   body("images")
//     .exists()
//     .withMessage("images is required")
//     .bail()
//     .isLength({ min: 1, max: 5 })
//     .withMessage("images must be between 1 to 5"),

  body("title")
    .exists()
    .withMessage("title is required")
    .bail()
    .isString()
    .withMessage("title must be a string")
    .bail()
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("title must be english later, space and hyphen allow")
    .bail()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("tile must be between 2 to 50 character long"),

  body("description")
    .exists()
    .withMessage("description is required")
    .bail()
    .isString()
    .withMessage("description is required")
    .bail()
    .isLength({ min: 20, max: 500 })
    .withMessage("description must be between 20 to 500 character"),

  body("price.amount")
    .exists()
    .withMessage("price amount is required")
    .bail()
    .isFloat()
    .withMessage("price amount can have floating number"),

  body("price.currency")
    .exists()
    .withMessage("price currency is required")
    .bail()
    .isString()
    .withMessage("price currency must be a string")
    .bail()
    .isIn(["INR", "USD"])
    .withMessage("price currency can have these INR or USD")
    .bail()
    .isAlpha("en-US")
    .withMessage("price currency must be english later"),

  body("sizes")
    .exists()
    .withMessage("sizes is required")
    .bail()
    .isArray()
    .withMessage("size must be array of object")
    .bail()
    .isIn([{ size: "", stock: "" }])
    .withMessage("sizes must be array of object of size and stock"),

  body("sizes.*.size")
    .exists()
    .withMessage("size is required")
    .bail()
    .isString()
    .withMessage("size must be a string")
    .bail()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"])
    .withMessage("size must have one of these: xs, s, m, l, xl, xxl"),

  body("sizes.*.stock")
    .exists()
    .withMessage("stock is required")
    .bail()
    .isInt()
    .withMessage("stock must be integer value"),

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
