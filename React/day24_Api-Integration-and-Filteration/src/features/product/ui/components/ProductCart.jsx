import { ShoppingCart, Star, ArrowUpRight } from "lucide-react";

const ProductCard = ({ product }) => {
  const {
    title,
    price,
    discountPercentage,
    rating,
    thumbnail,
    category,
    availabilityStatus,
  } = product;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-violet-500/10">

      {/* ================= IMAGE ================= */}
      <div className="relative m-2 overflow-hidden rounded-xl bg-zinc-800">
        <img
          src={thumbnail}
          alt={title}
          className="h-55 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Discount */}
        <div className="absolute left-3 top-3 rounded-full bg-violet-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
          -{Math.round(discountPercentage)}%
        </div>

        {/* Quick View */}
        <button
          type="button"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-violet-600"
        >
          <ArrowUpRight size={17} />
        </button>

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-4">

        {/* Category + Stock */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium capitalize text-violet-400">
            {category}
          </span>

          <span
            className={`text-xs font-medium ${
              availabilityStatus === "In Stock"
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {availabilityStatus}
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-violet-400">
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-amber-400/10 px-2 py-1">
            <Star
              size={14}
              className="fill-amber-400 text-amber-400"
            />
            <span className="text-xs font-semibold text-amber-300">
              {rating}
            </span>
          </div>

          <span className="text-xs text-zinc-500">
            Customer rating
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <span className="text-2xl font-bold text-white">
            ${price}
          </span>

          <span className="pb-1 text-sm text-zinc-500 line-through">
            ${(price / (1 - discountPercentage / 100)).toFixed(2)}
          </span>
        </div>

        {/* Add To Cart */}
        <button 
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-violet-500/30 active:scale-[0.98]"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;