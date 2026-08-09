import React from "react";
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Headphones } from "lucide-react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="px-6 pb-10 pt-16 sm:px-10 lg:px-14 lg:pt-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 shadow-xl lg:grid-cols-2">

          {/* Hero Content */}
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-14 lg:py-16">

            <span className="mb-4 w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              ✨ Welcome to E-COMM
            </span>

            <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Everything You Need,
              <span className="block text-purple-200">
                All in One Place.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-indigo-100 sm:text-lg">
              Discover amazing products, great deals, and everyday essentials
              at prices you'll love.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/main/product")}
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-indigo-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-100 active:scale-95"
              >
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/main/product")}
                className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Products
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden min-h-[400px] items-center justify-center overflow-hidden lg:flex">

            <div className="absolute h-72 w-72 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex h-64 w-64 rotate-6 items-center justify-center rounded-[3rem] bg-white/10 shadow-2xl backdrop-blur-md">
              <ShoppingBag
                size={150}
                strokeWidth={1.2}
                className="text-white"
              />
            </div>

            <div className="absolute right-12 top-16 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <p className="text-xs text-gray-400">Best Deals</p>
              <p className="text-xl font-extrabold text-indigo-600">
                Up to 50% OFF
              </p>
            </div>

            <div className="absolute bottom-14 left-10 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <p className="text-xs text-gray-400">Products</p>
              <p className="text-xl font-extrabold text-gray-900">
                1000+
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="px-6 pb-10 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <Truck size={24} />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Fast Delivery
              </h3>
              <p className="text-sm text-gray-500">
                Quick & reliable
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Secure Payment
              </h3>
              <p className="text-sm text-gray-500">
                100% secure checkout
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <ShoppingBag size={24} />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Huge Collection
              </h3>
              <p className="text-sm text-gray-500">
                Thousands of products
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <Headphones size={24} />
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                24/7 Support
              </h3>
              <p className="text-sm text-gray-500">
                We're here to help
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="px-6 py-10 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">

          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Explore
              </p>

              <h2 className="mt-1 text-3xl font-extrabold text-gray-900">
                Shop by Category
              </h2>
            </div>

            <button
              onClick={() => navigate("/main/product")}
              className="hidden items-center gap-2 font-semibold text-indigo-600 sm:flex"
            >
              View All
              <ArrowRight size={18} />
            </button>
          </div>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div
              onClick={() => navigate("/main/product")}
              className="group cursor-pointer rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-8 text-5xl">👕</div>

              <h3 className="text-xl font-bold">
                Men's Clothing
              </h3>

              <p className="mt-1 text-sm text-blue-100">
                Explore latest styles
              </p>

              <ArrowRight
                className="mt-5 transition group-hover:translate-x-2"
                size={20}
              />
            </div>


            <div
              onClick={() => navigate("/main/product")}
              className="group cursor-pointer rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-8 text-5xl">👗</div>

              <h3 className="text-xl font-bold">
                Women's Clothing
              </h3>

              <p className="mt-1 text-sm text-pink-100">
                Fashion for everyone
              </p>

              <ArrowRight
                className="mt-5 transition group-hover:translate-x-2"
                size={20}
              />
            </div>


            <div
              onClick={() => navigate("/main/product")}
              className="group cursor-pointer rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 p-6 text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-8 text-5xl">💎</div>

              <h3 className="text-xl font-bold">
                Jewellery
              </h3>

              <p className="mt-1 text-sm text-yellow-100">
                Elegant accessories
              </p>

              <ArrowRight
                className="mt-5 transition group-hover:translate-x-2"
                size={20}
              />
            </div>


            <div
              onClick={() => navigate("/main/product")}
              className="group cursor-pointer rounded-2xl bg-gradient-to-br from-slate-600 to-gray-900 p-6 text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-8 text-5xl">💻</div>

              <h3 className="text-xl font-bold">
                Electronics
              </h3>

              <p className="mt-1 text-sm text-gray-300">
                Upgrade your tech
              </p>

              <ArrowRight
                className="mt-5 transition group-hover:translate-x-2"
                size={20}
              />
            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-12 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gray-900 px-7 py-12 text-center sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Start Shopping
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Find something you'll love.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Browse our collection and discover products selected just for
            you.
          </p>

          <button
            onClick={() => navigate("/main/product")}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3 font-bold text-white transition hover:bg-indigo-500 active:scale-95"
          >
            Start Shopping
            <ArrowRight size={18} />
          </button>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
