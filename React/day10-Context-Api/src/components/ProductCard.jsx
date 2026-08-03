import React, { useContext } from "react";
import { Star } from "lucide-react";
import { MyProduct } from "../context/MyProduct";
import { toast, Bounce } from "react-toastify";

const ProductCard = ({ product }) => {
  const { setCartItem } = useContext(MyProduct);

  return (
    <div className="max-w-sm rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="h-64 p-5 flex items-center justify-center bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <p className="text-sm text-blue-600 font-medium capitalize">
          {product.category}
        </p>

        <h2 className="text-lg text-zinc-700 font-bold h-13 mt-2 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-black">
              {product.rating.rate}
            </span>
            <span className="text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-center mt-5">
          <button
            onClick={() => {
              setCartItem((pre) => [...pre, product]);
              toast.success("Item added in the cart ✅", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            }}
            className="bg-black active:scale-90 cursor-pointer w-full text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
