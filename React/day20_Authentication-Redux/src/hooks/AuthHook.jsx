import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const loginForm = (data) => {
    const user = registeredUser.find((val) => {
      console.log(data);
      return data.email === val.email && data.password === val.password;
    });

    if (!user) {
      toast.error("Invalid user");
      reset();
      return;
    }

    dispatch(addUser(user));
    navigate("/main");
    toast.success(`${user.name.split(" ")[0]} you loggdin`, {
      closeOnClick: true,
    });

    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  const registerForm = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    localStorage.setItem("registeredUser", JSON.stringify(arr));
    navigate("/");
    toast.success(`${data.name.split(" ")[0]} you registered`);
  };

  return {
    register,
    handleSubmit,
    errors,
    navigate,
    loginForm,
    registerForm,
    showPassword,
    setShowPassword,
  };
};
