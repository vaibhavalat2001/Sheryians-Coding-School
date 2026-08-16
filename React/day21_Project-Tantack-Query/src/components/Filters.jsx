import React from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

const Filters = ({ filterProducts }) => {
  return (
    <div className="w-full mt-5 px-3 sm:px-4 lg:px-6">
      <div
        className="
          w-full
          flex
          sm:flex-row
          gap-3
          p-3
          rounded-2xl
          border border-zinc-800
          bg-zinc-950
          shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        "
      >
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-zinc-500
              pointer-events-none
            "
          />

          <input
            onChange={(e) => filterProducts(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="
              w-full
              h-11
              pl-11
              pr-4
              rounded-xl
              border border-zinc-800
              bg-zinc-900
              text-white
              placeholder:text-zinc-500
              outline-none
              transition-all
              duration-200
              hover:border-zinc-700
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-500/20
            "
          />
        </div>

        {/* Category */}
        <div className="relative">
          <SlidersHorizontal
            size={17}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-zinc-500
              pointer-events-none
            
            "
          />

          <select
            className="
            max-sm:text-sm
              appearance-none
              w-full
              h-11
              pl-11
              rounded-xl
              border border-zinc-800
              bg-zinc-900
              text-zinc-300
              outline-none
              cursor-pointer
              transition-all
              duration-200
              hover:border-zinc-700
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-500/20
            "
          >
            <option value="">All Categories</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">
              Home Decoration
            </option>
            <option value="kitchen-accessories">
              Kitchen Accessories
            </option>
            <option value="laptops">Laptops</option>
            <option value="mens-shirts">
              Men's Shirts
            </option>
          </select>

          <ChevronDown
            size={17}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-zinc-500
              pointer-events-none
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;