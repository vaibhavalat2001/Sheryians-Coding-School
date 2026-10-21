import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://10imagekit-project.vercel.app/image",
  withCredentials: true,
});
