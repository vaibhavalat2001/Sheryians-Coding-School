import cartModel from "../models/cart.model";
import productsModel from "../models/products.model.js";

//  @post   /api/cart/
export const addInCart = async (req, res) => {
  const { productId, quantity, size } = req.body;

  try {
    const isProduct = await productsModel.findById(productId);

    if (!isProduct) {
        return res.status(400).json({
            
        })
    }
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in cart api",
    });
  }
};
