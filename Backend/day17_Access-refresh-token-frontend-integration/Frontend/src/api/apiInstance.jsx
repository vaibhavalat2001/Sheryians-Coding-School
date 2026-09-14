import axios from "axios";
import { useContext } from "react";
import { userStore } from "../context/userContext";

export const useApi = () => {
  const { accessToken, setAccessToken } = useContext(userStore);

  const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
  });

  api.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return console.log("api request error:", error.message);
    },
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 404) {
        const res = await api.post("/auth/refresh");
        setAccessToken(res.data.token.accessToken);
        error.config.headers.Authorization = `Bearer ${res.data.token.accessToken}`;
        return axios(error.config);
      }
      return Promise.reject(error);
    },
  );

  return api;
};
