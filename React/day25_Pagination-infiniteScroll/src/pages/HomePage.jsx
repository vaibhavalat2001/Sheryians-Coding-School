import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  Star,
} from "lucide-react";
import { NavLink } from "react-router";

const HomePage = () => {
  const categories = [
    {
      name: "Electronics",
      emoji: "🎧",
      color: "bg-blue-50",
    },
    {
      name: "Fashion",
      emoji: "👕",
      color: "bg-pink-50",
    },
    {
      name: "Beauty",
      emoji: "💄",
      color: "bg-purple-50",
    },
    {
      name: "Home",
      emoji: "🏠",
      color: "bg-orange-50",
    },
    {
      name: "Sports",
      emoji: "⚽",
      color: "bg-emerald-50",
    },
    {
      name: "Accessories",
      emoji: "⌚",
      color: "bg-yellow-50",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "₹2,499",
      oldPrice: "₹3,999",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Minimal Classic Watch",
      price: "₹1,899",
      oldPrice: "₹2,999",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Modern Sneakers",
      price: "₹2,199",
      oldPrice: "₹3,499",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Leather Backpack",
      price: "₹1,599",
      oldPrice: "₹2,499",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffdf8]">

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:pt-12">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-600 px-6 py-12 text-white shadow-xl shadow-emerald-100 sm:px-10 lg:px-16 lg:py-20">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 right-32 h-80 w-80 rounded-full bg-white/5" />
          <div className="absolute left-1/2 top-10 h-20 w-20 rounded-full bg-orange-400/20 blur-2xl" />

          <div className="relative z-10 max-w-2xl">

            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange-300" />
              New collection is here
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shop what you
              <span className="block text-orange-300">
                love.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-emerald-50 sm:text-base">
              Discover amazing products, unbeatable prices, and everything
              you need — all in one place.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <NavLink
                to="/product"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                Shop Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </NavLink>

              <NavLink
                to="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore More
              </NavLink>

            </div>
          </div>

          {/* Hero shopping bag */}
          <div className="absolute bottom-8 right-12 hidden lg:block">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <ShoppingBag
                size={130}
                strokeWidth={1}
                className="text-white/90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid grid-cols-1 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Truck size={21} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Free Delivery
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                On orders above ₹499
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck size={21} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Secure Payment
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                100% secure checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <Headphones size={21} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                24/7 Support
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                We're here to help
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-500">
              <Star size={21} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Quality Products
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Carefully selected for you
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              Browse categories
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Shop by category
            </h2>
          </div>

          <NavLink
            to="/product"
            className="hidden items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 sm:flex"
          >
            View all
            <ArrowRight size={16} />
          </NavLink>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <NavLink
              to="/product"
              key={category.name}
              className={`group ${category.color} rounded-2xl p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                {category.emoji}
              </div>

              <h3 className="mt-3 text-sm font-bold text-slate-800">
                {category.name}
              </h3>
            </NavLink>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-orange-500">
                Trending now
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Popular products
              </h2>
            </div>

            <NavLink
              to="/product"
              className="hidden items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 sm:flex"
            >
              View all
              <ArrowRight size={16} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-[#fffdf8] transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-50"
              >

                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold text-white">
                    SALE
                  </span>

                </div>

                {/* Content */}
                <div className="p-4">

                  <div className="mb-2 flex items-center gap-1 text-xs text-yellow-500">
                    <Star size={13} fill="currentColor" />
                    <span className="font-semibold">
                      {product.rating}
                    </span>
                  </div>

                  <h3 className="truncate text-sm font-bold text-slate-800">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-lg font-extrabold text-emerald-600">
                      {product.price}
                    </span>

                    <span className="text-xs text-slate-400 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-bold text-white transition hover:bg-emerald-600">
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-orange-50 px-6 py-12 text-center sm:px-10">

          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />

          <div className="relative">
            <span className="text-4xl">🛍️</span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Ready to find something amazing?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              Explore our collection and discover products you'll love at
              prices you'll love even more.
            </p>

            <NavLink
              to="/product"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Start Shopping
              <ArrowRight size={18} />
            </NavLink>
          </div>

        </div>
      </section>

    </main>
  );
};

export default HomePage;
