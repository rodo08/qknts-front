import axios from "./axiosInstance.js";

//const API = import.meta.env.VITE_BACKEND_LOCAL;
const API = import.meta.env.VITE_BACKEND_URL;

export const registerRequest = (user) => axios.post(`${API}/register`, user);

export const loginRequest = (user) => axios.post(`${API}/login`, user);

export const verifyTokenRequest = () => axios.get("/verify");
