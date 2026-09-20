import { Link2, ArrowRight, Sparkles } from "lucide-react";
import { useUrls } from "../hooks/apiHook";

const UrlForm = () => {
  const { handleChange, handleSubmit, url } = useUrls();

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex w-full flex-col gap-3 min-[700px]:flex-row">
        {/* URL Input */}
        <div
          className="
            group relative flex min-w-0 flex-1 items-center gap-3
            rounded-2xl
            border border-white/8
            bg-white/[0.035]
            px-4
            shadow-inner shadow-black/20
            backdrop-blur-xl
            transition-all duration-300

            hover:border-violet-400/20
            hover:bg-white/5

            focus-within:border-violet-400/50
            focus-within:bg-violet-500/4
            focus-within:shadow-lg
            focus-within:shadow-violet-500/10
          "
        >
          {/* Icon */}
          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-xl
              bg-linear-to-br from-violet-500/20 to-fuchsia-500/10
              transition-all duration-300
              group-focus-within:scale-105
              group-focus-within:from-violet-500/30
            "
          >
            <Link2
              size={19}
              className="
                text-violet-400
                transition-all duration-300
                group-focus-within:text-fuchsia-400
                group-focus-within:rotate-[-8deg]
              "
            />
          </div>

          {/* Input */}
          <input
            name="url"
            value={url.url}
            onChange={handleChange}
            type="url"
            required
            placeholder="Paste a long URL here..."
            className="
              h-14 min-w-0 flex-1
              bg-transparent
              text-sm text-zinc-100
              outline-none
              placeholder:text-zinc-600
              sm:text-base
            "
          />

          {/* Keyboard Hint */}
          <div
            className="
              hidden items-center gap-1
              rounded-lg
              border border-white/6
              bg-white/3
              px-2 py-1
              text-[10px] text-zinc-600
              sm:flex
            "
          >
            URL
          </div>
        </div>

        {/* Shorten Button */}
        <button
          type="submit"
          className="
            group relative flex h-14 shrink-0
            items-center justify-center gap-2
            overflow-hidden
            rounded-2xl
            bg-linear-to-r
            from-violet-600
            via-fuchsia-500
            to-violet-600
            bg-size-[200%_100%]
            px-7
            text-sm font-semibold text-white
            shadow-xl shadow-violet-500/20
            transition-all duration-500

            hover:bg-position[100%_0]
            hover:shadow-2xl
            hover:shadow-fuchsia-500/20
            active:scale-[0.97]

            min-[700px]:w-auto
          "
        >
          {/* Button Shine */}
          <span
            className="
              absolute inset-0
              -translate-x-full
              bg-linear-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-transform duration-700
              group-hover:translate-x-full
            "
          />

          {/* Button Content */}
          <span className="relative flex items-center gap-2">
            <Sparkles
              size={16}
              className="
                transition-transform duration-300
                group-hover:rotate-12
                group-hover:scale-110
              "
            />
            Shorten
            <ArrowRight
              size={17}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </span>
        </button>
      </div>

      {/* Helper Text */}
      <div className="mt-3 flex items-center gap-2 px-1">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

        <p className="text-xs text-zinc-600">
          Paste any long URL and we'll create a short, shareable link.
        </p>
      </div>
    </form>
  );
};

export default UrlForm;
