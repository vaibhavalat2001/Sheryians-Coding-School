import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] =
    useState(JSON.parse(localStorage.getItem("loggedInUser"))) || null;
  const [logOut, setLogOut] = useState();

  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUser,
        setLoggedInUser,
        setLogOut
      }}
    >
      {children}
    </Auth.Provider>
  );
};
