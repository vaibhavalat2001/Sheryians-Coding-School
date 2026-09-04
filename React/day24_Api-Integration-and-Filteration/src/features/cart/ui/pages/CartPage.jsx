import React from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      category: "Men's Clothing",
      price: 799,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      id: 2,
      name: "Classic Sneakers",
      category: "Footwear",
      price: 1499,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 3,
      name: "Leather Backpack",
      category: "Accessories",
      price: 1299,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 3000 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#0d0d0d] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Review your items and proceed to checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-[#262626] bg-[#151515] p-4 sm:flex-row sm:items-center"
              >
                {/* Product Image */}
                <div className="h-40 w-full shrink-0 overflow-hidden rounded-xl bg-[#202020] sm:h-32 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-500">{item.category}</p>

                    <h2 className="mt-1 text-lg font-semibold">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-lg font-bold text-purple-400">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center rounded-lg border border-[#333] bg-[#101010]">
                      <button className="p-2 text-gray-400 transition hover:text-white">
                        <Minus size={16} />
                      </button>

                      <span className="min-w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button className="p-2 text-gray-400 transition hover:text-white">
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove */}
                    <button className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-400">
                      <Trash2 size={17} />
                      <span className="hidden sm:block">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <button className="mt-2 flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-white">
              <ShoppingBag size={18} />
              Continue Shopping
            </button>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-[#262626] bg-[#151515] p-5 sm:p-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="my-6 space-y-4 border-b border-[#292929] pb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-400">Free</span>
                  ) : (
                    `₹${shipping}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Tax</span>
                <span>Included</span>
              </div>
            </div>

            {/* Total */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-semibold">Total</span>

              <span className="text-2xl font-bold text-purple-400">
                ₹{total.toLocaleString()}
              </span>
            </div>

            {/* Checkout Button */}
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-3.5 font-semibold transition hover:bg-purple-700 active:scale-[0.98]">
              Proceed to Checkout
              <ArrowRight size={18} />
            </button>

            {/* Secure Payment */}
            <p className="mt-4 text-center text-xs text-gray-500">
              🔒 Secure checkout • Safe & encrypted payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;