import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  images: {
    type: {
      type: string,
    },
    validate: {
      validator: (images) => images.length <= 5,
      message: "a product can have at moset 5 images",
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
    maxLenth: 500,
  },

  price: [
    {
      amount: {
        type: Number,
        required: true,
      },
      currancy: {
        type: String,
        enum: ["INR", "USD"],
        default: "INR",
      },
    },
  ],

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

const productsModel = mongoose.model("products", productsSchema);

export default productsModel;
