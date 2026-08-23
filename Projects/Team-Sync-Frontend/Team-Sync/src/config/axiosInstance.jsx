const { default: axios } = require("axios");

export const axiosInstance = axios.create({
    baseURL: "api.team-sync.space/api",
    withCredentials: true
})