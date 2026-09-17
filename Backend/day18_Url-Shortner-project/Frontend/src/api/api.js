import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
  });

  return api;
};

export default useApi;
