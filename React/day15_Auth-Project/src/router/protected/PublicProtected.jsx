import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { Auth } from "../../context/AuthContext";

const PublicProtected = () => {
  const { loggedInUser } = useContext(Auth)
  if (loggedInUser) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default PublicProtected;
