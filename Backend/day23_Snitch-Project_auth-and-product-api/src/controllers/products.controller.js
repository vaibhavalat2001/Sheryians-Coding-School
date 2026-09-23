import productsModel from "../models/products.model.js";

export const products = async (req, res) => {
  const { image, title, description, price } = req.body;

  try {
    const product = await productsModel.create({
      image,
      title,
      description,
      price: { amount, currance },
      sizes: [{ size, stock }],
    });

    return res.status(200).json({
      message: "product listed successfully",
      data: {
        product,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid product credentials",
    });
  }
};
