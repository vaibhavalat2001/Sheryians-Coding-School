import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });

  return api;
};

export default useApi;
