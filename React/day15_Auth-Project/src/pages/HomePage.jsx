import React from "react";
import { ShoppingBag, Truck, ShieldCheck, Headphones } from "lucide-react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 items-center gap-12">
        <div>
          <span className="inline-block text-center bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full font-medium">
            🛍️ Welcome to{" "}
            <span
              className="
    inline-block
    text-4xl font-bold
    bg-linear-to-r from-amber-400 via-emerald-400 to-fuchsia-500
    bg-clip-text text-transparent
    bg-size[200%_200%]
    animate-gradient
    transition-all duration-500
    hover:scale-110
    hover:-rotate-1
    hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]
    cursor-pointer
    animate-pulse
  "
            >
              ShopVexa
            </span>
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mt-6 leading-tight">
            Discover the Best Products
            <span className="text-indigo-600"> at Amazing Prices</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Explore thousands of products including electronics, fashion,
            jewelry, and much more. Shop with confidence and enjoy fast
            delivery.
          </p>

          <div className="flex gap-5 mt-10">
            <Link
              to="/main/shop"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 max-sm:px-4 py-4 rounded-xl font-semibold transition shadow-lg"
            >
              Shop Now
            </Link>

            <Link
              to="/main/contact"
              className="border-2 border-indigo-600 text-indigo-600 max-sm:px-4 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900"
            alt="Shopping"
            className="rounded-3xl shadow-2xl w-full max-w-xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <ShoppingBag className="mx-auto text-indigo-600 mb-4" size={42} />
            <h3 className="text-xl font-bold">Quality Products</h3>
            <p className="text-gray-500 mt-3">
              Carefully selected products from trusted brands.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <Truck className="mx-auto text-indigo-600 mb-4" size={42} />
            <h3 className="text-xl font-bold">Fast Delivery</h3>
            <p className="text-gray-500 mt-3">
              Quick and reliable shipping to your doorstep.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <ShieldCheck className="mx-auto text-indigo-600 mb-4" size={42} />
            <h3 className="text-xl font-bold">Secure Payment</h3>
            <p className="text-gray-500 mt-3">
              Safe and encrypted payment methods.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <Headphones className="mx-auto text-indigo-600 mb-4" size={42} />
            <h3 className="text-xl font-bold">24/7 Support</h3>
            <p className="text-gray-500 mt-3">
              Friendly customer support whenever you need help.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl text-center py-16 px-6 text-white shadow-xl">
          <h2 className="text-4xl font-bold">Ready to Start Shopping?</h2>

          <p className="mt-4 text-lg text-indigo-100">
            Browse our latest collection and grab the best deals today.
          </p>

          <Link
            to="/main/shop"
            className="inline-block mt-8 bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
