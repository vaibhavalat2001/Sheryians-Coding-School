import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response

  },
  (error) => {
    console.log("Api Errors: ", error);
  },
);


// axiosInstance.interceptors.request.use(
//     () => {},
//     () => {}
// )
