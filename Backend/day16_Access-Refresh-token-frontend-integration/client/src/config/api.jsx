import axios from "axios";
import { useContext } from "react";
import { userStore } from "../context/registerContext";

export default function useApi() {
  const { accessToken, setAccessToken } = useContext(userStore);

  const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
  });

  // request interceptor
  api.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      console.log("error while sending request", error.message);
    },
  );

  // response interceptor
  api.interceptors.response.use(
    (response) => {
      return response;
    },

    async (error) => {
      if (error.response.status === 401) {
        const res = await api.post("/auth/refresh");
        setAccessToken(res.data.token.accessToken);
        error.config.headers.Authorization = `Bearer ${res.data.token.accessToken}`;
        return axios(error.config);
      }
    },
  );

  return api;
}
