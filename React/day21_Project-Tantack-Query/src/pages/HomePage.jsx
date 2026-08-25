import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  Star,
  Sparkles,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Beauty", icon: "💄" },
    { name: "Furniture", icon: "🛋️" },
    { name: "Fragrances", icon: "🌸" },
    { name: "Groceries", icon: "🛒" },
    { name: "Home Decor", icon: "🏠" },
    { name: "Kitchen", icon: "🍳" },
    { name: "Laptops", icon: "💻" },
    { name: "Men's Shirts", icon: "👕" },
  ];

  const products = [
    {
      title: "Premium Laptop",
      category: "Laptops",
      price: "$899",
      oldPrice: "$999",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Modern Chair",
      category: "Furniture",
      price: "$129",
      oldPrice: "$169",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Classic Perfume",
      category: "Fragrances",
      price: "$59",
      oldPrice: "$79",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Casual Shirt",
      category: "Men's Shirts",
      price: "$39",
      oldPrice: "$49",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl sm:rounded-3xl
            border border-zinc-800
            bg-[#111111]
          "
        >
          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />

          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 items-center">
            {/* Hero Content */}
            <div className="px-6 sm:px-10 lg:px-14 py-14 sm:py-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
                <Sparkles size={15} />
                Discover Something New
              </div>

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-bold
                  leading-[1.1]
                  mt-6
                "
              >
                Everything You Need.
                <span className="block text-purple-500 mt-2">
                  All in One Place.
                </span>
              </h1>

              <p className="text-zinc-400 text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
                Explore thousands of products across electronics, fashion,
                beauty, furniture, groceries and more.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  onClick={() => navigate("shop")}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    px-5 sm:px-6
                    py-3
                    rounded-xl
                    bg-purple-600
                    hover:bg-purple-500
                    text-white
                    font-medium
                    active:scale-95
                    transition-all
                    duration-300
                    shadow-[0_0_25px_rgba(168,85,247,0.15)]
                  "
                >
                  Shop Now
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </button>

                <button
                  onClick={() => navigate("shop")}
                  className="
                    px-5 sm:px-6
                    py-3
                    rounded-xl
                    border border-zinc-700
                    bg-zinc-900/60
                    text-zinc-300
                    hover:text-white
                    hover:border-zinc-600
                    hover:bg-zinc-800
                    transition-all
                  "
                >
                  Explore Categories
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block h-full min-h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1000&q=80"
                alt="Shopping"
                className="w-full h-full object-cover opacity-70"
              />

              <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-[#111111] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="text-purple-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Explore
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Shop by Category
            </h2>
          </div>

          <button className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition">
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="
                group
                cursor-pointer
                rounded-xl
                border border-zinc-800
                bg-[#111111]
                p-4 sm:p-5
                text-center
                hover:border-purple-500/40
                hover:bg-purple-500/[0.04]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  mx-auto
                  rounded-xl
                  bg-zinc-900
                  border border-zinc-800
                  flex
                  items-center
                  justify-center
                  text-2xl sm:text-3xl
                  group-hover:border-purple-500/30
                  group-hover:scale-105
                  transition-all
                "
              >
                {category.icon}
              </div>

              <h3 className="text-xs sm:text-sm font-medium text-zinc-300 mt-3 group-hover:text-white">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="border-y border-zinc-900 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-purple-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Trending
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                Featured Products
              </h2>
            </div>

            <button className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition">
              See All
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {products.map((product) => (
              <div
                key={product.title}
                className="
                  group
                  overflow-hidden
                  rounded-xl sm:rounded-2xl
                  border border-zinc-800
                  bg-[#151515]
                  hover:border-purple-500/30
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                  transition-all
                  duration-300
                "
              >
                {/* Product Image */}
                <div className="relative h-44 sm:h-56 overflow-hidden bg-zinc-900">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      opacity-85
                      group-hover:opacity-100
                      group-hover:scale-105
                      transition-all
                      duration-500
                    "
                  />

                  <span
                    className="
                      absolute
                      top-3
                      left-3
                      px-2.5
                      py-1
                      rounded-full
                      bg-purple-600
                      text-[10px]
                      sm:text-xs
                      font-semibold
                    "
                  >
                    SALE
                  </span>

                  <button
                    className="
                      absolute
                      right-3
                      bottom-3
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
                      rounded-full
                      bg-black/70
                      backdrop-blur-md
                      border border-white/10
                      flex
                      items-center
                      justify-center
                      text-white
                      hover:bg-purple-600
                      active:scale-90
                      transition-all
                    "
                  >
                    <ShoppingBag size={17} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-5">
                  <p className="text-[10px] sm:text-xs text-purple-400">
                    {product.category}
                  </p>

                  <h3 className="font-semibold text-sm sm:text-base mt-1 truncate">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 mt-2">
                    <Star
                      size={13}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-xs text-zinc-400">
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="font-bold text-sm sm:text-lg">
                      {product.price}
                    </span>

                    <span className="text-xs text-zinc-600 line-through">
                      {product.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROMO ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl sm:rounded-3xl
            border border-purple-500/20
            bg-gradient-to-br from-purple-950/60 via-[#151515] to-[#111111]
            px-6 sm:px-10 lg:px-14
            py-12 sm:py-16
          "
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />

          <div className="relative max-w-2xl">
            <span className="text-purple-400 text-sm font-semibold">
              SPECIAL OFFER
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Upgrade Your Shopping Experience
            </h2>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              Discover exclusive deals and trending products picked especially
              for you.
            </p>

            <button
              onClick={() => navigate("shop")}
              className="
                mt-7
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-purple-600
                hover:bg-purple-500
                font-medium
                transition-all
              "
            >
              Explore Deals
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="flex gap-4 p-5 rounded-xl border border-zinc-800 bg-[#111111]">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Truck size={20} className="text-purple-400" />
              </div>

              <div>
                <h3 className="font-semibold">Fast Delivery</h3>

                <p className="text-sm text-zinc-500 mt-1">
                  Quick and reliable delivery.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl border border-zinc-800 bg-[#111111]">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <ShieldCheck size={20} className="text-purple-400" />
              </div>

              <div>
                <h3 className="font-semibold">Secure Shopping</h3>

                <p className="text-sm text-zinc-500 mt-1">
                  Safe and secure shopping experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl border border-zinc-800 bg-[#111111]">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Star size={20} className="text-purple-400" />
              </div>

              <div>
                <h3 className="font-semibold">Quality Products</h3>

                <p className="text-sm text-zinc-500 mt-1">
                  Products you'll love and trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
