import { body, validationResult } from "express-validator";

export const productValidator = [
  body("title")
    .exists()
    .withMessage("title is requried")
    .bail()
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("title must be english small and capital case")
    .bail()
    .isString()
    .withMessage("title must be a string")
    .bail()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("title must be between 2 to 100 character"),

  body("description")
    .exists()
    .withMessage("description required")
    .bail()
    .trim()
    .isLength({ min: 20, max: 500 })
    .withMessage("description must be between 20 to 500 character"),

  body("price.amount")
    .exists()
    .withMessage("price is required")
    .bail()
    .isFloat({ min: 0 })
    .withMessage("price amount must be a floating number and greate than 0"),

  body("price.currancy")
    .exists()
    .withMessage("currancey is required")
    .bail()
    .isString()
    .withMessage("price currency must be a string")
    .bail()
    .isAlpha("en-US")
    .withMessage(
      "price currency must be english small and capital case without space",
    )
    .bail()
    .isIn(["INR", "USD"])
    .withMessage("currency either INR or USD"),

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
