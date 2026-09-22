import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("name")
    .exists()
    .withMessage("name is required").bail()
    .isString()
    .withMessage("name must be string")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("name must be between 2 to 50 character"),
  body("email")
    .exists()
    .withMessage("email is required").bail()
    .trim()
    .isEmail()
    .withMessage("invalid email address"),
  body("password")
    .exists()
    .withMessage("password is required").bail()
    .isString()
    .withMessage("password must be string")
    .trim()
    .isLength({ min: 6 })
    .withMessage("password at least 6 character long"),

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
