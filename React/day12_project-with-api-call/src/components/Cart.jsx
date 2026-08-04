import React, { createContext, useContext } from "react";
import { Trash2 } from "lucide-react";
import { toast, Bounce } from "react-toastify";
import { MyStore } from "../context/MyContext";

const Cart = () => {
  const { cartItem, setCartItem, incQuantity, decQuantity } =
    useContext(MyStore);

  const removeFromCart = (cart) => {
    setCartItem(cartItem.filter((item) => item.id !== cart.id));
  };

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl max-sm:text-xl max-sm:text-center font-bold mb-6">
        🛒 Shopping Cart ({cartItem.length})
      </h1>

      {cartItem.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <h2 className="text-2xl text-gray-500">Your cartItem is empty.</h2>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-5">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-5 bg-white rounded-xl shadow-md p-5"
              >
                {" "}
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      removeFromCart(item);
                      toast.error("Item removed", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                      });
                    }}
                    className="flex active:scale-90 items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                {/* Product Image */}
                <div className="w-full sm:w-36 h-36 flex justify-center items-center">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>
                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="font-bold text-lg line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {item.description}
                  </p>

                  <p className="text-blue-600 text-sm mt-2 capitalize">
                    {item.category}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-green-600">
                      ${item.price}
                    </span>
                    <button className="bg-amber-400 flex text-4xl gap-10 justify-center items-center text-black px-4 rounded-lg">
                      <span
                        onClick={() => decQuantity(item.id)}
                        className="text-red-500 w-10 cursor-pointer active:scale-90 text-5xl"
                      >
                        -
                      </span>
                      <span className="">{item.quantity}</span>
                      <span
                        onClick={() => incQuantity(item.id)}
                        className="text-green-500 w-10 cursor-pointer active:scale-90"
                      >
                        +
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 rounded-xl shadow-md p-6 h-fit sticky top-5">
            <h2 className="text-2xl font-bold mb-5">Order Summary</h2>

            <div className="flex justify-between mb-3">
              <span>Items</span>
              <span>{cartItem.length}</span>
            </div>

            <div className="flex justify-between text-xl font-bold border-t pt-4">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
