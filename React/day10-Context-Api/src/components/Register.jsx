import React, { useContext } from "react";
import { MyProduct } from "../context/MyProduct";
import { useForm } from "react-hook-form";

const Register = () => {
  const { setPage } = useContext(MyProduct);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = () => {};

  return (
    <div className="h-[75vh] flex justify-center gap-5 items-center flex-col">
      <h1 className="text-2xl font-bold">Register Form</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-5 sm:w-120 max-sm:w-[85vw] border-2 border-zinc-300 p-10 rounded-2xl"
        action=""
      >
        <input
          {...register("name", {
            required: "Name is required",
             pattern: {
              value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
              message: "Only letters and single spaces are allowed",
            },
          })}
          className="outline-none border border-zinc-300 rounded p-2 text-lg"
          type="text"
          placeholder="name"
        />
        {errors.name && <p className="-mt-5">{errors.name.message}</p>}
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
        {errors.password && <p className="-mt-5">{errors.password.message}</p>}
        <button className="bg-blue-500 rounded py-2">REGISTER</button>
        <p className="text-center">
          Dont' have an account
          <span
            onClick={() => setPage("loginPage")}
            className="text-green-400 active:scale-90 font-bold"
          >
            {" "}
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
