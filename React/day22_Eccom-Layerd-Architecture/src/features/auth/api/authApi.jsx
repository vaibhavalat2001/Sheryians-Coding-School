import { api } from "../../../config/api";

export const loginUserApi = async (credential) => {
  try {
    let res = await api.post("/auth/login", credential);
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (error) {
    console.log("Api errors", error);
  }
};

export const hydrateUser = async() => {
  const token = localStorage.getItem("accessToken");
  try {
    let res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
      },
    });
    return res.data;
  } catch (error) {
    console.log("responce hydrate error: ", error);
  }
};
