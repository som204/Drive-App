import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate,Link } from "react-router-dom";


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/user/register", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);
        setMessageType("success");
        setTimeout(() => navigate("/login"), 2000); 
      } else {
        const errorText = await response.json();
        setMessage(errorText.message);
        setMessageType("error"); // Error message
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("An error occurred while registering.");
      setMessageType("error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          Create Your Account
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
        >
          
          {message && (
            <div
              className={`${
                messageType === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              } p-4 rounded-lg mb-4`}
            >
              <p className="text-sm">{message}</p>
            </div>
          )}

          <div className="space-y-4">
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("email", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 10, message: "Email must be at least 10 characters" },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("username", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 5, message: "Username must be at least 5 characters" },
                })}
              />
              {errors.username && (
                <p className="mt-1 text-xs text-red-500">{errors.username.message}</p>
              )}
            </div>

            
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                {...register("password", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 8, message: "Password must be at least 8 characters" },
                })}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 text-white bg-blue-600 rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 hover:bg-blue-700"
            >
              Register
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-700">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
