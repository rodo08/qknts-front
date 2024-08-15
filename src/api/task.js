import axiosInstance from "./axiosInstance.js";

export const getTasksRequest = () => axiosInstance.get("/tasks");
export const getTaskRequest = (id) => axiosInstance.get(`/tasks/${id}`);
export const createTaskRequest = (task) => axiosInstance.post("/tasks", task);
export const updateTaskRequest = (id, task) =>
  axiosInstance.put(`/tasks/${id}`, task);
export const deleteTaskRequest = (id) => axiosInstance.delete(`/tasks/${id}`);
