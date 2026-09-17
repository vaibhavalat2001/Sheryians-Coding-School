import { Link2, ArrowRight } from "lucide-react";
import { useUrls } from "../hooks/apiHook";

const UrlForm = () => {
  const { handleChange, handleSubmit, url } = useUrls();

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex w-full flex-col gap-3 min-[700px]:flex-row">
        {/* Input */}
        <div className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-950 px-4 transition-all duration-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/10">
          <Link2
            size={20}
            className="shrink-0 text-indigo-400 transition group-focus-within:text-indigo-300"
          />

          <input
            name="url"
            value={url.url}
            onChange={handleChange}
            type="url"
            required
            placeholder="Paste a long URL here..."
            className="h-12 min-w-0 flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-600 sm:text-base"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition-all duration-200 hover:bg-indigo-600 hover:shadow-indigo-500/20 active:scale-[0.98] min-[700px]:w-auto"
        >
          Shorten
          <ArrowRight size={17} />
        </button>
      </div>

      {/* Small helper text */}
      <p className="mt-2 px-1 text-xs text-zinc-600">
        Paste any long URL and we'll create a short, shareable link.
      </p>
    </form>
  );
};

export default UrlForm;