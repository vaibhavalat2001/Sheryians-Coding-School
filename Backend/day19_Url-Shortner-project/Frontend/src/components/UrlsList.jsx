import { useContext, useState } from "react";
import {
  Copy,
  Check,
  Trash2,
  ExternalLink,
  MousePointerClick,
  Link,
  Sparkles,
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
    <>
      {/* Custom Animations */}
      <style>
        {`
          @keyframes urlCardEnter {
            0% {
              opacity: 0;
              transform: translateY(25px) scale(0.97);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes floatIcon {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          @keyframes successPop {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }

            70% {
              transform: scale(1.15);
              opacity: 1;
            }

            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes copySuccess {
            0% {
              transform: scale(1);
            }

            40% {
              transform: scale(0.92);
            }

            70% {
              transform: scale(1.05);
            }

            100% {
              transform: scale(1);
            }
          }

          @keyframes deleteShake {
            0% {
              transform: rotate(0);
            }

            25% {
              transform: rotate(-8deg);
            }

            50% {
              transform: rotate(8deg);
            }

            75% {
              transform: rotate(-5deg);
            }

            100% {
              transform: rotate(0);
            }
          }

          @keyframes pulseGlow {
            0%,
            100% {
              box-shadow: 0 0 0 rgba(139, 92, 246, 0);
            }

            50% {
              box-shadow: 0 0 18px rgba(139, 92, 246, 0.18);
            }
          }

          .url-card-enter {
            animation: urlCardEnter 0.6s cubic-bezier(0.22, 1, 0.36, 1)
              both;
          }

          .url-float {
            animation: floatIcon 3s ease-in-out infinite;
          }

          .success-pop {
            animation: successPop 0.35s ease-out both;
          }

          .copy-success {
            animation: copySuccess 0.35s ease-out;
          }

          .delete-shake:hover svg {
            animation: deleteShake 0.4s ease-in-out;
          }

          .count-glow {
            animation: pulseGlow 3s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .url-card-enter,
            .url-float,
            .success-pop,
            .copy-success,
            .count-glow {
              animation: none;
            }
          }
        `}
      </style>

      <div className="w-full">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            {/* Header Icon */}
            <div
              className="
                flex h-11 w-11 shrink-0 items-center justify-center
                rounded-xl
                border border-violet-400/10
                bg-linear-to-br
                from-violet-500/15
                to-fuchsia-500/10
                text-violet-400
                shadow-lg shadow-violet-500/5
                transition-all duration-300
                hover:scale-105
                hover:rotate-3
              "
            >
              <Link size={20} />
            </div>

            <div className="min-w-0">
              <h2 className="flex items-center gap-2 text-lg font-bold text-white sm:text-xl">
                Your Links

                <Sparkles
                  size={15}
                  className="animate-pulse text-fuchsia-400"
                />
              </h2>

              <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
                Manage and share your shortened URLs
              </p>
            </div>
          </div>

          {/* Count */}
          <div
            className="
              count-glow
              flex shrink-0 items-center gap-2
              rounded-full
              border border-violet-400/10
              bg-violet-500/10
              px-3 py-1.5
              text-xs font-semibold
              text-violet-300
            "
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            {urls?.length || 0}
          </div>
        </div>

        {/* URL List */}
        <div className="flex flex-col gap-4">
          {[...(urls || [])].reverse().map((data, index) => {
            const shortUrl = `https://urlshort-backend.vercel.app/${data.shortCode}`;
            const isCopied = copiedId === data._id;

            return (
              <div
                key={data._id}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                className="
                  url-card-enter
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/2.5
                  p-4
                  shadow-xl shadow-black/10
                  backdrop-blur-xl
                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-violet-400/25
                  hover:bg-white/4.5
                  hover:shadow-2xl
                  hover:shadow-violet-950/20

                  sm:p-5
                "
              >
                {/* Gradient Side Accent */}
                <div
                  className="
                    absolute left-0 top-0
                    h-full w-0.5
                    bg-linear-to-b
                    from-violet-500
                    via-fuchsia-500
                    to-cyan-500
                    opacity-40
                    transition-all duration-500
                    group-hover:w-1
                    group-hover:opacity-100
                  "
                />

                {/* Hover Glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -right-20 -top-20
                    h-40 w-40
                    rounded-full
                    bg-violet-500/10
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Main Grid */}
                <div
                  className="
                    relative grid items-center gap-4
                    lg:grid-cols-[1fr_1.7fr_auto_auto]
                    md:grid-cols-2
                    max-md:grid-cols-1
                  "
                >
                  {/* Short URL */}
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className="
                          h-1.5 w-1.5 shrink-0
                          animate-pulse
                          rounded-full
                          bg-emerald-400
                          shadow-sm shadow-emerald-400
                        "
                      />

                      <span
                        className="
                          text-[10px] font-semibold
                          uppercase tracking-[0.15em]
                          text-zinc-600
                        "
                      >
                        Short Link
                      </span>
                    </div>

                    <a
                      onClick={() => getAllUrls()}
                      href={shortUrl}
                      target="_blank"
                      rel="noreferrer"
                      title={shortUrl}
                      className="
                        flex min-w-0 items-center gap-2
                        text-sm font-semibold
                        text-violet-300
                        transition-all duration-300
                        hover:translate-x-1
                        hover:text-fuchsia-300
                        sm:text-base
                      "
                    >
                      <span className="truncate">
                        {data.shortCode}
                      </span>

                      <ExternalLink
                        size={14}
                        className="
                          shrink-0
                          opacity-40
                          transition-all duration-300
                          group-hover:translate-x-0.5
                          group-hover:opacity-100
                        "
                      />
                    </a>
                  </div>

                  {/* Original URL */}
                  <div className="min-w-0">
                    <p
                      className="
                        mb-2 text-[10px] font-semibold
                        uppercase tracking-[0.15em]
                        text-zinc-600
                      "
                    >
                      Original URL
                    </p>

                    <a
                      onClick={() => getAllUrls()}
                      href={data.originalUrl}
                      target="_blank"
                      rel="noreferrer"
                      title={data.originalUrl}
                      className="
                        block truncate
                        text-xs text-zinc-500
                        transition-all duration-300
                        hover:translate-x-1
                        hover:text-zinc-300
                        sm:text-sm
                      "
                    >
                      {data.originalUrl}
                    </a>
                  </div>

                  {/* Click Statistics */}
                  <div
                    className="
                      flex w-fit items-center gap-2
                      rounded-xl
                      border border-cyan-400/10
                      bg-cyan-400/4
                      px-3 py-2
                      text-xs text-zinc-400
                      transition-all duration-300

                      hover:scale-105
                      hover:border-cyan-400/25
                      hover:bg-cyan-400/8

                      max-md:w-full
                    "
                  >
                    <div
                      className="
                        flex h-7 w-7 items-center justify-center
                        rounded-lg
                        bg-cyan-400/10
                        text-cyan-400
                        transition-transform duration-300
                        group-hover:rotate-[-5deg]
                      "
                    >
                      <MousePointerClick size={15} />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white">
                        {data?.clicks || 0}
                      </span>

                      <span className="text-zinc-600">
                        clicks
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 max-md:w-full">
                    {/* Copy */}
                    <button
                      type="button"
                      onClick={() => handleCopy(shortUrl, data._id)}
                      className={`
                        group/copy relative flex flex-1
                        items-center justify-center gap-2
                        overflow-hidden
                        rounded-xl
                        px-4 py-2.5
                        text-xs font-semibold
                        transition-all duration-300
                        active:scale-[0.94]

                        ${
                          isCopied
                            ? `
                              copy-success
                              bg-emerald-500
                              text-white
                              shadow-lg
                              shadow-emerald-500/20
                            `
                            : `
                              bg-linear-to-r
                              from-violet-600
                              to-fuchsia-600
                              text-white
                              shadow-lg
                              shadow-violet-500/10
                              hover:from-violet-500
                              hover:to-fuchsia-500
                              hover:shadow-xl
                              hover:shadow-violet-500/20
                            `
                        }
                      `}
                    >
                      {!isCopied && (
                        <span
                          className="
                            absolute inset-0
                            -translate-x-full
                            bg-linear-to-r
                            from-transparent
                            via-white/25
                            to-transparent
                            transition-transform duration-700
                            group-hover/copy:translate-x-full
                          "
                        />
                      )}

                      <span className="relative flex items-center gap-2">
                        {isCopied ? (
                          <>
                            <span className="success-pop">
                              <Check size={15} />
                            </span>
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy
                              size={15}
                              className="
                                transition-all duration-300
                                group-hover/copy:scale-110
                                group-hover/copy:rotate-[-8deg]
                              "
                            />
                            Copy
                          </>
                        )}
                      </span>
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => deleteUrl(data._id)}
                      className="
                        delete-shake
                        group/delete flex
                        items-center justify-center
                        rounded-xl
                        border border-red-400/10
                        bg-red-500/6
                        px-3
                        text-red-400
                        transition-all duration-300

                        hover:scale-105
                        hover:border-red-400/25
                        hover:bg-red-500/15
                        hover:text-red-300
                        hover:shadow-lg
                        hover:shadow-red-500/10

                        active:scale-90
                      "
                      title="Delete URL"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Number */}
                <span
                  className="
                    pointer-events-none absolute
                    right-4 top-3
                    text-[9px]
                    font-medium
                    text-zinc-800
                    transition-all duration-300
                    group-hover:text-violet-900
                  "
                >
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {(!urls || urls.length === 0) && (
          <div
            className="
              relative mt-2
              flex flex-col items-center justify-center
              overflow-hidden
              rounded-2xl
              border border-dashed border-white/8
              bg-white/2
              px-5 py-14
              text-center
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none absolute
                h-40 w-40
                rounded-full
                bg-violet-500/10
                blur-3xl
              "
            />

            {/* Floating Icon */}
            <div
              className="
                url-float relative mb-5
                flex h-16 w-16
                items-center justify-center
                rounded-2xl
                border border-violet-400/10
                bg-linear-to-br
                from-violet-500/10
                to-fuchsia-500/10
                shadow-lg
                shadow-violet-500/5
              "
            >
              <Link
                size={27}
                className="text-violet-400"
              />

              <span
                className="
                  absolute -right-1 -top-1
                  h-2.5 w-2.5
                  animate-ping
                  rounded-full
                  bg-fuchsia-400
                "
              />
            </div>

            <h3 className="relative text-lg font-semibold text-zinc-200">
              No links yet
            </h3>

            <p className="relative mt-2 max-w-sm text-sm leading-6 text-zinc-600">
              Create your first short link above and
              it will appear here.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default UrlsList;
