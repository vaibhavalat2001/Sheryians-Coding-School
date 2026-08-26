import axios from 'axios'

export const api = axios.create({
    baseURL: "https://nottivo-backend.vercel.app/notes/"
})