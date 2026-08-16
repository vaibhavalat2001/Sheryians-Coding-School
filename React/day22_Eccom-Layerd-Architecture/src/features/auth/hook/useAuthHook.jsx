import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
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

  const loginForm = async (data) => {
    try {
      const responce = await loginUserApi(data);
      dispatch(addUser(responce));
      toast.success(`${responce.firstName} you logged`, {closeOnClick: true});
    } catch (error) {
      console.log("login error", error);
    }
  };

  const registerForm = (data) => {
    console.log("register", data);
  };

  return {
    navigate,
    handleSubmit,
    register,
    errors,
    loginForm,
    registerForm,
  };
};
