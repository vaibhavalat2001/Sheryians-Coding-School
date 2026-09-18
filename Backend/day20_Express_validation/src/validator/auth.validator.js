import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("email")
    .exists()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email address"),
  body("phone")
    .exists()
    .withMessage("phone number is required")
    .isMobilePhone("en-IN")
    .withMessage("invalid phone number"),
  body("password")
    .exists()
    .withMessage("password is required")
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
