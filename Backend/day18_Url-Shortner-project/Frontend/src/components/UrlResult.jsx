import { useContext, useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  Link2,
  Sparkles,
} from "lucide-react";

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
    <div className="mt-5 w-full min-w-0 border-t border-zinc-800 pt-5">
      {/* Success Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
          <Sparkles size={17} />
        </div>

        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-zinc-100 sm:text-base">
            Your short link is ready
          </h2>

          <p className="text-xs text-zinc-500">
            Copy it and share it anywhere
          </p>
        </div>
      </div>

      {/* Short URL */}
      <div className="flex w-full min-w-0 gap-2 max-[799px]:flex-col">
        {/* URL */}
        <div className="flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-3 transition focus-within:border-indigo-500/50">
          <Link2
            size={17}
            className="shrink-0 text-indigo-400"
          />

          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            title={shortUrl}
            className="min-w-0 flex-1 truncate text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            {shortUrl}
          </a>

          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            title="Open short URL"
            className="shrink-0 text-zinc-600 transition hover:text-zinc-300"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Copy */}
        <button
          type="button"
          onClick={handleCopy}
          className={`flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition active:scale-[0.98] max-[799px]:w-full ${
            copied
              ? "bg-emerald-500 text-white"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}
        >
          {copied ? (
            <>
              <Check size={17} />
              Copied
            </>
          ) : (
            <>
              <Copy size={17} />
              Copy URL
            </>
          )}
        </button>
      </div>

      {/* Original URL */}
      <div className="mt-4 min-w-0">
        <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-zinc-600">
          Original URL
        </p>

        <p
          title={urlResult.originalUrl}
          className="min-w-0 truncate text-xs text-zinc-500"
        >
          {urlResult.originalUrl}
        </p>
      </div>
    </div>
  );
};

export default UrlResult;