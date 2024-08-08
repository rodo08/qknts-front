import { createContext, useContext } from "react";
import { useState } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/task";

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within an TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await getTasksRequest();
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const createTask = async (task) => {
    const response = await createTaskRequest(task);
    console.log(response);
  };

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      if (response.status === 204) {
        setTasks(tasks.filter((task) => task._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, createTask, getTasks, deleteTask, getTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
