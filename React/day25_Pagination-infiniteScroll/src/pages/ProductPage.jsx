import ProductCard from "../components/ProductCard";
import { usePageLoad } from "../hooks/pageLoadHook";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

const ProductPage = () => {
  const {
    isPending,
    data,
    error,
    isPlaceholderData,
    page,
    setPage,
    totalPage,
  } = usePageLoad();

  if (isPending) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#fffdf8]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-500" />

          <p className="text-sm font-semibold text-slate-500">
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#fffdf8]">
        <div className="rounded-2xl border border-rose-100 bg-rose-50 px-8 py-6 text-center">
          <p className="font-bold text-rose-600">
            Something went wrong!
          </p>

          <p className="mt-1 text-sm text-rose-400">
            Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffdf8]">

      {/* ================= HEADER ================= */}
      <section className="border-b border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                <ShoppingBag size={17} />
                Our Collection
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Explore Products
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Discover quality products at prices you'll love.
                Find something perfect for you.
              </p>
            </div>

            {/* Product count */}
            <div className="rounded-xl bg-emerald-50 px-4 py-3">
              <p className="text-xs font-medium text-emerald-600">
                Available Products
              </p>

              <p className="mt-0.5 text-xl font-extrabold text-emerald-900">
                {data?.total}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">

        <div
          style={{
            opacity: isPlaceholderData ? 0.35 : 1,
            transition: "opacity 200ms ease",
          }}
          className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {data?.products?.map((val) => (
            <ProductCard
              key={val.id}
              product={val}
            />
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="mt-12 flex flex-col items-center gap-4">

          <div className="flex items-center gap-2 rounded-2xl border border-emerald-100 bg-white p-2 shadow-sm">

            {/* Previous */}
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className="flex h-10 items-center gap-1 rounded-xl px-4 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={17} />
              <span className="hidden sm:inline">
                Previous
              </span>
            </button>

            {/* Current Page */}
            <div className="flex h-10 min-w-20 items-center justify-center rounded-xl bg-emerald-500 px-4 text-sm font-bold text-white shadow-sm shadow-emerald-100">
              {page + 1}
              <span className="mx-1 text-emerald-200">
                /
              </span>
              {totalPage}
            </div>

            {/* Next */}
            <button
              disabled={page >= totalPage - 1}
              onClick={() => setPage(page + 1)}
              className="flex h-10 items-center gap-1 rounded-xl px-4 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <span className="hidden sm:inline">
                Next
              </span>
              <ChevronRight size={17} />
            </button>

          </div>

          <p className="text-xs text-slate-400">
            Showing page{" "}
            <span className="font-semibold text-slate-600">
              {page + 1}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-600">
              {totalPage}
            </span>
          </p>

        </div>
      </section>

    </main>
  );
};

export default ProductPage;
