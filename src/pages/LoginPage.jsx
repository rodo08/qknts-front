import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { LoginIllustration } from "../components/Icons";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, isAuthenticated, errors: signInErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (data) => {
    signIn(data);
  });
  return (
    // <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className="flex items-center justify-center">
      <div className=" max-w-md w-full p-10 rounded-md">
        <div className="flex justify-center pb-8">
          <LoginIllustration />
        </div>
        {signInErrors.map((error, i) => (
          <div key={i} className="bg-red-500 text-center p-2 text-white mb-2">
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.password && (
            <p className="text-red-500 text-center">Email is required</p>
          )}

          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-center">Password is required</p>
          )}
          <button
            className="bg-logo-pink-dark px-4 py-1 rounded-sm"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="pt-8">
          <p className="flex gap-x-2 justify-between">
            Don&rsquo;t have an account?{" "}
            <Link className="text-white font-bold" to="/register">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
