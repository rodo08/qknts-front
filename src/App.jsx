import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskPage from "./pages/TaskPage";
// import TaskFormPage from "./pages/TaskFormPage";
// import ProfilePage from "./pages/ProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";
import TaskFormPage from "./pages/TaskFormPage";
import { TaskProvider } from "./context/TaskContext";

// import LoginPage from "./pages/LoginPage";
// import TaskPage from "./pages/TaskPage";
// import TaskFormPage from "./pages/TaskFormPage";
// import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/tasks" element={<TaskPage />} />
//         <Route path="/add-task" element={<TaskFormPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// // return (
// //   <AuthProvider>
// //     <div className="flex flex-col min-h-screen">
// //       <Navbar />
// //       <main className="flex-1 container mx-auto p-2">
// //         <Outlet />
// //       </main>
// //       <Footer />
// //     </div>
// //   </AuthProvider>
// // );

// export default App;
const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10 ">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                {/*              
            <Route path="/profile" element={<ProfilePage />} /> */}
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
