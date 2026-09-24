import mongoose, { Types } from "mongoose";
import userModel from "./auth.model";

const productsSchema = new mongoose.Schema({
  images: {
    type: {
      type: string,
    },
    validate: {
      validator: (images) => images.length <= 5,
      msg: "a product can have at most 5 images", 
    },
  },

  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },

  description: {
    type: String,
    required: true,
    minLength: 20,
    maxLength: 500,
  },

  price: {
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["INR", "USD"],
      default: "INR",
    },
  },
  sizes: [
    {
      size: {
        type: String,
        enum: ["XS", "S", "M", "L", "XL", "XXL"],
        required: true,
      },
      stock: {
        type: Number,
        min: 0,
        default: 0,
      },
    },
  ],

  seller: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    required: true,
  },
});
