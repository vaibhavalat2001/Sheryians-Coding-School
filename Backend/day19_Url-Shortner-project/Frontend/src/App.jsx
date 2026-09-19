import UrlForm from "./components/UrlForm";
import UrlResult from "./components/UrlResult";
import UrlsList from "./components/UrlsList";

const App = () => {
  return (
    <>
      {/* Real CSS Animations */}
      <style>
        {`
          @keyframes heroBadge {
            0% {
              opacity: 0;
              transform: translateY(-20px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes heroTitle {
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

          @keyframes heroDescription {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes featureEnter {
            0% {
              opacity: 0;
              transform: translateY(25px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes cardEnter {
            0% {
              opacity: 0;
              transform: translateY(45px) scale(0.96);
              filter: blur(6px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes glowMove {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(35px, 25px) scale(1.12);
            }
          }

          @keyframes glowMoveReverse {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-35px, 30px) scale(1.15);
            }
          }

          @keyframes iconFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-6px) rotate(4deg);
            }
          }

          @keyframes gradientMove {
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

          @keyframes lineGlow {
            0%, 100% {
              opacity: 0.3;
              transform: scaleX(0.7);
            }
            50% {
              opacity: 1;
              transform: scaleX(1);
            }
          }

          @keyframes footerEnter {
            0% {
              opacity: 0;
              transform: translateY(15px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-badge {
            animation: heroBadge 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .hero-title {
            animation: heroTitle 0.9s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .hero-description {
            animation: heroDescription 0.7s 0.35s ease-out both;
          }

          .feature-1 {
            animation: featureEnter 0.6s 0.5s ease-out both;
          }

          .feature-2 {
            animation: featureEnter 0.6s 0.65s ease-out both;
          }

          .feature-3 {
            animation: featureEnter 0.6s 0.8s ease-out both;
          }

          .generator-card {
            animation: cardEnter 0.8s 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .glow-1 {
            animation: glowMove 7s ease-in-out infinite;
          }

          .glow-2 {
            animation: glowMoveReverse 8s ease-in-out infinite;
          }

          .glow-3 {
            animation: glowMove 9s ease-in-out infinite;
          }

          .url-icon {
            animation: iconFloat 3s ease-in-out infinite;
          }

          .gradient-text {
            background-size: 200% 200%;
            animation: gradientMove 5s ease infinite;
          }

          .animated-line {
            animation: lineGlow 3s ease-in-out infinite;
          }

          .footer-animation {
            animation: footerEnter 0.7s 1s ease-out both;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-badge,
            .hero-title,
            .hero-description,
            .feature-1,
            .feature-2,
            .feature-3,
            .generator-card,
            .glow-1,
            .glow-2,
            .glow-3,
            .url-icon,
            .gradient-text,
            .animated-line,
            .footer-animation {
              animation: none;
            }
          }
        `}
      </style>

      <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              glow-1
              absolute -left-32 -top-32
              h-96 w-96 rounded-full
              bg-violet-600/20
              blur-[120px]
            "
          />

          <div
            className="
              glow-2
              absolute right-[-120px] top-20
              h-96 w-96 rounded-full
              bg-cyan-500/15
              blur-[120px]
            "
          />

          <div
            className="
              glow-3
              absolute bottom-[-150px] left-1/3
              h-96 w-96 rounded-full
              bg-fuchsia-600/10
              blur-[130px]
            "
          />

          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Main Container */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

          {/* Hero Section */}
          <section className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div
              className="
                hero-badge
                mb-6 inline-flex items-center gap-2
                rounded-full border border-violet-400/20
                bg-violet-500/10 px-4 py-2
                text-xs font-medium text-violet-300
                shadow-lg shadow-violet-500/5
                backdrop-blur-md
                transition-all duration-300
                hover:scale-105
                hover:border-violet-400/40
                hover:bg-violet-500/15
                hover:shadow-violet-500/20
              "
            >
              <span className="animate-pulse text-violet-400">✦</span>
              Simple & Powerful URL Shortener
            </div>

            {/* Heading */}
            <h1
              className="
                hero-title
                text-4xl font-bold tracking-tight
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Long links?

              <span
                className="
                  gradient-text
                  mt-2 block
                  bg-gradient-to-r
                  from-violet-400
                  via-fuchsia-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                Make them short.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                hero-description
                mx-auto mt-6 max-w-2xl
                text-sm leading-6 text-zinc-400
                sm:text-base sm:leading-7
              "
            >
              Paste your long URL, get a clean short link, and track how many
              people click it — all in one simple place.
            </p>

            {/* Small Features */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">

              <div
                className="
                  feature-1
                  flex items-center gap-2
                  rounded-full border border-white/5
                  bg-white/[0.03] px-3 py-2
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-emerald-400/20
                  hover:bg-emerald-500/[0.06]
                "
              >
                <span className="text-emerald-400">✓</span>
                Fast & Simple
              </div>

              <div
                className="
                  feature-2
                  flex items-center gap-2
                  rounded-full border border-white/5
                  bg-white/[0.03] px-3 py-2
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/20
                  hover:bg-cyan-500/[0.06]
                "
              >
                <span className="text-cyan-400">✓</span>
                Track Clicks
              </div>

              <div
                className="
                  feature-3
                  flex items-center gap-2
                  rounded-full border border-white/5
                  bg-white/[0.03] px-3 py-2
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-400/20
                  hover:bg-violet-500/[0.06]
                "
              >
                <span className="text-violet-400">✓</span>
                Easy to Share
              </div>
            </div>
          </section>

          {/* URL Generator */}
          <section className="mx-auto mt-10 w-full max-w-4xl sm:mt-12">

            {/* Animated Gradient Border */}
            <div
              className="
                generator-card
                rounded-[28px]
                bg-gradient-to-r
                from-violet-500/30
                via-fuchsia-500/20
                to-cyan-500/30
                p-[1px]
                shadow-2xl
                shadow-violet-950/20
                transition-all duration-500
                hover:shadow-violet-500/10
              "
            >
              {/* Glass Card */}
              <div
                className="
                  rounded-[27px]
                  border border-white/[0.06]
                  bg-[#0d0d12]/90
                  p-4
                  backdrop-blur-2xl
                  sm:p-6
                  lg:p-8
                "
              >

                {/* Card Header */}
                <div className="mb-6 flex items-center gap-3">

                  <div
                    className="
                      url-icon
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-violet-500
                      to-fuchsia-500
                      shadow-lg
                      shadow-violet-500/20
                    "
                  >
                    🔗
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-white sm:text-base">
                      Create your short link
                    </h2>

                    <p className="mt-0.5 text-xs text-zinc-500">
                      Enter a URL below to get started
                    </p>
                  </div>
                </div>

                <UrlForm />

                <UrlResult />
              </div>
            </div>
          </section>

          {/* Links List */}
          <section className="mx-auto mt-12 w-full max-w-6xl sm:mt-16">

            {/* Section Heading */}
            <div className="mb-5 flex items-end justify-between gap-4">

              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                  Dashboard
                </p>

                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Your shortened links
                </h2>
              </div>

              <div
                className="
                  animated-line
                  hidden h-px flex-1
                  bg-gradient-to-r
                  from-violet-500/40
                  via-fuchsia-500/20
                  to-transparent
                  sm:block
                "
              />
            </div>

            <UrlsList />
          </section>

          {/* Footer */}
          <footer
            className="
              footer-animation
              mt-16 border-t border-white/5
              pt-6 text-center
            "
          >
            <p className="text-xs text-zinc-600">
              Built with ❤️ for simpler links
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default App;