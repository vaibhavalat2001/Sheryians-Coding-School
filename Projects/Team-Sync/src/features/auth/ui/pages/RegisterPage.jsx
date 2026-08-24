import registerImage from "./register.png";
import {
  User,
  Mail,
  Lock,
  Sparkles,
  Network,
  Check,
  Eye,
  EyeOff,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    registerSubmit,
    showPassword,
    setShowPassword,
    navigate,
    getPasswordStrength,
    password,
    setPassword,
  } = useAuth();

  const strength = getPasswordStrength();

  return (
    <div className="h-screen overflow-auto bg-[#111016] text-white">
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="flex h-screen w-full">
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}
        <section className="relative hidden h-full w-[40%] border-r border-white/5 lg:block">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={registerImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Image dark overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-[#071126]/60 via-[#08152d]/25 to-[#111016]/95" />

            {/* Bottom dark fade */}
            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-[#111016] via-[#111016]/70 to-transparent" />
          </div>

          {/* Logo */}
          <div className="absolute left-6 top-5 z-10">
            <h2 className="text-[20px] font-bold tracking-tight">
              team-sync
            </h2>
          </div>

          {/* Left Content */}
          <div className="absolute bottom-11 left-12 right-10 z-10">
            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <Sparkles
                size={18}
                strokeWidth={1.8}
                className="text-[#d9c2ff]"
              />

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#cdb9ec]">
                Next-Gen Intelligence
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-110 text-[32px] font-bold leading-tight text-[#f5f2fa] xl:text-[34px]">
              Accelerate your team's intelligence.
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-md text-[15px] leading-[1.6] text-[#d0ccd6]">
              Connect your enterprise data to our specialized AI models and
              unlock unparalleled strategic insights in seconds.
            </p>

            {/* Stats */}
            <div className="mt-9 flex items-center gap-10">
              <div>
                <p className="text-[22px] font-bold text-[#e9e5ee]">99.9%</p>

                <p className="mt-0.5 text-[11px] text-[#88848e]">Uptime SLA</p>
              </div>

              <div>
                <p className="text-[22px] font-bold text-[#e9e5ee]">ISO</p>

                <p className="mt-0.5 text-[11px] text-[#88848e]">
                  27001 Certified
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}
        {/* =====================================================
    RIGHT SIDE
===================================================== */}
        <section className="flex h-full w-full items-center justify-center  px-6 py-6 sm:px-10 lg:w-[60%] lg:px-12 xl:px-20">
          <div className="w-full max-w-120">
            {/* Heading */}
            <div className="mb-5">
              <h2 className="text-2xl xl:text-3xl font-bold leading-tight tracking-tight text-[#f1edf7]">
                Create your account
              </h2>

              <p className="mt-2 text-[14px] text-[#aaa6af]">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit(registerSubmit)} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold text-[#c9c5ce]">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#65616b]"
                  />

                  <input
                    {...register("name", {
                      required: "Full name is required",
                      pattern: {
                        value: /^[A-Za-z]+(?:\s[A-Za-z]+)+$/,
                        message: "Please enter your first and last name",
                      },
                    })}
                    type="text"
                    placeholder="Enter your full name"
                    className="h-13 w-full rounded-lg border border-[#48454d] bg-[#1c1a1f] pl-12 pr-4 text-[15px] text-white outline-none transition placeholder:text-[#55515d] focus:border-[#a78bfa] focus:ring-1 focus:ring-[#a78bfa]/30 "
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold text-[#c9c5ce]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#65616b]"
                  />

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
                    className="h-13 w-full rounded-lg border border-[#48454d] bg-[#1c1a1f] pl-12 pr-4 text-[15px] text-white outline-none transition placeholder:text-[#55515d] focus:border-[#a78bfa] focus:ring-1 focus:ring-[#a78bfa]/30 xl:pl-16"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold text-[#c9c5ce]">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#65616b]"
                  />

                  <input
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-13 w-full rounded-lg border border-[#48454d] bg-[#1c1a1f] pl-12 pr-12 text-[15px] text-white outline-none transition placeholder:text-[#55515d] focus:border-[#a78bfa] focus:ring-1 focus:ring-[#a78bfa]/30  xl:pl-16 xl:pr-14"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#65616b] transition hover:text-[#aaa6b2]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}

                {/* Password Strength */}
                <div className="mt-1.5">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          item <= strength
                            ? [
                                "bg-red-500",
                                "bg-orange-500",
                                "bg-yellow-400",
                                "bg-green-500",
                              ][item - 1]
                            : "bg-[#29272c]"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-[11px] text-[#c9b1ef]">
                    {strength === 0 && "Enter a password"}
                    {strength === 1 && "Weak password"}
                    {strength === 2 && "Fair password"}
                    {strength === 3 && "Good password"}
                    {strength === 4 && "Strong password"}
                  </p>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-0.5">
                <label className="relative mt-0.5 flex cursor-pointer">
                  <input
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-[#4b4850] bg-transparent transition checked:border-[#a78bfa] checked:bg-[#a78bfa]"
                  />

                  <Check
                    size={14}
                    strokeWidth={3}
                    className="pointer-events-none absolute left-1 top-1 hidden text-[#17131d] peer-checked:block"
                  />
                </label>

                <p className="text-[12px] leading-5 text-[#aaa6af]">
                  I agree to{" "}
                  <a href="#" className="text-[#c5aaf2] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#c5aaf2] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Create Account */}
              <button
                type="submit"
                className="h-13 w-full rounded-lg bg-linear-to-r from-[#7955bd] to-[#c3a9fa] text-base font-bold text-[#181126] shadow-lg shadow-purple-500/10 transition hover:brightness-110 active:scale-[0.99]"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-4 ">
              <div className="h-px flex-1 bg-[#29272d]" />

              <span className="whitespace-nowrap text-[10px] font-semibold uppercase text-[#55515a]">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-[#29272d]" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex h-13 items-center justify-center gap-3 rounded-lg border border-[#48454d] bg-transparent text-[15px] font-medium text-[#ddd9e1] transition hover:bg-white/4"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="h-5 w-5"
                />
                Google
              </button>

              <button
                type="button"
                className="flex h-13 items-center justify-center gap-3 rounded-lg border border-[#48454d] bg-transparent text-[15px] font-medium text-[#ddd9e1] transition hover:bg-white/4 "
              >
                <Network size={19} strokeWidth={2} />
                SSO
              </button>
            </div>

            {/* Login */}
            <p className="mt-4 text-center text-[14px] text-[#aaa6af]">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold text-[#c7adff] hover:underline"
                onClick={() => navigate("/")}
              >
                Log In
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="h-23 border-t border-white/5 bg-[#121116] px-6">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <h3 className="text-[19px] font-bold">team-sync</h3>

          {/* Links */}
          <div className="hidden items-center gap-7 text-[12px] text-[#aaa6af] md:flex">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white">
              Security
            </a>

            <a href="#" className="hover:text-white">
              System Status
            </a>
          </div>

          {/* Copyright */}
          <p className="hidden text-[12px] text-[#aaa6af] lg:block">
            © 2026 team-sync. Enterprise Intelligence Platforms.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RegisterPage;
