import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RegisterIllustration } from "../components/Icons";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="flex items-center justify-center">
      <div className=" max-w-md p-10 rounded-md">
        <div className="flex justify-center pb-8">
          <RegisterIllustration />
        </div>
        {registerErrors.map((error, i) => (
          <div key={i} className="bg-red-500 text-center p-2 text-white mb-2">
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold">Register</h1>
        <form onSubmit={onSubmit}>
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="text"
            {...register("username", { required: true })} //le doy validaciones
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500 text-center">Username is required</p>
          )}

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
            Register
          </button>
        </form>
        <div className="pt-8">
          <p className="flex gap-x-2 justify-between">
            Already have an account?
            <Link className="text-white font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
