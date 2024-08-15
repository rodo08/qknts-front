import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { AddTask, LogoQuickNotes, Logout } from "./Icons";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="container flex items-center justify-between p-4 rounded-lg">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <div>
          <LogoQuickNotes />
          <h1 className="text-white font-extrabold italic">qknts</h1>
        </div>
      </Link>

      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="justify-center">
              <p>
                Welcome, <strong> {user?.username}</strong>
              </p>
            </li>
            <li>
              <Link className=" px-4 py-1 rounded-sm" to="/add-task">
                <AddTask />
              </Link>
            </li>
            <li>
              <Link className="text-sky-500" onClick={() => logout()} to="/">
                <Logout />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                className="px-2 py-1 rounded-sm text-logo-pink font-semibold"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="px-2 py-1 rounded-sm text-logo-pink font-semibold"
                to="/register"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
