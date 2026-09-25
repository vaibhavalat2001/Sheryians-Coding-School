import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  images: {
    type: [String],
    validate: {
      validator: (images) => images.length <= 5,
      message: "file can have contain most 5 images",
    },
  },

  title: {
    type: String,
    required: true,
    minLength: [2, "title at least 2 character long"],
    maxLength: [50, "title must be below 50 character"],
  },

  description: {
    type: String,
    required: true,
    minLength: [20, "description at least 20 character long"],
    maxLength: [500, "description must be below 500 character"],
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

const productsModel = mongoose.model("products", productsSchema);

export default productsModel;
