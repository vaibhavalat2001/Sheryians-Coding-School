import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee } from "../state/authAction";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const loginSubmit = (data) => {
    dispatch(loginEmployee(data));
    
  };

  const registerSubmit = (data) => {
    console.log(data);
  };

  const getPasswordStrength = () => {
    if (!password) return 0;

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  return {
    showPassword,
    setShowPassword,
    navigate,
    getPasswordStrength,
    password,
    setPassword,
    loginSubmit, registerSubmit, 
    register, handleSubmit, errors
  };
};
