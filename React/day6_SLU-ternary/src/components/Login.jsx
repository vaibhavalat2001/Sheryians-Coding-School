import React from "react";

const Login = ({setToggle}) => {
  return (
    <div className="flex flex-col p-8 rounded-xl gap-4 bg-white">
      <h1 className="font-bold text-xl">Login</h1>
      <form action="" className="flex flex-col gap-2">
        <input
          className="text-2xl border rounded-sm p-2 outline-gray-400"
          type="email"
          placeholder="email"
        />
        <input
          className="text-2xl border rounded-sm p-2 outline-gray-400"
          type="password"
          placeholder="password"
        />
        <button className="bg-blue-600 active:scale-90 rounded-sm p-2  text-white cursor-pointer">
          Login
        </button>
      </form>
      <p className="font-semibold">
        Didn't have an account?
        <span
          onClick={() => setToggle((pre) => !pre)}
          className="text-blue-700 cursor-pointer"
        >
          {""} Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
