import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SignleProductApi from "../api/SignleProductApi";
import axios from "axios";

const ProductDeatails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const getSingleData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("Api Errors:", error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  console.log(singleProduct);
  return (
    <div>
      <div className=" bg-gray-100 py-10 px-5">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid sm:grid-cols-2 gap-10 p-8">
            {/* Product Image */}
            <div className="flex justify-center items-center bg-gray-50 rounded-xl p-8">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="h-96 object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              <span className="bg-blue-100 text-blue-700 w-fit px-3 py-1 rounded-full text-sm font-semibold capitalize">
                {singleProduct.category}
              </span>

              <h1 className="text-4xl max-sm:text-2xl font-bold mt-4">{singleProduct.title}</h1>

              <div className="flex items-center gap-3 mt-4">
                <span className="text-yellow-500 text-xl">
                  ⭐ {singleProduct.rating?.rate}
                </span>

                <span className="text-gray-500">
                  ({singleProduct.rating?.count} Reviews)
                </span>
              </div>

              <h2 className="text-4xl font-bold text-green-600 mt-6">
                ${singleProduct.price}
              </h2>

              <p className="text-gray-600 leading-5 mt-6">
                {singleProduct.description}
              </p>

              <div className="flex justify-between gap-4 mt-8">
                <button className="bg-black text-white px-8 max-sm:px-4 py-3 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>

                <button className="border-2 border-black px-8 max-sm:px-4 py-3 rounded-lg hover:bg-black hover:text-white transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatails;
