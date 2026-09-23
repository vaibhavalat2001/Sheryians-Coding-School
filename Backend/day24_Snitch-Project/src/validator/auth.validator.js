import { body, validationResult } from "express-validator";
import { error } from "node:console";

//  register validation
export const registerValidator = [
  body("name")
    .exists()
    .withMessage("name is required")
    .bail()
    .isString()
    .withMessage("name must be a string")
    .bail()
    .isAlpha("en-US", { ignore: " -" })
    .withMessage(
      "name must be english capital and small case and content space and underscore",
    ),

  body("email")
    .exists()
    .withMessage("email is required")
    .bail()
    .isString()
    .withMessage("email must be a string")
    .bail()
    .trim()
    .isEmail()
    .withMessage("invalid email address"),

  body("password")
    .exists()
    .withMessage("password is required")
    .bail()
    .trim()
    .isLength({ min: 6 })
    .withMessage("password at least 6 character long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "invalid requrest",
        errors: errors.array(),
      });
    }
    next();
  },
];

//  login validation
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
