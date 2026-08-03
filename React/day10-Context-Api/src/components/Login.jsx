import React, { useContext } from "react";
import { MyProduct } from "../context/MyProduct";
import { useForm } from "react-hook-form";

const Login = () => {
  const { setPage } = useContext(MyProduct);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (form) => {
  };

  return (
    <div className=" h-[70vh] flex justify-center gap-5 items-center flex-col">
      <h1 className="text-2xl font-bold">Login Form</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-5 sm:w-120 max-sm:w-[85vw] border-2 border-zinc-300 p-10 rounded-2xl"
        action=""
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          className="outline-none border border-zinc-300 rounded p-2 text-lg"
          type="email"
          placeholder="email"
        />
        {errors.email && <p className="-mt-5">{errors.email.message}</p>}
        <input
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be at least 8 characters long",
            },
          })}
          className="outline-none border border-zinc-300 rounded p-2 text-lg"
          type="password"
          placeholder="password"
        />
        {errors.password && <p className="-mt-5 leading-4">{errors.password.message}</p>}
        <button className="bg-blue-500 rounded py-2">LOGIN</button>
        <p className="text-center">
          Dont' have an account
          <span
            onClick={() => setPage("registerPage")}
            className="text-green-400 active:scale-90 font-bold"
          >
            {" "}
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
