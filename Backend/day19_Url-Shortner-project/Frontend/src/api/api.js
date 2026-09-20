import axios from "axios";

const useApi = () => {
  const api = axios.create({
    // baseURL: "https://urlshort-backend.vercel.app/api",
    baseURL: "http://localhost:5173/api",
    withCredentials: true,
  });

  return api;
};

export default useApi;
