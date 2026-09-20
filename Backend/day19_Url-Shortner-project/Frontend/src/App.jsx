import UrlForm from "./components/UrlForm";
import UrlResult from "./components/UrlResult";
import UrlsList from "./components/UrlsList";

const App = () => {
  return (
    <>
      <style>{`
        /* =========================================================
           ANIMATIONS
        ========================================================= */

        @keyframes auroraOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          25% {
            transform: translate3d(80px, 50px, 0) scale(1.1);
          }
          50% {
            transform: translate3d(140px, -80px, 0) scale(1.2);
          }
          75% {
            transform: translate3d(30px, -120px, 0) scale(1.08);
          }
        }

        @keyframes auroraTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          30% {
            transform: translate3d(-80px, 60px, 0) scale(1.12);
          }
          60% {
            transform: translate3d(-140px, -50px, 0) scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(3deg);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(18px) rotate(-3deg);
          }
        }

        @keyframes rotateOrbit {
          from {
            transform: rotateX(65deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(65deg) rotateZ(360deg);
          }
        }

        @keyframes rotateOrbitReverse {
          from {
            transform: rotateX(65deg) rotateZ(360deg);
          }
          to {
            transform: rotateX(65deg) rotateZ(0deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: .2;
            transform: scale(.92);
          }
          50% {
            opacity: .65;
            transform: scale(1.08);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(.7);
            opacity: .7;
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 100%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-180%) skewX(-20deg);
          }
          100% {
            transform: translateX(350%) skewX(-20deg);
          }
        }

        @keyframes beam {
          0% {
            transform: translateX(-120%) rotate(15deg);
            opacity: 0;
          }
          25% {
            opacity: .4;
          }
          50% {
            opacity: .9;
          }
          75% {
            opacity: .35;
          }
          100% {
            transform: translateX(220%) rotate(15deg);
            opacity: 0;
          }
        }

        @keyframes particle {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: .25;
          }
          50% {
            transform: translate3d(25px, -45px, 0) scale(1.5);
            opacity: 1;
          }
        }

        @keyframes particleReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: .25;
          }
          50% {
            transform: translate3d(-30px, -40px, 0) scale(1.4);
            opacity: .9;
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(600%);
            opacity: 0;
          }
        }

        @keyframes reveal {
          0% {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes scaleReveal {
          0% {
            opacity: 0;
            transform: scale(.86);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes borderSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 50px 50px;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, .15);
          }
          50% {
            box-shadow:
              0 0 35px rgba(99, 102, 241, .28),
              0 0 70px rgba(168, 85, 247, .12);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* =========================================================
           UTILITY CLASSES
        ========================================================= */

        .aurora-one {
          animation: auroraOne 18s ease-in-out infinite;
        }

        .aurora-two {
          animation: auroraTwo 21s ease-in-out infinite;
        }

        .float {
          animation: float 5s ease-in-out infinite;
        }

        .float-reverse {
          animation: floatReverse 6s ease-in-out infinite;
        }

        .orbit-one {
          animation: rotateOrbit 20s linear infinite;
        }

        .orbit-two {
          animation: rotateOrbitReverse 27s linear infinite;
        }

        .orbit-three {
          animation: rotateOrbit 34s linear infinite;
        }

        .pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .pulse-ring {
          animation: pulseRing 3s ease-out infinite;
        }

        .gradient-moving {
          background-size: 300% 300%;
          animation: gradientMove 7s ease infinite;
        }

        .beam {
          animation: beam 8s ease-in-out infinite;
        }

        .particle-one {
          animation: particle 6s ease-in-out infinite;
        }

        .particle-two {
          animation: particleReverse 8s ease-in-out infinite;
        }

        .scan-line {
          animation: scan 5s linear infinite;
        }

        .reveal {
          animation: reveal 1s cubic-bezier(.22, 1, .36, 1) both;
        }

        .reveal-delay {
          animation: reveal 1s .15s cubic-bezier(.22, 1, .36, 1) both;
        }

        .reveal-delay-2 {
          animation: reveal 1s .3s cubic-bezier(.22, 1, .36, 1) both;
        }

        .reveal-delay-3 {
          animation: reveal 1s .45s cubic-bezier(.22, 1, .36, 1) both;
        }

        .scale-reveal {
          animation: scaleReveal 1s .4s cubic-bezier(.22, 1, .36, 1) both;
        }

        .grid-moving {
          animation: gridMove 20s linear infinite;
        }

        .shine {
          position: relative;
          overflow: hidden;
        }

        .shine::after {
          content: "";
          position: absolute;
          top: -40%;
          left: 0;
          width: 24%;
          height: 180%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.7),
            transparent
          );
          animation: shine 4.5s ease-in-out infinite;
          pointer-events: none;
        }

        .animated-border {
          position: relative;
          overflow: hidden;
        }

        .animated-border::before {
          content: "";
          position: absolute;
          width: 180%;
          height: 180%;
          left: -40%;
          top: -40%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 35deg,
            #4f46e5 70deg,
            #7c3aed 105deg,
            #ec4899 145deg,
            #06b6d4 190deg,
            #3b82f6 230deg,
            transparent 275deg,
            transparent 360deg
          );
          animation: borderSpin 8s linear infinite;
        }

        .animated-border-content {
          position: relative;
          z-index: 2;
        }

        .glow-pulse {
          animation: glowPulse 4s ease-in-out infinite;
        }

        .shimmer-text {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }

        .spin-slow {
          animation: spinSlow 18s linear infinite;
        }

        .perspective {
          perspective: 1400px;
        }

        .card-3d {
          transform-style: preserve-3d;
          transition:
            transform .5s cubic-bezier(.22, 1, .36, 1),
            box-shadow .5s ease,
            border-color .3s ease;
        }

        .card-3d:hover {
          transform:
            perspective(1200px)
            translateY(-8px)
            rotateX(2deg)
            rotateY(-2deg);
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

      <main className="relative min-h-screen overflow-hidden bg-[#f8f9ff] text-slate-900">

        {/* =========================================================
            BACKGROUND
        ========================================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Violet / Indigo Aurora */}
          <div
            className="
              aurora-one
              absolute
              -left-[320px]
              -top-[330px]
              h-[750px]
              w-[750px]
              rounded-full
              bg-indigo-500/20
              blur-[140px]
            "
          />

          {/* Purple Aurora */}
          <div
            className="
              aurora-two
              absolute
              left-[35%]
              -top-[280px]
              h-[600px]
              w-[600px]
              rounded-full
              bg-purple-500/15
              blur-[140px]
            "
          />

          {/* Cyan Aurora */}
          <div
            className="
              aurora-two
              absolute
              -right-[300px]
              top-[160px]
              h-[700px]
              w-[700px]
              rounded-full
              bg-cyan-400/20
              blur-[140px]
            "
          />

          {/* Pink Aurora */}
          <div
            className="
              aurora-one
              absolute
              bottom-[-350px]
              left-[25%]
              h-[700px]
              w-[700px]
              rounded-full
              bg-pink-400/15
              blur-[140px]
            "
          />

          {/* Blue Bottom Glow */}
          <div
            className="
              aurora-two
              absolute
              bottom-[-300px]
              right-[5%]
              h-[500px]
              w-[500px]
              rounded-full
              bg-blue-400/10
              blur-[120px]
            "
          />

          {/* Animated Grid */}
          <div
            className="grid-moving absolute inset-0 opacity-60"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(99,102,241,.045) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(99,102,241,.045) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Center Spotlight */}
          <div
            className="
              absolute
              left-1/2
              top-[180px]
              h-[650px]
              w-[1000px]
              -translate-x-1/2
              rounded-full
              bg-gradient-to-r
              from-indigo-300/10
              via-white/80
              to-cyan-300/10
              blur-[100px]
            "
          />

          {/* Center Glow */}
          <div
            className="
              pulse-glow
              absolute
              left-1/2
              top-[450px]
              h-[500px]
              w-[800px]
              -translate-x-1/2
              rounded-full
              bg-gradient-to-r
              from-violet-400/10
              via-fuchsia-400/10
              to-cyan-400/10
              blur-[110px]
            "
          />

          {/* Light Beam */}
          <div
            className="
              beam
              absolute
              left-[-30%]
              top-[390px]
              h-px
              w-[75%]
              bg-gradient-to-r
              from-transparent
              via-indigo-400/80
              to-transparent
              blur-[1px]
            "
          />

          {/* Second Light Beam */}
          <div
            className="
              beam
              absolute
              right-[-30%]
              top-[720px]
              h-px
              w-[65%]
              bg-gradient-to-r
              from-transparent
              via-cyan-400/60
              to-transparent
            "
            style={{ animationDelay: "3s" }}
          />

          {/* Floating Particles */}

          <span
            className="
              particle-one
              absolute
              left-[7%]
              top-[27%]
              h-2
              w-2
              rounded-full
              bg-indigo-500
              shadow-[0_0_20px_rgba(99,102,241,.8)]
            "
          />

          <span
            className="
              particle-two
              absolute
              left-[15%]
              top-[63%]
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-500
              shadow-[0_0_15px_rgba(6,182,212,.7)]
            "
          />

          <span
            className="
              particle-one
              absolute
              right-[12%]
              top-[25%]
              h-2
              w-2
              rounded-full
              bg-pink-500
              shadow-[0_0_20px_rgba(236,72,153,.8)]
            "
          />

          <span
            className="
              particle-two
              absolute
              right-[8%]
              top-[65%]
              h-1.5
              w-1.5
              rounded-full
              bg-purple-500
            "
          />

          <span
            className="
              particle-one
              absolute
              left-[43%]
              top-[15%]
              h-1.5
              w-1.5
              rounded-full
              bg-violet-500
            "
          />

          <span
            className="
              particle-two
              absolute
              right-[37%]
              top-[47%]
              h-2
              w-2
              rounded-full
              bg-blue-500/60
            "
          />

          <span
            className="
              particle-one
              absolute
              left-[27%]
              top-[45%]
              h-1
              w-1
              rounded-full
              bg-fuchsia-500
            "
          />

          <span
            className="
              particle-two
              absolute
              right-[25%]
              top-[55%]
              h-1.5
              w-1.5
              rounded-full
              bg-indigo-500
            "
          />
        </div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

          {/* =======================================================
              HERO
          ======================================================= */}

          <section className="perspective mx-auto max-w-5xl text-center">

            {/* Badge */}

            <div className="reveal mb-7 inline-flex">
              <div
                className="
                  shine
                  flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-indigo-200
                  bg-white/80
                  px-5
                  py-2.5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[.18em]
                  text-indigo-700
                  shadow-xl
                  shadow-indigo-100
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-purple-200
                  hover:shadow-2xl
                  hover:shadow-purple-200
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-indigo-500 opacity-60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
                </span>

                Smart URL Workspace

                <span className="text-purple-300">✦</span>

                <span className="hidden text-slate-400 sm:inline">
                  Fast & Simple
                </span>
              </div>
            </div>

            {/* Heading */}

            <h1
              className="
                reveal-delay
                text-5xl
                font-black
                leading-[.95]
                tracking-[-.06em]
                text-slate-950
                sm:text-7xl
                lg:text-[88px]
              "
            >
              Long links?

              <span
                className="
                  gradient-moving
                  mt-4
                  block
                  bg-gradient-to-r
                  from-indigo-600
                  via-purple-600
                  via-fuchsia-500
                  to-cyan-500
                  bg-clip-text
                  pb-4
                  text-transparent
                "
              >
                Make them tiny.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                reveal-delay-2
                mx-auto
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-slate-500
                sm:text-lg
                sm:leading-8
              "
            >
              Transform long and messy URLs into clean, memorable links.
              Share them anywhere and manage everything from one beautiful
              workspace.
            </p>

            {/* Feature Chips */}

            <div
              className="
                reveal-delay-3
                mt-9
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >
              {[
                {
                  icon: "⚡",
                  text: "Instant Shortening",
                  color: "hover:border-indigo-200 hover:text-indigo-600",
                },
                {
                  icon: "📊",
                  text: "Click Tracking",
                  color: "hover:border-purple-200 hover:text-purple-600",
                },
                {
                  icon: "🔗",
                  text: "Easy Sharing",
                  color: "hover:border-cyan-200 hover:text-cyan-600",
                },
                {
                  icon: "✨",
                  text: "Clean Links",
                  color: "hover:border-pink-200 hover:text-pink-600",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className={`
                    group
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white
                    bg-white/75
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-slate-600
                    shadow-lg
                    shadow-slate-200/50
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:bg-white
                    hover:shadow-xl
                    ${item.color}
                  `}
                >
                  <span className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                    {item.icon}
                  </span>

                  {item.text}
                </div>
              ))}
            </div>
          </section>

          {/* =======================================================
              URL CREATOR
          ======================================================= */}

          <section className="perspective relative mx-auto mt-20 w-full max-w-5xl sm:mt-24">

            {/* 3D Orbit */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[-100px]
                hidden
                items-center
                justify-center
                md:flex
              "
            >
              <div
                className="
                  orbit-one
                  absolute
                  h-[720px]
                  w-[720px]
                  rounded-full
                  border
                  border-indigo-200/30
                "
              />

              <div
                className="
                  orbit-two
                  absolute
                  h-[600px]
                  w-[600px]
                  rounded-full
                  border
                  border-cyan-200/30
                "
              />

              <div
                className="
                  orbit-three
                  absolute
                  h-[480px]
                  w-[480px]
                  rounded-full
                  border
                  border-fuchsia-200/30
                "
              />

              <div className="absolute left-[7%] top-[38%] h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,.9)]" />

              <div className="absolute right-[7%] top-[25%] h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,.9)]" />

              <div className="absolute bottom-[15%] right-[18%] h-2.5 w-2.5 rounded-full bg-pink-500 shadow-[0_0_30px_rgba(236,72,153,.9)]" />

              <div className="absolute bottom-[25%] left-[14%] h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,.9)]" />
            </div>

            {/* Main Glow */}

            <div
              className="
                pulse-glow
                absolute
                -inset-10
                rounded-[50px]
                bg-gradient-to-r
                from-indigo-400/20
                via-purple-400/15
                via-pink-400/10
                to-cyan-400/20
                blur-3xl
              "
            />

            {/* Animated Border */}

            <div
              className="
                animated-border
                scale-reveal
                rounded-[34px]
                p-[2px]
                shadow-[0_30px_100px_rgba(79,70,229,.18)]
              "
            >
              <div
                className="
                  animated-border-content
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-white/95
                  p-5
                  backdrop-blur-2xl
                  sm:p-7
                  lg:p-9
                "
              >

                {/* Scanner */}

                <div
                  className="
                    scan-line
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-28
                    w-full
                    bg-gradient-to-b
                    from-transparent
                    via-indigo-400/10
                    to-transparent
                  "
                />

                {/* Header */}

                <div
                  className="
                    shine
                    relative
                    mb-8
                    flex
                    items-center
                    justify-between
                    overflow-hidden
                    rounded-2xl
                    border
                    border-indigo-100
                    bg-gradient-to-r
                    from-indigo-50
                    via-white
                    to-cyan-50
                    p-4
                  "
                >
                  <div className="flex items-center gap-4">

                    {/* Icon */}

                    <div className="relative hidden sm:block">

                      <div className="absolute inset-0 rounded-2xl bg-indigo-500 blur-xl opacity-30" />

                      <div
                        className="
                          float
                          relative
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-indigo-600
                          via-purple-600
                          to-cyan-500
                          text-2xl
                          shadow-xl
                          shadow-indigo-300/40
                        "
                      >
                        🔗
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-black tracking-tight text-slate-900 sm:text-xl">
                        Create your short link
                      </h2>

                      <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                        Paste a long URL and make it share-ready.
                      </p>
                    </div>
                  </div>

                  {/* System Status */}

                  <div
                    className="
                      hidden
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-emerald-100
                      bg-emerald-50
                      px-3
                      py-2
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-emerald-600
                      sm:flex
                    "
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
                      <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                    </span>

                    System Ready
                  </div>
                </div>

                {/* Existing Components */}

                <UrlForm />

                <UrlResult />

                {/* Bottom Features */}

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-6
                    gap-y-3
                    border-t
                    border-slate-100
                    pt-5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-widest
                    text-slate-400
                  "
                >
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.6)]" />
                    Fast
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,.6)]" />
                    Secure
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,.6)]" />
                    Shareable
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,.6)]" />
                    Analytics
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* =======================================================
              HOW IT WORKS
          ======================================================= */}

          <section className="mx-auto mt-28 max-w-5xl">

            <div className="mb-12 text-center">

              <div
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-indigo-100
                  bg-indigo-50
                  px-3
                  py-1.5
                  text-[9px]
                  font-black
                  uppercase
                  tracking-widest
                  text-indigo-600
                "
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
                How it works
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                From long to tiny in seconds.
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Three simple steps to create and manage cleaner links.
              </p>
            </div>

            <div className="relative grid gap-5 md:grid-cols-3">

              {/* Connecting Line */}

              <div
                className="
                  absolute
                  left-[18%]
                  right-[18%]
                  top-12
                  hidden
                  h-px
                  bg-gradient-to-r
                  from-indigo-200
                  via-purple-200
                  via-pink-200
                  to-cyan-200
                  md:block
                "
              />

              {[
                {
                  number: "01",
                  icon: "↗",
                  title: "Paste your URL",
                  text: "Drop your long link into the generator.",
                  gradient: "from-indigo-500 to-blue-500",
                },
                {
                  number: "02",
                  icon: "✦",
                  title: "Create your link",
                  text: "Turn it into a compact shareable URL.",
                  gradient: "from-purple-500 to-fuchsia-500",
                },
                {
                  number: "03",
                  icon: "✓",
                  title: "Share & track",
                  text: "Share your link and monitor clicks.",
                  gradient: "from-cyan-500 to-teal-500",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="
                    card-3d
                    group
                    relative
                    rounded-3xl
                    border
                    border-white
                    bg-white/75
                    p-6
                    text-center
                    shadow-xl
                    shadow-slate-200/50
                    backdrop-blur-xl
                    hover:border-indigo-100
                    hover:shadow-2xl
                    hover:shadow-indigo-100/60
                  "
                >
                  <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center">

                    <div
                      className={`
                        absolute
                        inset-0
                        rounded-2xl
                        bg-gradient-to-br
                        ${item.gradient}
                        opacity-20
                        blur-xl
                        transition-all
                        duration-500
                        group-hover:scale-150
                        group-hover:opacity-40
                      `}
                    />

                    <div
                      className={`
                        relative
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${item.gradient}
                        text-xl
                        font-black
                        text-white
                        shadow-xl
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                      `}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <span className="text-[10px] font-black tracking-widest text-slate-300">
                    {item.number}
                  </span>

                  <h3 className="mt-2 text-base font-black text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* =======================================================
              LINKS DASHBOARD
          ======================================================= */}

          <section className="mt-28">

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <div className="mb-2 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-indigo-400" />
                    <span className="relative h-2 w-2 rounded-full bg-indigo-600" />
                  </span>

                  <p className="text-[9px] font-black uppercase tracking-[.25em] text-indigo-600">
                    Live Workspace
                  </p>
                </div>

                <h2 className="text-3xl font-black tracking-[-.03em] text-slate-900">
                  Your shortened links
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Manage, copy and monitor your links from one place.
                </p>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  self-start
                  rounded-full
                  border
                  border-emerald-100
                  bg-emerald-50/80
                  px-4
                  py-2
                  text-[9px]
                  font-black
                  uppercase
                  tracking-wider
                  text-emerald-600
                  shadow-sm
                  backdrop-blur
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                Everything synced
              </div>
            </div>

            {/* Dashboard Shell */}

            <div
              className="
                rounded-[30px]
                border
                border-white
                bg-white/55
                p-2
                shadow-2xl
                shadow-indigo-100/50
                backdrop-blur-xl
                sm:p-3
              "
            >
              <div
                className="
                  rounded-[25px]
                  border
                  border-indigo-50
                  bg-white/80
                  p-3
                  sm:p-5
                "
              >
                <UrlsList />
              </div>
            </div>
          </section>

          {/* =======================================================
              BOTTOM CTA
          ======================================================= */}

          <section className="relative mt-28 overflow-hidden rounded-[35px] shadow-2xl shadow-purple-200/50">

            {/* Animated Gradient Background */}

            <div
              className="
                gradient-moving
                absolute
                inset-0
                bg-gradient-to-br
                from-indigo-600
                via-purple-600
                via-fuchsia-600
                to-cyan-500
              "
            />

            {/* Glow */}

            <div className="aurora-one absolute -left-20 -top-40 h-96 w-96 rounded-full bg-white/20 blur-[100px]" />

            <div className="aurora-two absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-300/25 blur-[100px]" />

            {/* Decorative Rings */}

            <div className="spin-slow absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/15" />

            <div className="spin-slow absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

            <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full border border-white/10" />

            {/* Particles */}

            <span className="particle-one absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-white/50" />

            <span className="particle-two absolute right-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/60" />

            <span className="particle-one absolute bottom-[20%] right-[35%] h-2 w-2 rounded-full bg-white/40" />

            {/* Content */}

            <div className="relative px-6 py-14 text-center sm:px-12 sm:py-16">

              <div className="float mb-4 text-3xl">
                ✨
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Make every link look better.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75">
                Clean URLs are easier to share, easier to remember, and easier
                to manage.
              </p>

              <div
                className="
                  shine
                  mt-7
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-xs
                  font-black
                  text-indigo-600
                  shadow-2xl
                  shadow-indigo-900/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-105
                  hover:shadow-white/30
                "
              >
                <span>Start shortening</span>
                <span className="text-base transition-transform duration-300 hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </section>

          {/* =======================================================
              FOOTER
          ======================================================= */}

          <footer className="mt-16 border-t border-slate-200/70 pt-8 pb-5 text-center">

            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-semibold text-slate-400">
                Built with
              </span>

              <span className="float text-sm text-pink-500">
                ♥
              </span>

              <span className="text-xs font-semibold text-slate-400">
                for simpler links
              </span>
            </div>

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
                text-[8px]
                font-black
                uppercase
                tracking-[.25em]
                text-slate-300
              "
            >
              <span className="hover:text-indigo-500">Short</span>
              <span>✦</span>
              <span className="hover:text-purple-500">Clean</span>
              <span>✦</span>
              <span className="hover:text-pink-500">Shareable</span>
              <span>✦</span>
              <span className="hover:text-cyan-500">Smart</span>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default App;