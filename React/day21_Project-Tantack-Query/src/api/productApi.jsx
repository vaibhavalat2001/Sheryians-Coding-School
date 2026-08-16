import { axiosInstance } from "../config/axiosInstance";

export const getProductsDataApi = async () => {
  try {
    let res = await axiosInstance.get("/products?limit=198");
    return res.data.products;
  } catch (error) {
    console.log("api error: ", error);
  }
};
