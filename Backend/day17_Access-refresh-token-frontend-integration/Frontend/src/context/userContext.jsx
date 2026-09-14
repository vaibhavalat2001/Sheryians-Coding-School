import { createContext, useState } from "react";

export const userStore = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const value = {
    user,
    setUser,
    accessToken,
    setAccessToken,
  };
  return <userStore.Provider value={value}>{children}</userStore.Provider>;
};
