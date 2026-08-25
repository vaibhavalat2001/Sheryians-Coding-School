import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProductApi } from "../hooks/productHook";
import Filters from "../components/Filters";
import { useFilter } from "../hooks/filterHook";

const ShopPage = () => {
  const {filteredProducts, filterProducts, isLoading
  } = useFilter();

  const {isPending, data, error} = useProductApi()
  if (error) return <h1>{error.message}</h1>

  return (
    <div className="flex flex-col gap-5">
      <Filters filterProducts={filterProducts}/>
      {isPending ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid px-4 grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 place-items-center gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
