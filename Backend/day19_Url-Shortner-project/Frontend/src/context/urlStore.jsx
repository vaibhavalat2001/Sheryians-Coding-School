import { createContext, useState } from "react";

export const urlsStore = createContext();

export const ContextProvider = ({ children }) => {
  const [urls, setUrls] = useState([]);
  const [urlResult, setUrlResult] = useState();

  const val = {
    urls,
    setUrls,
    urlResult,
    setUrlResult,
  };

  return <urlsStore.Provider value={val}>{children}</urlsStore.Provider>;
};
