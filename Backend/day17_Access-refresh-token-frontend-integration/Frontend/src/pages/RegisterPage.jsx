import React, { useContext, useState } from "react";
import { useApi } from "../api/apiInstance";
import { userStore } from "../context/userContext";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const { setAccessToken, accessToken, setUser, user } = useContext(userStore);
  const api = useApi();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("/auth/register", formData);
    setAccessToken(res.data.token.accessToken);
    setUser(res.data.data.user);

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    navigate("/profile");
  };

  return (
    <div className="h-[80vh] flex flex-col gap-6 justify-center items-center">
      <h1 className="font-bold">Register form</h1>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-center items-center gap-3"
      >
        <input
          onChange={inputChange}
          name="name"
          value={formData.name}
          className="border border-zinc-500 rounded-lg px-4 py-1 text-lg outline-none"
          type="text"
          placeholder="name"
        />
        <input
          onChange={inputChange}
          name="email"
          value={formData.email}
          className="border border-zinc-500 rounded-lg px-4 py-1 text-lg outline-none"
          type="email"
          placeholder="email"
        />
        <input
          onChange={inputChange}
          name="password"
          value={formData.password}
          className="border border-zinc-500 rounded-lg px-4 py-1 text-lg outline-none"
          type="password"
          placeholder="password"
        />
        <button className="bg-blue-500 px-8 py-2 rounded-lg">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
