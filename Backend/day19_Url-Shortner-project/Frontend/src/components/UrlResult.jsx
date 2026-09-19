import { useContext, useState } from "react";
import { Check, Copy, ExternalLink, Link2, Sparkles } from "lucide-react";

import { urlsStore } from "../context/urlStore";

const UrlResult = () => {
  const { urlResult } = useContext(urlsStore);
  const [copied, setCopied] = useState(false);

  if (!urlResult) return null;

  const shortUrl = `https://urlshort-backend.vercel.app/${urlResult.shortCode}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  return (
    <div
      className="
        relative mt-6 w-full min-w-0 overflow-hidden
        rounded-2xl
        border border-emerald-400/10
        bg-gradient-to-br
        from-emerald-500/[0.06]
        via-transparent
        to-violet-500/[0.04]
        p-4
        pt-5
        shadow-lg shadow-emerald-950/10
        sm:p-5
      "
    >
      {/* Decorative Glow */}
      <div
        className="
          pointer-events-none absolute
          -right-16 -top-16
          h-40 w-40
          rounded-full
          bg-emerald-500/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-20 -left-10
          h-32 w-32
          rounded-full
          bg-violet-500/10
          blur-3xl
        "
      />

      <div className="relative">
        {/* Success Header */}
        <div className="mb-5 flex items-center gap-3">
          {/* Animated Success Icon */}
          <div
            className="
              relative flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              border border-emerald-400/20
              bg-emerald-500/10
              text-emerald-400
              shadow-lg shadow-emerald-500/10
            "
          >
            <Sparkles
              size={18}
              className="animate-[pulse_2s_ease-in-out_infinite]"
            />

            {/* Small Dot */}
            <span
              className="
                absolute -right-1 -top-1
                h-2.5 w-2.5
                rounded-full
                border-2 border-[#0d0d12]
                bg-emerald-400
              "
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-white sm:text-base">
                Your short link is ready
              </h2>

              <span className="hidden rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-emerald-400 sm:inline-block">
                Success
              </span>
            </div>

            <p className="mt-0.5 text-xs text-zinc-500">
              Copy it and share it anywhere
            </p>
          </div>
        </div>

        {/* Short URL + Copy */}
        <div className="flex w-full min-w-0 gap-2 max-[799px]:flex-col">
          {/* URL Box */}
          <div
            className="
              group flex min-h-12 min-w-0 flex-1
              items-center gap-2
              rounded-xl
              border border-white/[0.08]
              bg-black/30
              px-3
              shadow-inner shadow-black/20
              transition-all duration-300

              hover:border-violet-400/25
              hover:bg-black/40

              focus-within:border-violet-400/40
              focus-within:shadow-lg
              focus-within:shadow-violet-500/10
            "
          >
            {/* Link Icon */}
            <div
              className="
                flex h-7 w-7 shrink-0
                items-center justify-center
                rounded-lg
                bg-violet-500/10
              "
            >
              <Link2
                size={16}
                className="
                  text-violet-400
                  transition-transform duration-300
                  group-hover:rotate-[-8deg]
                "
              />
            </div>

            {/* Short URL */}
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              title={shortUrl}
              className="
                min-w-0 flex-1 truncate
                text-sm font-medium
                text-violet-300
                transition-colors duration-200
                hover:text-fuchsia-300
              "
            >
              {shortUrl}
            </a>

            {/* Open Link */}
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              title="Open short URL"
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-lg
                text-zinc-600
                transition-all duration-200

                hover:bg-white/5
                hover:text-zinc-200
                hover:scale-105
              "
            >
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className={`
              group relative flex min-h-12 shrink-0
              items-center justify-center gap-2
              overflow-hidden
              rounded-xl
              px-5
              text-sm font-semibold
              transition-all duration-300
              active:scale-[0.97]
              max-[799px]:w-full

              ${
                copied
                  ? `
                    bg-emerald-500
                    text-white
                    shadow-lg
                    shadow-emerald-500/20
                  `
                  : `
                    bg-gradient-to-r
                    from-violet-600
                    to-fuchsia-600
                    text-white
                    shadow-lg
                    shadow-violet-500/20
                    hover:from-violet-500
                    hover:to-fuchsia-500
                    hover:shadow-xl
                    hover:shadow-violet-500/25
                  `
              }
            `}
          >
            {!copied && (
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />
            )}

            <span className="relative flex items-center gap-2">
              {copied ? (
                <>
                  <Check
                    size={17}
                    className="animate-[scale-in_0.2s_ease-out]"
                  />
                  Copied!
                </>
              ) : (
                <>
                  <Copy
                    size={17}
                    className="
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  />
                  Copy URL
                </>
              )}
            </span>
          </button>
        </div>

        {/* Original URL */}
        <div className="mt-5 border-t border-white/[0.05] pt-4">
          <div className="mb-1.5 flex items-center gap-2">
            <p
              className="
                text-[10px] font-semibold
                uppercase tracking-[0.18em]
                text-zinc-600
              "
            >
              Original URL
            </p>

            <span className="h-px flex-1 bg-gradient-to-r from-white/5 to-transparent" />
          </div>

          <p
            title={urlResult.originalUrl}
            className="
              min-w-0 truncate
              text-xs leading-5
              text-zinc-500
              transition-colors
              hover:text-zinc-400
            "
          >
            {urlResult.originalUrl}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrlResult;
