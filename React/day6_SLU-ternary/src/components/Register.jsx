import React, { useState } from "react";

const Register = ({setToggle, setUsers}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    pass: "",
    img: ""
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((pre) => [...pre, formData]);
    setFormData({ name: "", email: "", pass: "", img: "" });
  };

  return (
    <div className="w-100 flex flex-col p-8 rounded-xl gap-4 bg-white">
      <h1 className="font-bold text-xl">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          // required
          value={formData.name}
          onChange={handleChange}
          name="name"
          className="text-2xl border rounded-sm p-2 outline-gray-400"
          type="text"
          placeholder="name"
        />
        <input
          // required
          value={formData.email}
          onChange={handleChange}
          name="email"
          className="text-2xl border rounded-sm p-2 outline-gray-400"
          type="email"
          placeholder="email"
        />
        <input
          // required
          value={formData.pass}
          onChange={handleChange}
          name="pass"
          className="text-2xl border rounded-sm p-2 outline-gray-400"
          type="password"
          placeholder="password"
        />
        <input
          // required
          value={formData.img}
          onChange={handleChange}
          name="img"
          className="text-2xl border rounded-sm p-2 outline-gray-400"
          type="url"
          placeholder="image url"
        />
        <button className="bg-blue-600 active:scale-90 rounded-sm p-2  text-white cursor-pointer">
          Register
        </button>
      </form>
      <p className="font-semibold">
        I have an account?
        <span
          onClick={() => setToggle((pre) => !pre)}
          className="text-blue-700 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
