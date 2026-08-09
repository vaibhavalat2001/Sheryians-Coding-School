import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

export const authHook = () => {
  const navigate = useNavigate();
  const { registeredUser, loggedInUser, setLoggedInUser, setRegisteredUser } =
    useContext(Auth);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const loginFormSubmit = (data) => {
    const user = registeredUser.find((val) => {
      return (
        val.email === data.email.trim() && val.password === data.password.trim()
      );
    });

    if (!user) {
      toast.error("Invalid crediatial");
      reset();
      return;
    }

    navigate("/main");
    toast.success(`${user.name.split(" ")[0]} you loggedin`, {
      closeOnClick: "true",
    });
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    reset();
  };

  const registerFormSubmit = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    setLoggedInUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    navigate("/main");
    reset();
  };

  return { loginFormSubmit, handleSubmit, reset, register, errors, navigate, registerFormSubmit };
};
