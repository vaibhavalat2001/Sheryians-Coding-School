import Filter from "../../../../shared/ui/components/Filter";
import {
  useAllProducts,
  useProductByCategory,
} from "../../hooks/useProductHook";
import ProductCard from "../components/ProductCart";

const ProductPage = () => {
  const { isPending, data, error, search, setSearch } = useAllProducts();
  const {
    data: productsByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  return (
    <div className="pt-4">
      <Filter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />

      {isPending ? (
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full border-4 border-[#262626]" />

            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-purple-500" />

            <div className="absolute inset-3 rounded-full bg-[#0d0d0d]" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-5 p-4 lg:grid-cols-4 md:grid-cols-3 min-[450px]:grid-cols-2 max-[450px]:grid-1  gap-4">
          {productsByCategory?.products.length
            ? productsByCategory.products.map((val) => (
                <ProductCard key={val.id} product={val} />
              ))
            : data.products.map((val) => (
                <ProductCard key={val.id} product={val} />
              ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
