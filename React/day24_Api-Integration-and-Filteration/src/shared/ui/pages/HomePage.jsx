import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    },
    {
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },
  ];

  const products = [
    {
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: "₹2,499",
      oldPrice: "₹3,999",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
    {
      name: "Classic Wrist Watch",
      category: "Accessories",
      price: "₹1,899",
      oldPrice: "₹2,999",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
    },
    {
      name: "Premium Sneakers",
      category: "Shoes",
      price: "₹2,799",
      oldPrice: "₹4,499",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },
    {
      name: "Minimal Backpack",
      category: "Fashion",
      price: "₹1,599",
      oldPrice: "₹2,499",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background glow */}
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          {/* Hero content */}
          <div>
            <span className="mb-5 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
              ✨ New Collection 2026
            </span>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shop Smarter.
              <span className="block text-violet-500">Live Better.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
              Discover premium products at unbeatable prices. From everyday
              essentials to trending products, everything you need is just a
              click away.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => navigate("/main/product")} className="group flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20">
                Shop Now
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button onClick={() => navigate("/main/product")} className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur transition-all duration-300 hover:border-violet-500/40 hover:bg-white/10">
                Explore Categories
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="mt-1 text-sm text-zinc-500">Products</p>
              </div>

              <div>
                <p className="text-2xl font-bold">50K+</p>
                <p className="mt-1 text-sm text-zinc-500">Happy Customers</p>
              </div>

              <div>
                <p className="text-2xl font-bold">4.8/5</p>
                <p className="mt-1 text-sm text-zinc-500">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 rounded-[2rem] bg-violet-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1000"
                alt="Shopping"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />

              {/* Floating card */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/80 p-4 backdrop-blur-xl">
                <div>
                  <p className="text-xs text-zinc-500">Today's Deal</p>
                  <p className="mt-1 font-semibold">Up to 50% OFF</p>
                </div>

                <div className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold">
                  Shop Deal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
              Browse
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Shop by Category
            </h2>

            <p className="mt-3 text-zinc-500">
              Find exactly what you're looking for.
            </p>
          </div>

          <button className="hidden items-center gap-2 text-sm font-medium text-violet-400 transition hover:text-violet-300 sm:flex">
            View All
            <ArrowRight size={17} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative h-52 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 sm:h-64"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold">{category.name}</h3>

                <div className="mt-1 flex items-center gap-1 text-sm text-zinc-300 opacity-0 transition duration-300 group-hover:opacity-100">
                  Shop Now
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="border-y border-white/10 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
                Trending
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Featured Products
              </h2>

              <p className="mt-3 text-zinc-500">
                Our most popular products right now.
              </p>
            </div>

            <button className="hidden items-center gap-2 text-sm font-medium text-violet-400 transition hover:text-violet-300 sm:flex">
              View All
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5"
              >
                {/* Product image */}
                <div className="relative aspect-square overflow-hidden bg-zinc-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-lg bg-violet-600 px-2.5 py-1 text-xs font-semibold">
                    SALE
                  </span>
                </div>

                {/* Product details */}
                <div className="p-4">
                  <p className="text-xs text-zinc-500">{product.category}</p>

                  <h3 className="mt-1 line-clamp-1 text-sm font-semibold text-zinc-100">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-1">
                    <Star size={14} className="fill-current text-yellow-400" />
                    <span className="text-xs text-zinc-400">
                      {product.rating}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-base font-bold">{product.price}</span>

                    <span className="text-xs text-zinc-600 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-xs font-semibold transition hover:bg-violet-500">
                    <ShoppingBag size={15} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DISCOUNT BANNER ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-violet-600 px-6 py-12 sm:px-10 lg:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="text-sm font-semibold text-violet-100">
                LIMITED TIME OFFER
              </span>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Get 30% OFF Your First Order
              </h2>

              <p className="mt-3 max-w-xl text-sm text-violet-100 sm:text-base">
                Start shopping today and enjoy exclusive discounts on your first
                purchase.
              </p>
            </div>

            <button className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-violet-600 transition hover:bg-zinc-100">
              Shop Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
              Why Choose Us
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Shopping Made Simple
            </h2>

            <p className="mt-3 text-zinc-500">
              Everything you need for a smooth and secure shopping experience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                text: "Quick and reliable delivery right to your doorstep.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Payment",
                text: "Your payments and personal information are protected.",
              },
              {
                icon: ShoppingBag,
                title: "Quality Products",
                text: "Carefully selected products from trusted sellers.",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                text: "Our support team is always ready to help you.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition duration-300 hover:border-violet-500/30 hover:bg-zinc-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
