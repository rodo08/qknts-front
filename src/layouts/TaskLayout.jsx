import { Outlet } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import { TaskProvider } from "../context/TaskContext";
import ProtectedRoutes from "../ProtectedRoutes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TaskLayout = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto p-2">
          <TaskProvider>
            <ProtectedRoutes>
              <Outlet />
            </ProtectedRoutes>
          </TaskProvider>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default TaskLayout;
