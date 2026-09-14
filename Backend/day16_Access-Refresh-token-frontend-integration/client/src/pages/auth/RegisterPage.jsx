import React, { useContext, useState } from "react";
import useApi from "../../config/api";
import { userStore } from "../../context/registerContext";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();
  const api = useApi();
  const { setAccessToken, setUser } = useContext(userStore);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (data) => {
    const target = data.target;
    setFormData({ ...formData, [target.name]: target.value });
  };
  const onSubmit = async (data) => {
    data.preventDefault();

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
      console.log("error:", error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center">
      <form
        onSubmit={onSubmit}
        className="gap-2 flex flex-col justify-center text-lg items-center"
      >
        <h1 className="mb-4">Registration Form</h1>
        <input
          onChange={onChange}
          value={formData.name}
          name="name"
          className="pl-3 border border-zinc-500 outline-none rounded-lg "
          type="text"
          placeholder="name"
        />
        <input
          onChange={onChange}
          value={formData.email}
          name="email"
          className="pl-3 border border-zinc-500 outline-none rounded-lg "
          type="email"
          placeholder="email"
        />
        <input
          onChange={onChange}
          value={formData.password}
          name="password"
          className="pl-3 border border-zinc-500 outline-none rounded-lg "
          type="password"
          placeholder="password"
        />
        <button
          className="bg-blue-500 active:scale-90 rounded-lg px-8  py-1 mt-4"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
