import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { email, phone, password } = req.body;
  
//   const errors = [];

//   if (!email) {
//     errors.push({
//       field: "email",
//       message: "email is required",
//     });
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     errors.push({
//       field: "email",
//       message: "invalid email",
//     });
//   }

//   if (!phone) {
//     errors.push({
//       field: "phone",
//       message: "phone number is required",
//     });
//   }

//   const phoneRegex = /^[6-9]\d{9}$/;
//   if (!phoneRegex.test(phone)) {
//     errors.push({
//       field: "phone",
//       message: "invalid phone number",
//     });
//   }

//   if (!password && !password.trim()) {
//     errors.push({
//       field: "password",
//       message: "password is required",
//     });
//   }

//   if (password.trim().length < 6) {
//     errors.push({
//       field: "password",
//       message: "password must containe minimum 6 character",
//     });
//   }

//   if (errors.length > 0) {
//     return res.status(404).json({
//       message: "invalid request",
//       errors,
//     });
//   }

  try {
    const user = await userModel.create({
      email,
      phone,
      passwordHash: await bcrypt.hash(password, 13),
    });

    return res.status(200).json({
      message: "user created successfully",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};
