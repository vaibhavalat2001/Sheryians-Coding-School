import React from "react";

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
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-stone-700 shadow-md hover:shadow-xl transition duration-300">
      
      {/* Product Image */}
      <div className="h-64 bg-mist-600">
        <img
          src={images?.[0]}
          alt={title}
          className="w-full h-full object-contain p-5"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Brand */}
        <p className="text-sm text-gray-500">
          {brand}
        </p>

        {/* Title */}
        <h2 className="mt-1 text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-md bg-green-600 px-2 py-1 text-sm text-white">
            ⭐ {rating}
          </span>

          <span className="text-sm text-gray-500">
            Rating
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900">
            ${price}
          </span>

          <span className="text-sm text-green-600">
            {discountPercentage}% OFF
          </span>
        </div>

        {/* Stock */}
        <p
          className={`mt-2 text-sm font-medium ${
            availabilityStatus === "In Stock"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {availabilityStatus}
        </p>

        {/* Button */}
        <button className="mt-4 w-full rounded-lg bg-black py-2.5 text-white transition hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;