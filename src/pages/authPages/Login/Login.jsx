import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import loginIllustration from "../../../assets/authImage.png";
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, googleLogin } = useAuth();
    const navigate = useNavigate();



  const onSubmit = (data) => {
    // console.log("Login Data:", data);
    login(data.email, data.password)
      .then(() => {
        toast.success("Logged in successfully!");
                navigate("/"); // redirect user to /home

      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
  googleLogin()
    .then((result) => {
      const loggedUser = result.user;
      toast.success("Google Login Success:", loggedUser);
              navigate("/"); // redirect user to /home

      // ✅ redirect or toast
    })
    .catch((error) => {
      toast.error("Google Login Error:", error);
      // ❌ show error toast or alert
    });
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src={logo} alt="Profast Logo" className="w-6 h-6" />
            <span className="text-xl font-bold text-gray-800">Profast</span>
          </Link>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
            Welcome Back
          </h2>
          <p className="text-gray-600 mb-6 text-sm">Login with Profast</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                placeholder="example@email.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-400 text-gray-900"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                placeholder="********"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 placeholder-gray-400 text-gray-900"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right text-sm">
              <a href="#" className="text-gray-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-500 text-white font-semibold py-2.5 rounded-lg transition shadow-md"
            >
              Login
            </button>
          </form>

          {/* Register link */}
          <p className="text-center text-sm mt-6 text-gray-600">
            Don’t have any account?{" "}
            <Link
              to="/register"
              className="text-lime-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-400">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-lg transition">
            <FcGoogle className="text-xl" />
            Login with Google
          </button>
        </div>

        {/* Right: Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-[#f9fdf4]">
          <img
            src={loginIllustration}
            alt="Delivery Illustration"
            className="w-4/5 max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
