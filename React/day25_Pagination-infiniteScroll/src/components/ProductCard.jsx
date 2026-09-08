import React from "react";
import { ShoppingCart, Heart, Star, Tag } from "lucide-react";

const ProductCard = ({ product }) => {
  const {
    title,
    brand,
    price,
    rating,
    discountPercentage,
    availabilityStatus,
    images,
  } = product;

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/60">

      {/* ================= PRODUCT IMAGE ================= */}
      <div className="relative h-64 overflow-hidden bg-[#f5faf7]">

        {/* Discount Badge */}
        <div className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
          <Tag size={12} />
          {Math.round(discountPercentage)}% OFF
        </div>

        {/* Wishlist */}
        <button
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-400 shadow-md transition-all duration-200 hover:bg-rose-50 hover:text-rose-500"
          aria-label="Add to wishlist"
        >
          <Heart size={17} />
        </button>

        {/* Image */}
        <img
          src={images?.[0]}
          alt={title}
          className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* ================= PRODUCT DETAILS ================= */}
      <div className="p-5">

        {/* Brand */}
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
          {brand}
        </p>

        {/* Title */}
        <h2 className="mt-1.5 line-clamp-1 text-lg font-bold text-slate-900">
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">

          <span className="flex items-center gap-1 rounded-lg bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white">
            <Star size={12} fill="currentColor" />
            {rating}
          </span>

          <span className="text-xs text-slate-400">
            Customer rating
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-extrabold text-slate-900">
            ${price}
          </span>

          <span className="text-xs font-bold text-orange-500">
            {Math.round(discountPercentage)}% OFF
          </span>
        </div>

        {/* Stock */}
        <div className="mt-2 flex items-center gap-2">

          <span
            className={`h-2 w-2 rounded-full ${
              availabilityStatus === "In Stock"
                ? "bg-emerald-500"
                : "bg-rose-500"
            }`}
          />

          <p
            className={`text-xs font-semibold ${
              availabilityStatus === "In Stock"
                ? "text-emerald-600"
                : "text-rose-500"
            }`}
          >
            {availabilityStatus}
          </p>

        </div>

        {/* Button */}
        <button
          disabled={availabilityStatus !== "In Stock"}
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 ${
            availabilityStatus === "In Stock"
              ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-100"
              : "cursor-not-allowed bg-slate-300"
          }`}
        >
          <ShoppingCart size={17} />

          {availabilityStatus === "In Stock"
            ? "Add to Cart"
            : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
