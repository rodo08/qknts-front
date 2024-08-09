import { createContext, useState, useContext, useEffect } from "react";
import {
  registering,
  loggingIn,
  logout as logoutFunc,
  checkLogin,
} from "./utils.js";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLogin(setUser, setIsAuthenticated, setLoading);
  }, []);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        registering: (user) =>
          registering(user, setUser, setIsAuthenticated, setErrors),
        loggingIn: (user) =>
          loggingIn(user, setUser, setIsAuthenticated, setErrors),
        logout: () => logoutFunc(setUser, setIsAuthenticated),
        loading,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
