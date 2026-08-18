import { FiMail, FiLock, FiEye, FiEyeOff, FiShoppingBag } from "react-icons/fi";
import { useAuth } from "../../hooks/authHook";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    loginForm,
    navigate,
    showPassword,
    setShowPassword,
  } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 p-4">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            <FiShoppingBag className="text-blue-600 text-3xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Welcome Back 👋</h1>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Login to continue shopping
        </p>

        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium mb-2 block">UserName</label>

            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-lg" />

              <input
                {...register("username", {
                  required: "username is required",
                })}
                type="text"
                placeholder="Enter user name"
                className="w-full bg-white/20 border border-white/20 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-white focus:bg-white/30 placeholder:text-gray-300 transition"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 font-semibold">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium mb-2 block">Password</label>

            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-lg" />

              <input
                {...register("password", {
                  required: "Password is required",
                //   pattern: {
                //     value:
                //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                //     message:
                //       "Password must contain uppercase, lowercase, number and special character",
                //   },
                  minLength: {
                    value: 8,
                    message: "password must be at least 8 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-white/20 border border-white/20 rounded-xl py-3 pl-12 pr-12 outline-none focus:border-white focus:bg-white/30 placeholder:text-gray-300 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <FiEyeOff className="text-xl text-gray-300" />
                ) : (
                  <FiEye className="text-xl text-gray-300" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 font-semibold">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-gray-200 hover:text-white"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-white text-blue-700 font-bold py-3 rounded-xl hover:scale-[1.02] hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="text-sm text-gray-200">OR</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Register */}
        <p className="text-center text-gray-200">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("register")}
            className="font-semibold text-white hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
