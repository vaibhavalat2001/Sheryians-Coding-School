import { Search, ChevronDown } from "lucide-react";
import { useAllCategorys } from "../../../features/product/hooks/useProductHook";

const Filter = ({search, setSearch, category, setCategory}) => {
  const { isPending, data, error } = useAllCategorys();

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div className="w-full rounded-2xl bg-zinc-900/25 p-3 shadow-xl shadow-black/20 backdrop-blur-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* ================= SEARCH BAR ================= */}
        <div className="group relative w-full sm:max-w-md">
          <Search
            size={19}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors duration-300 group-focus-within:text-violet-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="h-12 w-full rounded-xl border border-white/10 bg-zinc-950/80 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-600 transition-all duration-300 hover:border-white/20 focus:border-violet-500/50 focus:bg-zinc-950 focus:ring-4 focus:ring-violet-500/10"
          />
        </div>

        {/* ================= CATEGORY ================= */}
        <div className="relative w-full sm:w-56">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-zinc-900 backdrop-blur-xl px-4 pr-11 text-sm font-medium text-zinc-300 outline-none transition-all duration-300 hover:border-white/20 focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/10"
            defaultValue="all"
          >
            <option value="">Select Category</option>
            {data.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
