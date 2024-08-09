import axios from "axios";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

export const registering = async (
  user,
  setUser,
  setIsAuthenticated,
  setErrors
) => {
  try {
    const response = await registerRequest(user);
    console.log(response.data);
    setUser(response.data);
    setIsAuthenticated(true);
    setErrors([]);
  } catch (error) {
    const errorMessages = Array.isArray(error.response.data)
      ? error.response.data
      : [error.response.data.message];
    setErrors(errorMessages);
  }
};

export const loggingIn = async (
  user,
  setUser,
  setIsAuthenticated,
  setErrors
) => {
  try {
    const response = await loginRequest(user);
    console.log(response);
    setIsAuthenticated(true);
    setUser(response.data);
    setErrors([]);
  } catch (error) {
    if (Array.isArray(error.response.data)) {
      return setErrors(error.response.data);
    }
    setErrors([error.response.data.message]);
  }
};

export const logout = (setUser, setIsAuthenticated) => {
  Cookies.remove("token");
  setIsAuthenticated(false);
  setUser(null);
};

export const checkLogin = async (setUser, setIsAuthenticated, setLoading) => {
  const cookies = Cookies.get();
  if (!cookies.token) {
    setIsAuthenticated(false);
    setLoading(false);
    return;
  }

  try {
    const res = await verifyTokenRequest(cookies.token);
    console.log(res);
    if (!res.data) return setIsAuthenticated(false);
    setIsAuthenticated(true);
    setUser(res.data);
    setLoading(false);
  } catch (error) {
    setIsAuthenticated(false);
    setLoading(false);
  }
};

//task

const API_URL = "https://qknts-back.onrender.com/tasks"; // Reemplaza con tu URL de API

export const createTaskRequest = (task) => axios.post(`${API_URL}`, task);
export const getTasksRequest = () => axios.get(`${API_URL}`);
export const deleteTaskRequest = (id) => axios.delete(`${API_URL}/${id}`);
export const getTaskRequest = (id) => axios.get(`${API_URL}/${id}`);
export const updateTaskRequest = (id, task) =>
  axios.put(`${API_URL}/${id}`, task);
