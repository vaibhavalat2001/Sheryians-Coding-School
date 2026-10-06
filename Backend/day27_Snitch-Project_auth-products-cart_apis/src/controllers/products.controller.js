import productsModel from "../models/products.model.js";
import upload from "../services/storage.service.js";

//  @post /api/products
export const createProduct = async (req, res) => {
  const { title, description, price, sizes } = req.body;
  const images = req.files;

  try {
    const urls = [];
    for (let img of images) {
      const url = await upload(img.buffer, img.originalname);
      urls.push(url.url);
    }
    const product = await productsModel.create({
      images: urls,
      title,
      description,
      price,
      sizes,
      seller: req.user.id,
    });

    return res.status(201).json({
      message: "product created successfully",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in products api",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    return res.status(200).json({
      message: "all products fetched successfully",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in getAll product api",
    });
  }
};
