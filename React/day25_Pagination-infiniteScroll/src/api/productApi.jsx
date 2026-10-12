import axios from "axios";

export const getAllProducts = async (limit, skip) => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/products/?limit=${limit}&skip=${limit * skip}`,
    );
    return res.data;
  } catch (error) {
    console.error("Product API Error:", error.response?.status, error.message);

    throw error;
  }
};

export const getInfiniteProducts = async (limit, pageParams) => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${pageParams}`,
    );
    return res.data;
  } catch (error) {
    console.error("Product API Error:", error.response?.status, error.message);

    throw error;
  }
};
