import { useContext, useState } from "react";
import {
  Check,
  Copy,
  Trash2,
  ExternalLink,
  MousePointerClick,
  Link,
  Sparkles,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { useUrls } from "../hooks/apiHook";
import { urlsStore } from "../context/urlStore";
import { toast } from "react-toastify";

const UrlsList = () => {
  const { urls } = useContext(urlsStore);
  const { deleteUrl, getAllUrls } = useUrls();

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (url, id) => {
    try {
      await navigator.clipboard.writeText(url);

      setCopiedId(id);

      toast.success("URL copied successfully!", {
        closeOnClick: true,
        autoClose: 1200,
      });

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.log("Failed to copy URL:", error);

      toast.error("Failed to copy URL", {
        autoClose: 1200,
      });
    }
  };

  const handleDelete = (id) => {
    deleteUrl(id);

    toast.warn("URL deleted", {
      closeOnClick: true,
      autoClose: 1200,
    });
  };

  return (
    <>
      <style>
        {`
          @keyframes listHeaderEnter {
            0% {
              opacity: 0;
              transform: translateY(20px);
              filter: blur(5px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes cardEnter {
            0% {
              opacity: 0;
              transform: translateY(35px) rotateX(8deg) scale(0.96);
              filter: blur(6px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotateX(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes cardFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-2px);
            }
          }

          @keyframes iconFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-5px) rotate(3deg);
            }
          }

          @keyframes gradientMove {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes borderSpin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes dotPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.55;
            }
            50% {
              transform: scale(1.5);
              opacity: 1;
            }
          }

          @keyframes numberPop {
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

          @keyframes copyPop {
            0% {
              transform: scale(0.6) rotate(-8deg);
              opacity: 0;
            }
            70% {
              transform: scale(1.2) rotate(4deg);
              opacity: 1;
            }
            100% {
              transform: scale(1) rotate(0);
              opacity: 1;
            }
          }

          @keyframes deleteShake {
            0%, 100% {
              transform: rotate(0);
            }
            25% {
              transform: rotate(-10deg);
            }
            50% {
              transform: rotate(10deg);
            }
            75% {
              transform: rotate(-6deg);
            }
          }

          @keyframes emptyPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.35;
            }
            50% {
              transform: scale(1.12);
              opacity: 0.7;
            }
          }

          @keyframes emptyFloat {
            0%, 100% {
              transform: translateY(0) rotate(0);
            }
            50% {
              transform: translateY(-8px) rotate(3deg);
            }
          }

          @keyframes shine {
            0% {
              transform: translateX(-150%) skewX(-20deg);
            }
            100% {
              transform: translateX(300%) skewX(-20deg);
            }
          }

          @keyframes scan {
            0% {
              transform: translateX(-120%);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translateX(120%);
              opacity: 0;
            }
          }

          @keyframes sparkle {
            0%, 100% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(15deg) scale(1.15);
            }
          }

          .list-header-enter {
            animation: listHeaderEnter 0.6s cubic-bezier(0.22, 1, 0.36, 1)
              both;
          }

          .url-card {
            animation: cardEnter 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
            transform-style: preserve-3d;
          }

          .url-card:hover {
            animation: cardFloat 4s ease-in-out infinite;
          }

          .list-icon {
            animation: iconFloat 3s ease-in-out infinite;
          }

          .list-linear {
            background-size: 200% 200%;
            animation: gradientMove 4s ease infinite;
          }

          .rotating-border {
            animation: borderSpin 8s linear infinite;
          }

          .pulse-dot {
            animation: dotPulse 2s ease-in-out infinite;
          }

          .number-pop {
            animation: numberPop 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .copy-pop {
            animation: copyPop 0.35s ease-out both;
          }

          .delete-button:hover svg {
            animation: deleteShake 0.45s ease-in-out;
          }

          .empty-glow {
            animation: emptyPulse 3s ease-in-out infinite;
          }

          .empty-icon {
            animation: emptyFloat 4s ease-in-out infinite;
          }

          .button-shine {
            transform: translateX(-150%) skewX(-20deg);
          }

          .action-button:hover .button-shine {
            animation: shine 0.7s ease-out;
          }

          .scan-effect {
            animation: scan 4s ease-in-out infinite;
          }

          .sparkle-icon {
            animation: sparkle 2.5s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .list-header-enter,
            .url-card,
            .list-icon,
            .list-linear,
            .rotating-border,
            .pulse-dot,
            .number-pop,
            .copy-pop,
            .empty-glow,
            .empty-icon,
            .scan-effect,
            .sparkle-icon {
              animation: none;
            }
          }
        `}
      </style>

      <div className="w-full">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="list-header-enter mb-6 flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            {/* 3D Header Icon */}
            <div
              className="
                list-icon
                relative
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-violet-100
                bg-linear-to-br
                from-violet-50
                via-white
                to-fuchsia-50
                text-violet-600
                shadow-lg
                shadow-violet-100/60
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-xl
                hover:shadow-violet-200/60
              "
            >
              <Link size={21} />

              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  h-3
                  w-3
                  rounded-full
                  border-2
                  border-white
                  bg-fuchsia-500
                  shadow-md
                  shadow-fuchsia-300
                "
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2
                  className="
                    text-lg
                    font-extrabold
                    tracking-tight
                    text-slate-900
                    sm:text-xl
                  "
                >
                  Your Links
                </h2>

                <Sparkles
                  size={15}
                  className="sparkle-icon text-fuchsia-500"
                />
              </div>

              <p className="mt-0.5 text-xs font-medium text-slate-400 sm:text-sm">
                Manage and share your shortened URLs
              </p>
            </div>
          </div>

          {/* Link count */}
          <div
            className="
              relative
              flex
              shrink-0
              items-center
              gap-2
              overflow-hidden
              rounded-full
              border
              border-violet-100
              bg-linear-to-r
              from-violet-50
              to-fuchsia-50
              px-3
              py-1.5
              text-xs
              font-extrabold
              text-violet-600
              shadow-sm
            "
          >
            <span
              className="
                pulse-dot
                h-1.5
                w-1.5
                rounded-full
                bg-violet-500
                shadow-sm
                shadow-violet-300
              "
            />

            <span className="number-pop">
              {urls?.length || 0}
            </span>

            <span className="hidden text-violet-400 sm:inline">
              links
            </span>
          </div>
        </div>

        {/* =====================================================
            URL LIST
        ====================================================== */}
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
                  url-card
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-slate-200/80
                  bg-white/95
                  p-4
                  shadow-[0_15px_45px_rgba(76,29,149,0.08)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-violet-200
                  hover:shadow-[0_25px_60px_rgba(124,58,237,0.14)]
                  sm:p-5
                "
              >
                {/* Rotating top linear line */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      rotating-border
                      absolute
                      left-1/2
                      top-1/2
                      h-125
                      w-125
                      -translate-x-1/2
                      -translate-y-1/2
                      bg-[conic-linear(from_0deg,transparent,#8b5cf6,#ec4899,#06b6d4,transparent)]
                    "
                  />
                </div>

                {/* Left linear accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    w-1
                    bg-linear-to-b
                    from-violet-500
                    via-fuchsia-500
                    to-cyan-400
                    opacity-40
                    transition-all
                    duration-500
                    group-hover:w-1.5
                    group-hover:opacity-100
                  "
                />

                {/* Hover background glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-52
                    w-52
                    rounded-full
                    bg-violet-300/20
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    left-1/3
                    h-40
                    w-40
                    rounded-full
                    bg-cyan-300/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Scanner animation */}
                <div
                  className="
                    scan-effect
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    z-10
                    w-1/5
                    bg-linear-to-r
                    from-transparent
                    via-violet-300/10
                    to-transparent
                    blur-sm
                  "
                />

                {/* Main content */}
                <div
                  className="
                    relative
                    grid
                    items-center
                    gap-5
                    lg:grid-cols-[1fr_1.5fr_auto_auto]
                    md:grid-cols-2
                    max-md:grid-cols-1
                  "
                >
                  {/* =================================================
                      SHORT URL
                  ================================================== */}
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className="
                          pulse-dot
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-emerald-500
                          shadow-sm
                          shadow-emerald-300
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          font-extrabold
                          uppercase
                          tracking-[0.16em]
                          text-slate-400
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
                        group/link
                        flex
                        min-w-0
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-transparent
                        px-2
                        py-1
                        transition-all
                        duration-300
                        hover:border-violet-100
                        hover:bg-violet-50/50
                      "
                    >
                      <span
                        className="
                          truncate
                          bg-linear-to-r
                          from-violet-600
                          via-fuchsia-500
                          to-cyan-500
                          bg-clip-text
                          text-sm
                          font-extrabold
                          text-transparent
                          sm:text-base
                        "
                      >
                        {data.shortCode}
                      </span>

                      <ExternalLink
                        size={14}
                        className="
                          shrink-0
                          text-slate-300
                          transition-all
                          duration-300
                          group-hover/link:translate-x-0.5
                          group-hover/link:-translate-y-0.5
                          group-hover/link:text-violet-500
                        "
                      />
                    </a>
                  </div>

                  {/* =================================================
                      ORIGINAL URL
                  ================================================== */}
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2">
                      <Link
                        size={11}
                        className="text-slate-300"
                      />

                      <p
                        className="
                          text-[10px]
                          font-extrabold
                          uppercase
                          tracking-[0.16em]
                          text-slate-400
                        "
                      >
                        Original URL
                      </p>
                    </div>

                    <a
                      onClick={() => getAllUrls()}
                      href={data.originalUrl}
                      target="_blank"
                      rel="noreferrer"
                      title={data.originalUrl}
                      className="
                        group/original
                        flex
                        min-w-0
                        items-center
                        rounded-xl
                        border
                        border-transparent
                        px-2
                        py-1
                        text-xs
                        text-slate-400
                        transition-all
                        duration-300
                        hover:border-slate-200
                        hover:bg-slate-50
                        hover:text-slate-700
                        sm:text-sm
                      "
                    >
                      <span className="truncate">
                        {data.originalUrl}
                      </span>

                      <ArrowUpRight
                        size={13}
                        className="
                          ml-2
                          shrink-0
                          opacity-0
                          transition-all
                          duration-300
                          group-hover/original:translate-x-0.5
                          group-hover/original:-translate-y-0.5
                          group-hover/original:opacity-100
                        "
                      />
                    </a>
                  </div>

                  {/* =================================================
                      CLICK STATISTICS
                  ================================================== */}
                  <div
                    className="
                      group/stats
                      relative
                      flex
                      w-fit
                      items-center
                      gap-2.5
                      overflow-hidden
                      rounded-2xl
                      border
                      border-cyan-100
                      bg-linear-to-br
                      from-cyan-50
                      via-white
                      to-blue-50
                      px-3
                      py-2.5
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-200
                      hover:shadow-lg
                      hover:shadow-cyan-100/70
                      max-md:w-full
                    "
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-linear-to-br
                        from-cyan-100
                        to-blue-100
                        text-cyan-600
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover/stats:scale-110
                        group-hover/stats:rotate-[-5deg]
                      "
                    >
                      <MousePointerClick size={15} />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Clicks
                      </p>

                      <p className="mt-0.5 text-sm font-extrabold text-slate-800">
                        {data?.clicks || 0}
                      </p>
                    </div>

                    <BarChart3
                      size={15}
                      className="
                        ml-1
                        text-cyan-300
                        transition-transform
                        duration-300
                        group-hover/stats:scale-110
                      "
                    />
                  </div>

                  {/* =================================================
                      ACTION BUTTONS
                  ================================================== */}
                  <div className="flex gap-2 max-md:w-full">
                    {/* Copy */}
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(shortUrl, data._id)
                      }
                      className={`
                        action-button
                        group/copy
                        relative
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        overflow-hidden
                        rounded-xl
                        px-4
                        py-2.5
                        text-xs
                        font-extrabold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        active:translate-y-0
                        active:scale-[0.94]
                        ${
                          isCopied
                            ? "bg-emerald-500 shadow-emerald-200"
                            : "list-linear bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-500 shadow-violet-200/60 hover:shadow-xl hover:shadow-fuchsia-200/60"
                        }
                      `}
                    >
                      {!isCopied && (
                        <span
                          className="
                            button-shine
                            pointer-events-none
                            absolute
                            inset-y-0
                            left-[-30%]
                            w-[35%]
                            bg-linear-to-r
                            from-transparent
                            via-white/40
                            to-transparent
                          "
                        />
                      )}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-xl
                          ring-1
                          ring-inset
                          ring-white/25
                        "
                      />

                      <span className="relative flex items-center gap-2">
                        {isCopied ? (
                          <>
                            <span className="copy-pop">
                              <Check size={15} strokeWidth={3} />
                            </span>
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy
                              size={15}
                              className="
                                transition-all
                                duration-300
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
                      onClick={() => handleDelete(data._id)}
                      className="
                        delete-button
                        group/delete
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-red-100
                        bg-red-50
                        text-red-500
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-105
                        hover:border-red-200
                        hover:bg-red-100
                        hover:text-red-600
                        hover:shadow-lg
                        hover:shadow-red-100
                        active:scale-90
                      "
                      title="Delete URL"
                    >
                      <Trash2
                        size={16}
                        className="transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>

                {/* Card number */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-3
                    text-[9px]
                    font-extrabold
                    tracking-wider
                    text-slate-200
                    transition-all
                    duration-300
                    group-hover:text-violet-200
                  "
                >
                  #{String(index + 1).padStart(2, "0")}
                </span>

                {/* Bottom linear line */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-1/3
                    -translate-x-1/2
                    bg-linear-to-r
                    from-transparent
                    via-violet-300/40
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>
            );
          })}
        </div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}
        {(!urls || urls.length === 0) && (
          <div
            className="
              relative
              mt-2
              flex
              min-h-75
              flex-col
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              border
              border-dashed
              border-slate-200
              bg-white/90
              px-5
              py-14
              text-center
              shadow-[0_15px_50px_rgba(76,29,149,0.06)]
            "
          >
            {/* Background glows */}
            <div
              className="
                empty-glow
                pointer-events-none
                absolute
                h-52
                w-52
                rounded-full
                bg-violet-300/30
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-cyan-300/15
                blur-3xl
              "
            />

            {/* Decorative dots */}
            <span className="pulse-dot absolute left-[25%] top-[25%] h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span className="pulse-dot absolute right-[25%] top-[30%] h-1 w-1 rounded-full bg-cyan-400" />
            <span className="pulse-dot absolute bottom-[25%] left-[30%] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />

            {/* Floating icon */}
            <div
              className="
                empty-icon
                relative
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                border
                border-violet-100
                bg-linear-to-br
                from-violet-50
                via-white
                to-fuchsia-50
                text-violet-500
                shadow-[0_15px_40px_rgba(124,58,237,0.15)]
              "
            >
              <Link size={31} />

              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-fuchsia-500
                  text-white
                  shadow-lg
                  shadow-fuchsia-200
                "
              >
                <Sparkles size={9} />
              </span>
            </div>

            <h3 className="relative text-xl font-extrabold tracking-tight text-slate-800">
              No links yet
            </h3>

            <p
              className="
                relative
                mt-2
                max-w-sm
                text-sm
                leading-6
                text-slate-400
              "
            >
              Create your first short link above and it will
              appear here.
            </p>

            <div
              className="
                relative
                mt-5
                flex
                items-center
                gap-2
                rounded-full
                border
                border-violet-100
                bg-violet-50
                px-3
                py-1.5
                text-[10px]
                font-bold
                text-violet-500
              "
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-violet-500" />
              Waiting for your first link
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UrlsList;