import { useContext, useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  Link2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { urlsStore } from "../context/urlStore";
import { toast } from "react-toastify";

const UrlResult = () => {
  const { urlResult } = useContext(urlsStore);
  const [copied, setCopied] = useState(false);

  if (!urlResult) return null;

  const shortUrl = `https://urlshort-backend.vercel.app/${urlResult.shortCode}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);

      setCopied(true);

      toast.success("URL copied successfully!", {
        closeOnClick: true,
        autoClose: 1500,
      });

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log("Copy failed:", error);

      toast.error("Failed to copy URL", {
        autoClose: 1500,
      });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes resultEnter {
            0% {
              opacity: 0;
              transform: translateY(35px) rotateX(8deg) scale(0.94);
              filter: blur(8px);
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
              transform: translateY(-3px);
            }
          }

          @keyframes borderRotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes successPop {
            0% {
              opacity: 0;
              transform: scale(0.3) rotate(-25deg);
            }
            65% {
              opacity: 1;
              transform: scale(1.18) rotate(8deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0);
            }
          }

          @keyframes successRing {
            0% {
              transform: scale(0.7);
              opacity: 0.8;
            }
            70%, 100% {
              transform: scale(1.45);
              opacity: 0;
            }
          }

          @keyframes iconGlow {
            0%, 100% {
              box-shadow:
                0 0 0 rgba(16, 185, 129, 0),
                0 10px 30px rgba(16, 185, 129, 0.08);
            }
            50% {
              box-shadow:
                0 0 35px rgba(16, 185, 129, 0.25),
                0 15px 40px rgba(16, 185, 129, 0.12);
            }
          }

          @keyframes sparkleSpin {
            0%, 100% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(15deg) scale(1.15);
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

          @keyframes scanLine {
            0% {
              transform: translateX(-120%);
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            100% {
              transform: translateX(120%);
              opacity: 0;
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

          @keyframes shine {
            0% {
              transform: translateX(-150%) skewX(-20deg);
            }
            100% {
              transform: translateX(250%) skewX(-20deg);
            }
          }

          @keyframes copiedPop {
            0% {
              opacity: 0;
              transform: scale(0.4) rotate(-10deg);
            }
            70% {
              opacity: 1;
              transform: scale(1.2) rotate(4deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0);
            }
          }

          @keyframes miniFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-5px) rotate(2deg);
            }
          }

          @keyframes lineGlow {
            0%, 100% {
              opacity: 0.35;
              transform: scaleX(0.7);
            }
            50% {
              opacity: 1;
              transform: scaleX(1);
            }
          }

          .result-card {
            animation:
              resultEnter 0.65s cubic-bezier(0.22, 1, 0.36, 1) both,
              cardFloat 5s ease-in-out 0.7s infinite;
            transform-style: preserve-3d;
          }

          .result-border {
            animation: borderRotate 8s linear infinite;
          }

          .success-icon {
            animation:
              successPop 0.65s cubic-bezier(0.22, 1, 0.36, 1) both,
              iconGlow 3s ease-in-out 0.7s infinite;
          }

          .success-ring {
            animation: successRing 2.2s ease-out 0.6s infinite;
          }

          .sparkle-animation {
            animation: sparkleSpin 2.4s ease-in-out infinite;
          }

          .success-dot {
            animation: dotPulse 1.8s ease-in-out infinite;
          }

          .scan-line {
            animation: scanLine 3.5s ease-in-out infinite;
          }

          .linear-button {
            background-size: 200% 200%;
            animation: gradientMove 4s ease infinite;
          }

          .copy-shine {
            transform: translateX(-150%) skewX(-20deg);
          }

          .linear-button:hover .copy-shine {
            animation: shine 0.75s ease-out;
          }

          .copied-pop {
            animation: copiedPop 0.35s ease-out both;
          }

          .mini-float {
            animation: miniFloat 4s ease-in-out infinite;
          }

          .glow-line {
            animation: lineGlow 2.5s ease-in-out infinite;
          }

          .result-link {
            background-size: 200% 200%;
            animation: gradientMove 5s ease infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .result-card,
            .result-border,
            .success-icon,
            .success-ring,
            .sparkle-animation,
            .success-dot,
            .scan-line,
            .linear-button,
            .mini-float,
            .glow-line,
            .result-link {
              animation: none;
            }
          }
        `}
      </style>

      <div className="relative mt-6 w-full min-w-0 perspective-distant">
        {/* Rotating linear border */}
        <div className="absolute inset-[-0.25] overflow-hidden rounded-[22px] opacity-70">
          <div
            className="
              result-border
              absolute
              left-1/2
              top-1/2
              h-[180%]
              w-[180%]
              -translate-x-1/2
              -translate-y-1/2
              bg-[conic-linear(from_0deg,transparent_0deg,#10b981_70deg,#8b5cf6_150deg,#06b6d4_230deg,transparent_310deg)]
            "
          />
        </div>

        {/* Main card */}
        <div
          className="
            result-card
            relative
            w-full
            min-w-0
            overflow-hidden
            rounded-[21px]
            border
            border-white/80
            bg-white/95
            p-4
            shadow-[0_25px_70px_rgba(76,29,149,0.14)]
            backdrop-blur-xl
            sm:p-5
          "
        >
          {/* Background 3D glows */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-emerald-300/20
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-28
              -left-24
              h-64
              w-64
              rounded-full
              bg-violet-300/20
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-2/3
              -translate-x-1/2
              bg-linear-to-r
              from-transparent
              via-emerald-400
              to-transparent
              opacity-60
            "
          />

          {/* Decorative floating dots */}
          <span className="pointer-events-none absolute right-10 top-8 h-1.5 w-1.5 rounded-full bg-violet-400/70 shadow-lg shadow-violet-300" />
          <span className="pointer-events-none absolute right-16 top-12 h-1 w-1 rounded-full bg-cyan-400/70" />
          <span className="pointer-events-none absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-emerald-400/60" />

          <div className="relative">
            {/* Header */}
            <div className="mb-5 flex items-center gap-3">
              {/* Success icon */}
              <div className="relative shrink-0">
                <div
                  className="
                    success-ring
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    border-2
                    border-emerald-400/40
                  "
                />

                <div
                  className="
                    success-icon
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-emerald-200
                    bg-linear-to-br
                    from-emerald-50
                    via-white
                    to-cyan-50
                    text-emerald-500
                  "
                >
                  <Sparkles
                    size={20}
                    strokeWidth={2}
                    className="sparkle-animation"
                  />

                  <span
                    className="
                      success-dot
                      absolute
                      -right-1
                      -top-1
                      h-3
                      w-3
                      rounded-full
                      border-2
                      border-white
                      bg-emerald-500
                      shadow-md
                      shadow-emerald-300
                    "
                  />
                </div>
              </div>

              {/* Header text */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                    Your short link is ready
                  </h2>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1
                      rounded-full
                      border
                      border-emerald-200
                      bg-emerald-50
                      px-2
                      py-1
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-wider
                      text-emerald-600
                    "
                  >
                    <ShieldCheck size={10} />
                    Secure
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-400">
                  Your URL has been shortened and is ready to share.
                </p>
              </div>

              {/* Decorative mini badge */}
              <div
                className="
                  mini-float
                  hidden
                  shrink-0
                  items-center
                  gap-1.5
                  rounded-xl
                  border
                  border-violet-100
                  bg-violet-50/70
                  px-3
                  py-2
                  text-[10px]
                  font-bold
                  text-violet-500
                  sm:flex
                "
              >
                <Zap size={12} />
                Ready
              </div>
            </div>

            {/* URL section */}
            <div className="relative">
              {/* Scanner */}
              <div
                className="
                  scan-line
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  z-10
                  w-1/4
                  bg-linear-to-r
                  from-transparent
                  via-violet-300/20
                  to-transparent
                  blur-sm
                "
              />

              <div className="flex w-full min-w-0 gap-2 max-[799px]:flex-col">
                {/* Short URL box */}
                <div
                  className="
                    group
                    relative
                    flex
                    min-h-14
                    min-w-0
                    flex-1
                    items-center
                    gap-2.5
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-linear-to-br
                    from-slate-50
                    via-white
                    to-violet-50/40
                    px-3
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-violet-200
                    hover:shadow-xl
                    hover:shadow-violet-100/70
                  "
                >
                  {/* Animated left accent */}
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
                      opacity-70
                    "
                  />

                  {/* Link icon */}
                  <div
                    className="
                      relative
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-violet-100
                      bg-linear-to-br
                      from-violet-100
                      to-fuchsia-100
                      text-violet-600
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-[-5deg]
                      group-hover:shadow-md
                    "
                  >
                    <Link2
                      size={17}
                      className="transition-transform duration-300 group-hover:rotate-6"
                    />

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-xl
                        bg-violet-400/10
                        opacity-0
                        blur-md
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* URL */}
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={shortUrl}
                    className="
                      result-link
                      min-w-0
                      flex-1
                      truncate
                      bg-linear-to-r
                      from-violet-600
                      via-fuchsia-500
                      to-cyan-500
                      bg-clip-text
                      text-sm
                      font-extrabold
                      text-transparent
                      transition-all
                      duration-300
                      hover:from-fuchsia-600
                      hover:to-violet-600
                    "
                  >
                    {shortUrl}
                  </a>

                  {/* Open link */}
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Open short URL"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-slate-400
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:scale-110
                      hover:border-violet-200
                      hover:bg-violet-50
                      hover:text-violet-600
                      hover:shadow-md
                    "
                  >
                    <ExternalLink
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-6"
                    />
                  </a>
                </div>

                {/* Copy button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`
                    linear-button
                    group
                    relative
                    flex
                    min-h-14
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-2xl
                    px-5
                    text-sm
                    font-extrabold
                    text-white
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    active:translate-y-0
                    active:scale-[0.97]
                    max-[799px]:w-full
                    ${
                      copied
                        ? "bg-emerald-500 shadow-emerald-200"
                        : "bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-500 shadow-violet-200/70 hover:shadow-2xl hover:shadow-fuchsia-200"
                    }
                  `}
                >
                  {/* Shine */}
                  {!copied && (
                    <span
                      className="
                        copy-shine
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

                  {/* Inner glass */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-2xl
                      bg-white/5
                      ring-1
                      ring-inset
                      ring-white/25
                    "
                  />

                  {/* Button content */}
                  <span className="relative flex items-center gap-2">
                    {copied ? (
                      <>
                        <span className="copied-pop">
                          <Check size={18} strokeWidth={3} />
                        </span>
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy
                          size={17}
                          className="
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:rotate-[-8deg]
                          "
                        />
                        Copy URL
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Original URL */}
            <div className="mt-5 border-t border-slate-200/80 pt-4">
              <div className="mb-2 flex items-center gap-2">
                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-slate-400
                  "
                >
                  <Link2 size={10} />
                  Original URL
                </div>

                <span className="glow-line h-px flex-1 origin-left bg-linear-to-r from-slate-200 via-violet-200 to-transparent" />
              </div>

              <div
                className="
                  group
                  flex
                  min-w-0
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-transparent
                  px-2
                  py-1.5
                  transition-all
                  duration-300
                  hover:border-slate-200
                  hover:bg-slate-50
                "
              >
                <div
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-linear-to-r
                    from-violet-500
                    to-cyan-400
                    opacity-60
                    transition-transform
                    duration-300
                    group-hover:scale-150
                  "
                />

                <p
                  title={urlResult.originalUrl}
                  className="
                    min-w-0
                    flex-1
                    truncate
                    text-xs
                    leading-5
                    text-slate-400
                    transition-colors
                    duration-300
                    group-hover:text-slate-600
                  "
                >
                  {urlResult.originalUrl}
                </p>
              </div>
            </div>

            {/* Bottom decorative status */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                <span className="text-[10px] font-semibold text-slate-400">
                  Link active
                </span>
              </div>

              <div className="hidden items-center gap-1 text-[10px] font-semibold text-slate-300 sm:flex">
                <Sparkles size={10} />
                Ready to share
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UrlResult;