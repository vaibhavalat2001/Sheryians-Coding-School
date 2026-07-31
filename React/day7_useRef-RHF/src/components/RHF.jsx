import React from "react";
import { useForm } from "react-hook-form";

const RHF = ({ setUser }) => {
  console.log("RHF rendering");
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (e) => {
    setUser(() => ({...e}));
    // console.log(e);
    // reset();
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(formSubmit)}
        action=""
        className="w-100 rounded p-6 flex flex-col gap-6 bg-white text-black"
      >
        <input
          {...register("proName")}
          className="py-1 text-2xl px-2 border-2 border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
          {...register("price")}
          className="py-1 text-2xl px-2 border-2 border-gray-400 rounded"
          type="number"
          placeholder="Price"
        />
        <input
          {...register("cat")}
          className="py-1 text-2xl px-2 border-2 border-gray-400 rounded"
          type="text"
          placeholder="category"
        />
        <input
          {...register("img")}
          className="py-1 text-2xl px-2 border-2 border-gray-400 rounded"
          type="text"
          placeholder="image"
        />
        <button className="text-2xl bg-blue-600 rounded text-white">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default RHF;
