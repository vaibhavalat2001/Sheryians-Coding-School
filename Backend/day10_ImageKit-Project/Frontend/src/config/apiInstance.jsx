import axios from "axios"

export const apiInstance = async () => {
    return axios.create("http://localhost:3000/image")
}