const ProductCard = ({ product }) => {
  const isInStock = product.stock > 0;

  return (
    <div className="group relative w-full max-w-sm rounded-xl overflow-hidden bg-transparent hover:bg-linear-to-r hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-500">
      
      {/* Card */}
      <div className="relative bg-[#111111] rounded-xl overflow-hidden">
        
        {/* Product Image */}
        <div className="w-full h-56 bg-[#181818]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Details */}
        <div className="p-5">

          {/* Category + Stock */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-400 font-medium capitalize">
              {product.category}
            </p>

            <span
              className={`text-sm font-medium ${
                isInStock ? "text-green-400" : "text-red-400"
              }`}
            >
              {isInStock
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-white mb-5 line-clamp-1">
            {product.title}
          </h2>

          {/* Price + Button */}
          <div className="flex items-center justify-between">

            {/* Price */}
            <span className="text-2xl font-bold text-white">
              ${product.price}
            </span>

            {/* Add To Cart */}
            <button
              disabled={!isInStock}
              onClick={() => console.log("Added to cart:", product)}
              className={`px-4 text-lg py-2 rounded-lg font-medium transition-all duration-300 ${
                isInStock
                  ? "bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  : "bg-[#2a2a2a] text-gray-500 cursor-not-allowed"
              }`}
            >
              {isInStock ? "Add to Cart" : "Out of Stock"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;