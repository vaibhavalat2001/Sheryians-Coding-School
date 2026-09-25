import productsModel from "../models/products.model.js";
import { upload } from "../services/storage.service.js";

//  create product  @post   /api/products
export const createProduct = async (req, res) => {
  const { title, description, price, sizes } = req.body;
  const images = req.files;

  try {
    const url = [];

    for (let img of images) {
      const data = await upload(img.buffer, img.originalname);
      url.push(data.url);
    }

    const product = await productsModel.create({
      images: url,
      title,
      description,
      price,
      sizes,
      seller: req.user.id,
    });

    return res.status(201).json({
      message: "products created successfully",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in create product api",
    });
  }
};

//  get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    return res.status(200).json({
      message: "all products fetched successfully",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in get all product api",
    });
  }
};
