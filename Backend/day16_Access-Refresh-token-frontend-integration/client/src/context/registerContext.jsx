import { createContext, useState } from "react";

export const userStore = createContext();

export const ContectProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  return (
    <userStore.Provider value={{ user, setUser, accessToken, setAccessToken }}>
      {children}
    </userStore.Provider>
  );
};
