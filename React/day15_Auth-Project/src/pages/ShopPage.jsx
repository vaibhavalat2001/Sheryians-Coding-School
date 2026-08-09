import axios from "axios";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const ShopPage = () => {
  const [getProductData, setProductData] = useState([]);

  const productData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("Api errors: ", error);
    }
  };

  useEffect(() => {
    productData();
  }, []);

  return (
    <div className="h-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {getProductData.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-44 h-44 mt-5 object-contain group-hover:scale-110 transition-transform duration-300"
              />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full capitalize">
                {product.category}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col">
              {/* Title */}
              <h2 className="text-lg font-bold text-gray-800 line-clamp-2 h-14">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-lg">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{product.rating?.rate}</span>
                </div>

                <span className="text-sm text-gray-500">
                  {product.rating?.count} Reviews
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-6 mt-4 line-clamp-3 flex-grow">
                {product.description}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Price</p>
                  <h3 className="text-3xl font-bold text-indigo-600">
                    ${product.price}
                  </h3>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
                  Add to Cart
                </button>

                <button className="px-5 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShopPage;
