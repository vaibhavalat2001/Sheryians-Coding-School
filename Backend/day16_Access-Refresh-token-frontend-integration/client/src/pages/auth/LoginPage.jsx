import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  LogIn,
} from "lucide-react";

import useApi from "../../config/api";
import { userStore } from "../../context/registerContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const api = useApi();

  const { setAccessToken, setUser } = useContext(userStore);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const onChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  // Handle login
  const onSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setError("");
    setLoading(true);

    try {
      // API call: POST /api/auth/login
      // Assumes useApi() has baseURL configured as http://localhost:3000/api
      const res = await api.post("/auth/login", formData);

      // Validate the expected API response
      const accessToken = res.data?.token?.accessToken;
      const user = res.data?.data?.user;

      if (!accessToken || !user) {
        throw new Error("Invalid login response from the server.");
      }

      // Save authentication data
      setAccessToken(accessToken);
      setUser(user);

      // Clear the form
      setFormData({
        email: "",
        password: "",
      });

      // Navigate to profile
      navigate("/profile", { replace: true });
    } catch (error) {
      console.error("Login error:", error);

      setError(
        error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Login failed. Please check your credentials and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-[#080B18] px-4 py-10 sm:px-6">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px] sm:h-96 sm:w-96" />

      {/* Main card */}
      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-2">
        {/* Left promotional section */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 p-10 text-white lg:flex xl:p-12">
          {/* Decorative circles */}
          <div className="absolute -right-20 top-28 h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute -right-10 top-36 h-44 w-44 rounded-full border border-white/10" />

          <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          {/* Brand */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md">
              <Sparkles size={24} />
            </div>

            <span className="text-xl font-bold tracking-wide">
              CreateSpace
            </span>
          </div>

          {/* Promotional content */}
          <div className="relative z-10 my-12">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
              <Sparkles size={15} />
              Welcome back
            </span>

            <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
              Good to see
              <br />
              you again.
              <br />
              <span className="text-indigo-200">Let's continue.</span>
            </h1>

            <p className="mt-6 max-w-sm text-base leading-7 text-indigo-100">
              Sign in to access your account, pick up where you left off, and
              enjoy your personalized CreateSpace experience.
            </p>

            {/* Security information */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <ShieldCheck size={25} />
              </div>

              <div>
                <p className="font-semibold">Your space, your account</p>

                <p className="mt-1 text-sm text-indigo-100">
                  Sign in and get back to what matters.
                </p>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-sm text-indigo-200">
            © {new Date().getFullYear()} CreateSpace. All rights reserved.
          </p>
        </div>

        {/* Login form section */}
        <div className="flex flex-col justify-center px-5 py-9 sm:px-10 sm:py-12 md:px-14 lg:px-10 xl:px-16">
          {/* Mobile brand */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/20">
              <Sparkles size={23} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                Create<span className="text-violet-400">Space</span>
              </h1>

              <p className="text-[10px] tracking-[0.15em] text-slate-500">
                YOUR PERSONAL SPACE
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <LogIn size={28} />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Welcome back
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
              Enter your credentials to sign in to your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>

              <div className="group relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-violet-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-500 hover:border-white/20 focus:border-violet-500 focus:bg-white/[0.06] focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-200"
                >
                  Password
                </label>
              </div>

              <div className="group relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-violet-400"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={onChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-12 text-sm text-white outline-none transition-all placeholder:text-slate-500 hover:border-white/20 focus:border-violet-500 focus:bg-white/[0.06] focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  disabled={loading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:cursor-not-allowed"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* API error message */}
            {error && (
              <div
                role="alert"
                aria-live="polite"
                className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm leading-5 text-red-300"
              >
                {error}
              </div>
            )}

            {/* Login button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-violet-600/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in to your account

                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>

          {/* Register link */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="whitespace-nowrap text-xs text-slate-500">
              NEW TO CREATESPACE?
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-violet-400 transition-colors hover:text-violet-300"
            >
              Create account
            </Link>
          </p>

          <p className="mt-8 text-center text-xs leading-5 text-slate-500">
            Your account details are handled by your application's
            authentication system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;