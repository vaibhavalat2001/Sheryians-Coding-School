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

  if (isPending) return <h1>loading</h1>;
  return (
    <div>
      <Filter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-1 xl:grid-cols-5 p-4 lg:grid-cols-4 md:grid-cols-3 min-[450px]:grid-cols-2 max-[450px]:grid-1  gap-4">
        {productsByCategory?.products.length
          ? productsByCategory.products.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))
          : data.products.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
