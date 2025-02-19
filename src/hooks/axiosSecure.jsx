import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

console.log(import.meta.env.VITE_BASE_URL)