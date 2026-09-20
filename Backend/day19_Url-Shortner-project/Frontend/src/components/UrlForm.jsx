import { Link2, ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
import { useUrls } from "../hooks/apiHook";

const UrlForm = () => {
  const { handleChange, handleSubmit, url } = useUrls();

  return (
    <>
      <style>{`
        /* =====================================================
           URL FORM 3D ANIMATIONS
        ====================================================== */

        @keyframes urlGlow {
          0%, 100% {
            opacity: .25;
            transform: scale(.95);
          }
          50% {
            opacity: .65;
            transform: scale(1.03);
          }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(5deg);
          }
        }

        @keyframes iconGlow {
          0%, 100% {
            box-shadow:
              0 8px 20px rgba(124,58,237,.12),
              inset 0 1px 0 rgba(255,255,255,.8);
          }
          50% {
            box-shadow:
              0 12px 30px rgba(168,85,247,.28),
              inset 0 1px 0 rgba(255,255,255,.9);
          }
        }

        @keyframes buttonGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes buttonGlow {
          0%, 100% {
            box-shadow:
              0 12px 30px rgba(124,58,237,.20),
              0 0 0 rgba(217,70,239,0);
          }
          50% {
            box-shadow:
              0 18px 45px rgba(168,85,247,.32),
              0 0 35px rgba(217,70,239,.15);
          }
        }

        @keyframes buttonShine {
          0% {
            transform: translateX(-180%) skewX(-20deg);
          }
          55%, 100% {
            transform: translateX(350%) skewX(-20deg);
          }
        }

        @keyframes borderFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes statusPulse {
          0%, 100% {
            transform: scale(.75);
            opacity: .45;
          }
          50% {
            transform: scale(1.25);
            opacity: 1;
          }
        }

        @keyframes sparkFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: .3;
          }
          50% {
            transform: translate3d(7px, -10px, 0) scale(1.3);
            opacity: .9;
          }
        }

        @keyframes scanner {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }
          20% {
            opacity: .5;
          }
          50% {
            opacity: .8;
          }
          80% {
            opacity: .3;
          }
          100% {
            transform: translateX(250%);
            opacity: 0;
          }
        }

        @keyframes typingGlow {
          0%, 100% {
            opacity: .35;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes arrowBounce {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }

        @keyframes tinyRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* =====================================================
           FORM CLASSES
        ====================================================== */

        .url-input-wrapper {
          position: relative;
        }

        .url-input-wrapper:focus-within .url-input-glow {
          opacity: 1;
          transform: scale(1.02);
        }

        .url-input-glow {
          animation: urlGlow 3s ease-in-out infinite;
          opacity: .4;
          transition:
            opacity .4s ease,
            transform .4s ease;
        }

        .url-icon {
          animation:
            iconFloat 4s ease-in-out infinite,
            iconGlow 3s ease-in-out infinite;
        }

        .url-border {
          background-size: 200% 200%;
          animation: borderFlow 5s ease infinite;
        }

        .shorten-button {
          background-size: 250% 250%;
          animation:
            buttonGradient 5s ease infinite,
            buttonGlow 3.5s ease-in-out infinite;
        }

        .shorten-button:hover .button-shine {
          animation: buttonShine 1.1s ease-out forwards;
        }

        .shorten-button:hover .button-arrow {
          animation: arrowBounce .7s ease-in-out infinite;
        }

        .status-dot {
          animation: statusPulse 2s ease-in-out infinite;
        }

        .floating-spark {
          animation: sparkFloat 3s ease-in-out infinite;
        }

        .scanner-line {
          animation: scanner 3.5s ease-in-out infinite;
        }

        .typing-dot {
          animation: typingGlow 1.5s ease-in-out infinite;
        }

        .tiny-rotate {
          animation: tinyRotate 8s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">

          {/* =================================================
              FLOATING DECORATIVE PARTICLES
          ================================================= */}

          <span
            className="
              floating-spark
              pointer-events-none
              absolute
              -right-2
              -top-3
              z-20
              hidden
              h-2
              w-2
              rounded-full
              bg-violet-500
              shadow-[0_0_15px_rgba(139,92,246,.8)]
              sm:block
            "
          />

          <span
            className="
              floating-spark
              pointer-events-none
              absolute
              right-[30%]
              -top-2
              z-20
              hidden
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400
              sm:block
            "
            style={{ animationDelay: "1s" }}
          />

          {/* =================================================
              INPUT + BUTTON
          ================================================= */}

          <div className="flex w-full flex-col gap-3 min-[700px]:flex-row">

            {/* =================================================
                URL INPUT
            ================================================= */}

            <div className="url-input-wrapper min-w-0 flex-1">

              {/* Glow behind input */}

              <div
                className="
                  url-input-glow
                  pointer-events-none
                  absolute
                  -inset-2
                  rounded-[22px]
                  bg-linear-to-r
                  from-violet-400/20
                  via-fuchsia-400/15
                  to-cyan-400/20
                  blur-xl
                "
              />

              {/* Animated border */}

              <div
                className="
                  url-border
                  relative
                  rounded-2xl
                  bg-linear-to-r
                  from-violet-200
                  via-fuchsia-200
                  to-cyan-200
                  p-[0.25]
                  transition-all
                  duration-500
                  focus-within:from-violet-400
                  focus-within:via-fuchsia-400
                  focus-within:to-cyan-400
                "
              >

                <div
                  className="
                    group
                    relative
                    flex
                    h-14
                    min-w-0
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-[15px]
                    bg-white/95
                    px-3
                    shadow-inner
                    shadow-slate-100
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:bg-white
                    focus-within:shadow-[inset_0_0_25px_rgba(139,92,246,.06)]
                  "
                >

                  {/* Scanner light */}

                  <span
                    className="
                      scanner-line
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-0
                      w-20
                      skew-x-[-20deg]
                      bg-linear-to-r
                      from-transparent
                      via-violet-300/20
                      to-transparent
                    "
                  />

                  {/* =================================================
                      URL ICON
                  ================================================== */}

                  <div
                    className="
                      url-icon
                      relative
                      z-10
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-violet-100
                      bg-linear-to-br
                      from-violet-50
                      via-fuchsia-50
                      to-cyan-50
                      text-violet-600
                      shadow-lg
                      transition-all
                      duration-500
                      group-focus-within:scale-110
                      group-focus-within:rotate-[-5deg]
                      group-focus-within:border-violet-200
                    "
                  >

                    {/* Icon glow */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-1
                        rounded-lg
                        bg-violet-400/20
                        blur-md
                        opacity-0
                        transition-opacity
                        duration-500
                        group-focus-within:opacity-100
                      "
                    />

                    <Link2
                      size={19}
                      strokeWidth={2.2}
                      className="relative z-10 transition-transform duration-500 group-focus-within:-rotate-12"
                    />

                  </div>

                  {/* =================================================
                      INPUT
                  ================================================== */}

                  <div className="relative z-10 min-w-0 flex-1">

                    <input
                      name="url"
                      value={url.url}
                      onChange={handleChange}
                      type="url"
                      required
                      placeholder="Paste a long URL here..."
                      className="
                        h-14
                        w-full
                        min-w-0
                        bg-transparent
                        text-sm
                        font-semibold
                        tracking-[-0.01em]
                        text-slate-800
                        outline-none
                        placeholder:text-slate-400
                        sm:text-base
                      "
                    />

                    {/* Typing indicator */}

                    <span
                      className="
                        typing-dot
                        pointer-events-none
                        absolute
                        bottom-1
                        left-0
                        h-0.5
                        w-8
                        rounded-full
                        bg-linear-to-r
                        from-violet-500
                        to-fuchsia-500
                        opacity-0
                        transition-opacity
                        duration-300
                        group-focus-within:opacity-100
                      "
                    />

                  </div>

                  {/* =================================================
                      URL TYPE BADGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      z-10
                      hidden
                      items-center
                      gap-1.5
                      rounded-xl
                      border
                      border-slate-100
                      bg-slate-50
                      px-3
                      py-2
                      text-[9px]
                      font-black
                      uppercase
                      tracking-widest
                      text-slate-400
                      shadow-sm
                      transition-all
                      duration-300
                      group-focus-within:border-violet-100
                      group-focus-within:bg-violet-50
                      group-focus-within:text-violet-500
                      sm:flex
                    "
                  >
                    <Globe size={11} />
                    URL
                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                SHORTEN BUTTON
            ================================================== */}

            <button
              type="submit"
              className="
                shorten-button
                group
                relative
                flex
                h-14
                shrink-0
                items-center
                justify-center
                gap-2.5
                overflow-hidden
                rounded-2xl
                bg-linear-to-r
                from-violet-600
                via-fuchsia-500
                to-cyan-500
                px-7
                text-sm
                font-black
                tracking-tight
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.015]
                hover:shadow-2xl
                active:translate-y-0
                active:scale-[0.97]
                min-[700px]:min-w-39
              "
            >

              {/* =================================================
                  MOVING SHINE
              ================================================== */}

              <span
                className="
                  button-shine
                  pointer-events-none
                  absolute
                  inset-y-[-30%]
                  left-[-50%]
                  w-[35%]
                  rotate-[-5deg]
                  skew-x-[-20deg]
                  bg-linear-to-r
                  from-transparent
                  via-white/45
                  to-transparent
                "
              />

              {/* =================================================
                  TOP HIGHLIGHT
              ================================================== */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-x-2
                  top-1
                  h-px
                  rounded-full
                  bg-white/50
                "
              />

              {/* =================================================
                  INNER GLASS
              ================================================== */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  ring-1
                  ring-inset
                  ring-white/25
                "
              />

              {/* =================================================
                  BUTTON GLOW
              ================================================== */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-20
                  w-20
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white/20
                  opacity-0
                  blur-2xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  BUTTON CONTENT
              ================================================== */}

              <span className="relative z-10 flex items-center gap-2.5">

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/15
                    ring-1
                    ring-white/20
                    transition-all
                    duration-300
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                >
                  <Sparkles
                    size={16}
                    className="transition-transform duration-500 group-hover:rotate-180"
                  />
                </span>

                <span>
                  Shorten
                </span>

                <ArrowRight
                  size={17}
                  className="
                    button-arrow
                    transition-transform
                    duration-300
                  "
                />

              </span>

            </button>

          </div>

          {/* =================================================
              HELPER / STATUS ROW
          ================================================== */}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">

            {/* Left status */}

            <div className="flex items-center gap-2">

              <span className="relative flex h-2 w-2">

                <span
                  className="
                    status-dot
                    absolute
                    inset-0
                    rounded-full
                    bg-emerald-400
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-500
                  "
                />

              </span>

              <p className="text-[11px] font-semibold text-slate-400">
                Ready to create your short link
              </p>

            </div>

            {/* Right mini feature */}

            <div
              className="
                hidden
                items-center
                gap-1.5
                rounded-full
                border
                border-violet-100
                bg-violet-50/70
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-wider
                text-violet-500
                sm:flex
              "
            >
              <Zap size={10} />

              Instant

            </div>

          </div>

          {/* =================================================
              BOTTOM DECORATIVE LINE
          ================================================== */}

          <div className="mt-5 flex items-center gap-2">

            <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-200 to-transparent" />

            <div className="tiny-rotate flex h-4 w-4 items-center justify-center rounded-full border border-violet-100 bg-white text-[7px] text-violet-400 shadow-sm">
              ✦
            </div>

            <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-200 to-transparent" />

          </div>

        </div>
      </form>
    </>
  );
};

export default UrlForm;