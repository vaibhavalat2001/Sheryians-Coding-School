import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full mt-10 object-contain transition duration-300 group-hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold capitalize text-white">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[56px] text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center rounded-md bg-green-600 px-2 py-1 text-sm font-semibold text-white">
            ⭐ {product.rating.rate}
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

          <div>
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          <button className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
