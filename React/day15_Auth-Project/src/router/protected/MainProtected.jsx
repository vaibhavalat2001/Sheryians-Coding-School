
import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { Auth } from "../../context/AuthContext";

const MainProtected = () => {
  const { loggedInUser } = useContext(Auth)
  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default MainProtected;
