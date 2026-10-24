import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  UserPlus,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import useApi from "../../config/api";
import { userStore } from "../../context/registerContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const api = useApi();
  const { setAccessToken, setUser } = useContext(userStore);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/register", formData);

      setAccessToken(res.data.token.accessToken);
      setUser(res.data.data.user);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/profile");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080B18] px-4 py-10 sm:px-6">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-[100px]" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-2">
        {/* Left section */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 p-12 text-white lg:flex">
          <div className="absolute -right-20 top-28 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-10 top-36 h-44 w-44 rounded-full border border-white/10" />
          <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md">
              <Sparkles size={25} />
            </div>
            <span className="text-xl font-bold tracking-wide">CreateSpace</span>
          </div>

          <div className="relative z-10 my-12">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
              <Sparkles size={15} />
              Your next chapter starts here
            </span>

            <h1 className="max-w-md text-5xl font-bold leading-tight tracking-tight">
              Build your
              <br />
              account.
              <br />
              <span className="text-indigo-200">Unlock more.</span>
            </h1>

            <p className="mt-6 max-w-sm text-base leading-7 text-indigo-100">
              Join our community and enjoy a personalized experience designed
              around you. Your journey begins with one simple step.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <ShieldCheck size={25} />
              </div>
              <div>
                <p className="font-semibold">Your account, your space</p>
                <p className="mt-1 text-sm text-indigo-100">
                  A personalized experience awaits.
                </p>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-sm text-indigo-200">
            © {new Date().getFullYear()} CreateSpace. All rights reserved.
          </p>
        </div>

        {/* Right section: Registration form */}
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-14 lg:px-12 xl:px-16">
          {/* Mobile brand */}

          <div className="mb-8 flex  gap-5">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <UserPlus size={28} />
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Create account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Fill in your details below to get started.
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Full name
              </label>

              <div className="group relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-violet-400"
                />

                <input
                  id="name"
                  onChange={onChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={80}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-500 hover:border-white/20 focus:border-violet-500 focus:bg-white/[0.06] focus:ring-4 focus:ring-violet-500/10"
                />
              </div>
            </div>

            {/* Email */}
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
                  onChange={onChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-500 hover:border-white/20 focus:border-violet-500 focus:bg-white/[0.06] focus:ring-4 focus:ring-violet-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Password
              </label>

              <div className="group relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-violet-400"
                />

                <input
                  id="password"
                  onChange={onChange}
                  value={formData.password}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-12 text-sm text-white outline-none transition-all placeholder:text-slate-500 hover:border-white/20 focus:border-violet-500 focus:bg-white/[0.06] focus:ring-4 focus:ring-violet-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-violet-400"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Use at least 8 characters.
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm leading-5 text-red-300"
              >
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-violet-600/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Creating account...
                </>
              ) : (
                <>
                  Create my account
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-slate-500">ALREADY A MEMBER?</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold text-violet-400 transition-colors hover:text-violet-300"
            >
              Sign in
            </Link>
          </p>

          <p className="mt-8 text-center text-xs leading-5 text-slate-500">
            By creating an account, you agree to our terms of service and
            privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
