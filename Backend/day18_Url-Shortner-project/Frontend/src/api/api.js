import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "https://urlshort-backend.vercel.app/api",
    withCredentials: true,
  });

  return api;
};

export default useApi;
