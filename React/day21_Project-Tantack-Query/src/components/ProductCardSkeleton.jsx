const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-zinc-600 rounded-xl shadow-md overflow-hidden animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-56 bg-zinc-500"></div>

      {/* Content */}
      <div className="p-5">
        
        {/* Category */}
        <div className="h-4 w-20 bg-gray-300 rounded mb-3"></div>

        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-3"></div>

        {/* Description - 3 lines */}
        <div className="space-y-2 mb-5">
          <div className="h-3 w-full bg-gray-300 rounded"></div>
          <div className="h-3 w-full bg-gray-300 rounded"></div>
          <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          
          {/* Price */}
          <div className="h-6 w-16 bg-gray-300 rounded"></div>

          {/* Button */}
          <div className="h-10 w-28 bg-gray-300 rounded-lg"></div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;