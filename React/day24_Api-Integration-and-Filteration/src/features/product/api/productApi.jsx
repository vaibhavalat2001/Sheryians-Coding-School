import { api } from "../../../config/api";

export const getProducts = async (search) => {
  let url = search ? `/products/search?q=${search}` : "/products?limit=194";
  try {
    let res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log("product api error: ", error);
  }
};

export const getProductsCategory = async () => {
  try {
    let res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("product api category error: ", error);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    let res = await api.get(`/products/category/${category}`);
    return res.data;
  } catch (error) {
    console.log("Get products by category error: ", error);
  }
};
