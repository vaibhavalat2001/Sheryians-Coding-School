import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { addUser } from "../state/authSlice";
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const loginForm = async (data) => {
    try {
      dispatch(loginUserAction(data));
    } catch (error) {
      console.log("login error: ", error);
    }
  };

  const registerForm = (data) => {
    console.log(data);
  };

  return {
    handleSubmit,
    errors,
    navigate,
    register,
    registerForm,
    loginForm,
    showPassword,
    setShowPassword,
  };
};
