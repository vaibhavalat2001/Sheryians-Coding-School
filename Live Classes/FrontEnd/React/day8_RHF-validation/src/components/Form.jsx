import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({ users, setUsers, setToggle, update, setUpdate }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: update.name,
      email: update.email,
      mobile: update.mobile,
      pass: update.pass,
      img: update.img,
    },
  });

  let formSubmit = (data) => {
    if (update.email === data.email) {
      setUsers((pre) =>
        pre.map((user, ind) => (user.email === update.email ? data : user)),
      );
      setUpdate([]);
    } else {
      setUsers((pre) => [...pre, data])
    }
    setToggle((pre) => !pre);
    reset();
  };

  return (
    <div className="text-white flex flex-col gap-3 items-center">
      <h1 className="text-3xl font-bold">Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-100 max-sm:w-[90vw] border-2 border-gray-400 bg-black p-4 rounded gap-2 flex flex-col"
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
          className="outline-none border border-gray-400 p-2 rounded text-xl"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          className="outline-none border border-gray-400 p-2 rounded text-xl"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}

        <input
          {...register("mobile", {
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "minimum 10 digits required",
            },
            maxLength: {
              value: 10,
              message: "maximum 10 digits required",
            },
          })}
          className="outline-none border border-gray-400 p-2 rounded text-xl"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-400">{errors.mobile.message}</p>
        )}

        <input
          {...register("pass", {
            // required: "Password required",
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be at least 8 characters long",
            },
          })}
          type="text"
          className="outline-none border border-gray-400 text-xl  rounded p-2"
          placeholder="Password (optional)"
        />
        {errors.pass && <p className="text-red-400">{errors.pass.message}</p>}

        <input
          {...register("img", {
            required: "Image is required",
          })}
          className="outline-none border border-gray-400 p-2 rounded text-xl"
          type="url"
          placeholder="Image"
        />
        {errors.img && <p className="text-red-400">{errors.img.message}</p>}

        <button className="bg-blue-600 p-2 rounded-xl">Add User</button>
      </form>
    </div>
  );
};

export default Form;
