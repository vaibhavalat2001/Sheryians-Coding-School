import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "https://shortnerurl-frontend.vercel.app/api",
    withCredentials: true,
  });

  return api;
};

export default useApi;
