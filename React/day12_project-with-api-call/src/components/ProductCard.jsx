import React, { useContext } from "react";
import { Star } from "lucide-react";
import { toast, Bounce } from "react-toastify";
import { MyStore } from "../context/MyContext.jsx";

const ProductCard = ({ product, isInCart }) => {
  const { cartItem, setCartItem, setCount, incQuantity, decQuantity} = useContext(MyStore);

  const addToCart = () => {
    setCartItem((pre) => [...pre, { ...product, quantity: 1 }]);
  };

  if (isInCart !== undefined) {
    if (isInCart.quantity === 0) {
        isInCart = false;
    }
  }

  return (
    <div className="max-w-sm rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="h-64 p-5 flex items-center justify-center bg-gray-100">
        <img
          src={product.images[0]}
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
              {product.rating}
            </span>
            <span className="text-gray-500">
              ({product.reviews[0].rating} reviews)
            </span>
          </div>
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-center mt-5">
          {isInCart ? (
            <button className="bg-amber-500 w-full flex gap-10 justify-center items-center text-4xl text-white px-4 rounded-lg">
              <span onClick={() => decQuantity(product.id)} className="w-10 cursor-pointer active:scale-90 ">-</span>
              <span className="">{isInCart.quantity}</span>
              <span
                onClick={() => incQuantity(product.id)}
                className="w-10 cursor-pointer active:scale-90"
              >
                +
              </span>
            </button>
          ) : (
            <button
              onClick={() => {
                addToCart();
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
              className="bg-blue-400 active:scale-90 cursor-pointer w-full text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
