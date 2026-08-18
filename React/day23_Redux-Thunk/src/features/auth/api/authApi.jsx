// import { api } from "../../../config/api";

// export const loginUserApi = async (credentials) => {
//   try {
//     let res = await api.post("/auth/login", credentials);
//     localStorage.setItem("accessToken", res.data.accessToken);
//     console.log(res.data)
//     return res.data;
//   } catch (error) {
//     console.log("Post api error: ", error);
//   }
// };


// export const hydrate = async () => {
//     const token = localStorage.getItem("accessToken");
//     try {
//         let res = await api.get("/auth/me", {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         return res.data
//     } catch (error) {
//         console.log("Hydrate api error: ", error)
//     }
// }
