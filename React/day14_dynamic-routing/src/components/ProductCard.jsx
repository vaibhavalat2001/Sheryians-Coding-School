import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/details/${product.id}`)}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
    >
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 space-y-3">
        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{product.rating.rate}</span>
          <span className="text-gray-500 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 active:scale-90 transition">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
