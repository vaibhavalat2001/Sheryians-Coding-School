import {
  Network,
  Cloud,
  SquareTerminal,
  ArrowRight,
  EyeOff,
  Eye,
} from "lucide-react";
import loginImage from "./login.png";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    loginSubmit,
    showPassword,
    setShowPassword,
    navigate,
  } = useAuth();

  return (
    <div className="min-h-screen bg-[#111016] text-white">
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 -bottom-45 h-105 w-105 rounded-full bg-[#4c3b78]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -right-38 -top-25 h-112 w-113 rounded-full bg-[#4c3b78]/10 blur-[140px]" />

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-100">
          <div className="rounded-xl border border-[#2d2a31] bg-[#1b191e]/95 px-7 py-7 shadow-2xl shadow-black/30 sm:px-8">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-[#7356bd] shadow-lg shadow-purple-900/20">
                <Network size={25} strokeWidth={2} className="text-[#e9dcff]" />
              </div>

              <h1 className="text-[21px] font-bold tracking-tight text-[#eeeaf2]">
                team-sync
              </h1>

              <p className="mt-1 text-[13px] text-[#aaa6af]">
                Sign in to your workspace
              </p>
            </div>

            {/* Social Login */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex h-10 items-center justify-center gap-2 rounded-md border border-[#39363e] bg-[#29272d] text-[11px] font-semibold uppercase tracking-wide text-[#d8d4dc] transition hover:border-[#504b58] hover:bg-[#302d34]"
              >
                <Cloud size={16} strokeWidth={2} />
                Google
              </button>

              <button
                type="button"
                className="flex h-10 items-center justify-center gap-2 rounded-md border border-[#39363e] bg-[#29272d] text-[11px] font-semibold uppercase tracking-wide text-[#d8d4dc] transition hover:border-[#504b58] hover:bg-[#302d34]"
              >
                <SquareTerminal size={16} strokeWidth={2} />
                GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#29272e]" />

              <span className="whitespace-nowrap text-[10px] font-medium text-[#8c8791]">
                or continue with email
              </span>

              <div className="h-px flex-1 bg-[#29272e]" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(loginSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#c4c0c9]">
                  Email Address
                </label>

                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  placeholder="name@company.com"
                  className="h-10 w-full rounded-md border border-[#35323a] bg-[#0e0d11] px-4 text-[13px] text-white outline-none transition placeholder:text-[#514d57] focus:border-[#795bc1] focus:ring-1 focus:ring-[#795bc1]/20"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-[11px] font-semibold uppercase tracking-wide text-[#c4c0c9]">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-[11px] font-medium text-[#bda3eb] transition hover:text-[#d4c2f5]"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  {...register("password", {
                    // required: "Password is required",
                    // pattern: {
                    //   value:
                    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    //   message:
                    //     "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
                    // },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-10 w-full rounded-md border border-[#35323a] bg-[#0e0d11] px-4 text-[13px] text-white outline-none transition placeholder:text-[#514d57] focus:border-[#795bc1] focus:ring-1 focus:ring-[#795bc1]/20"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-11 -translate-y-1/2 text-[#65616b] transition hover:text-[#aaa6b2]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 cursor-pointer appearance-none rounded border border-[#46424d] bg-[#0e0d11] checked:border-[#7658be] checked:bg-[#7658be]"
                />

                <span className="text-[11px] text-[#aaa6af]">
                  Stay signed in
                </span>
              </div>

              {/* Sign In */}
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#7254bb] text-[13px] font-medium text-[#e9defa] shadow-lg shadow-purple-900/20 transition duration-200 hover:bg-[#8062c8] active:scale-[0.99]"
              >
                Sign In
                <ArrowRight size={17} strokeWidth={2} />
              </button>
            </form>

            {/* Bottom Divider */}
            <div className="mt-7 h-px bg-[#29272e]" />

            {/* Register */}
            <p className="pt-6 text-center text-[11px] text-[#aaa6af]">
              Don't have an account?{" "}
              <a
                onClick={() => navigate("register")}
                className="font-semibold text-[#c7adff] transition hover:text-[#dfd0fa] hover:underline cursor-pointer"
              >
                Sign Up
              </a>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-5 text-center">
            <p className="text-[11px] text-[#5f5b65]">
              © 2026 team-sync. Enterprise Intelligence Platforms.
            </p>

            <div className="mt-2 flex justify-center gap-5">
              <a
                href="#"
                className="text-[10px] text-[#5f5b65] transition hover:text-[#aaa6af]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[10px] text-[#5f5b65] transition hover:text-[#aaa6af]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="pointer-events-none absolute bottom-24 right-[8%] hidden h-56 w-57 overflow-hidden rounded-lg border border-white/2 bg-black/10 opacity-40 xl:block">
          <img src={loginImage} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
