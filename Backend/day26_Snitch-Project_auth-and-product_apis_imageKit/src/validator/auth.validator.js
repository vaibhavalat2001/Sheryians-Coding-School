import { body, validationResult } from "express-validator";

// register validator
export const registerValidator = [
  body("name")
    .exists()
    .withMessage("name is required")
    .bail()
    .isString()
    .withMessage("name must be a string")
    .bail()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("name must be english character and space is allow")
    .bail()
    .isLength({ min: 2, max: 50 })
    .withMessage("name must be between 2 to 50 character long"),
  body("email")
    .exists()
    .withMessage("email is required")
    .bail()
    .isString()
    .withMessage("email must be a string")
    .bail()
    .isEmail()
    .withMessage("invalid email address"),

  body("password")
    .exists()
    .withMessage("password is required")
    .bail()
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

// login validator
export const loginValidator = [
  body("email")
    .exists()
    .withMessage("email is required")
    .bail()
    .isString()
    .withMessage("email must be a string")
    .bail()
    .isEmail()
    .withMessage("invalid email address"),

  body("password")
    .exists()
    .withMessage("password is required")
    .bail()
    .trim()
    .isLength()
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
