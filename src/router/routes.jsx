import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TaskPage from "../pages/TaskPage";
import ProfilePage from "../pages/ProfilePage";
import TaskFormPage from "../pages/TaskFormPage";
import App from "../App";
import TaskLayout from "../layouts/TaskLayout";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/",
    element: <TaskLayout />,
    onError: () => <h1>Error</h1>,
    children: [
      { path: "/tasks", element: <TaskPage /> },
      { path: "/add-task", element: <TaskFormPage /> },
      { path: "/tasks/:id", element: <TaskFormPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
