import { useContext, useState } from "react";
import {
  Copy,
  Check,
  Trash2,
  ExternalLink,
  MousePointerClick,
  Link,
} from "lucide-react";

import { useUrls } from "../hooks/apiHook";
import { urlsStore } from "../context/urlStore";

const UrlsList = () => {
  const { urls } = useContext(urlsStore);
  const { deleteUrl, getAllUrls } = useUrls();

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (url, id) => {
    try {
      await navigator.clipboard.writeText(url);

      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.log("Failed to copy URL:", error);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-semibold text-zinc-100">
            <Link size={21} />
            Your Links
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            {urls?.length || 0} links created
          </p>
        </div>

        <div className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
          {urls?.length || 0}
        </div>
      </div>

      {/* URL List */}
      <div className="flex flex-col gap-3">
        {[...(urls || [])].reverse().map((data) => {
          const shortUrl = `http://localhost:3000/${data.shortCode}`;
          const isCopied = copiedId === data._id;

          return (
            <div
              key={data._id}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              {/* Main Grid */}
              <div
                className="
                  grid items-center gap-4

                  lg:grid-cols-[1fr_2fr_auto_auto]

                  md:grid-cols-2

                  max-md:grid-cols-1
                "
              >
                {/* Short URL */}
                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />

                    <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Short Link
                    </span>
                  </div>

                  <a
                    onClick={() => getAllUrls()}
                    href={shortUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 truncate text-base font-medium text-indigo-400 hover:text-indigo-300"
                  >
                    <span className="truncate">{shortUrl}</span>

                    <ExternalLink
                      size={15}
                      className="shrink-0 opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </div>

                {/* Original URL */}
                <div className="min-w-0 md:max-lg:col-span-1">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Original URL
                  </p>

                  <a
                    onClick={() => getAllUrls()}
                    href={data.originalUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={data.originalUrl}
                    className="block truncate text-sm text-zinc-400 hover:text-zinc-200"
                  >
                    {data.originalUrl}
                  </a>
                </div>

                {/* Clicks */}
                <div className="flex w-fit items-center gap-2 rounded-xl bg-zinc-800/70 px-3 py-2 text-sm text-zinc-300 max-md:w-full">
                  <MousePointerClick size={17} />

                  <span>{data?.clicks || 0}</span>

                  <span className="text-zinc-500">clicks</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 max-md:w-full">
                  <button
                    onClick={() => handleCopy(shortUrl, data._id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-600 active:scale-95"
                  >
                    {isCopied ? (
                      <>
                        <Check size={16} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => deleteUrl(data._id)}
                    className="flex items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-red-400 transition hover:bg-red-500/20 active:scale-95"
                    title="Delete URL"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {(!urls || urls.length === 0) && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 px-5 py-12 text-center">
          <div className="mb-3 rounded-full bg-zinc-800 p-4">
            <Link size={25} className="text-zinc-400" />
          </div>

          <h3 className="text-lg font-medium text-zinc-200">
            No links yet
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            Create your first short link and it will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default UrlsList;