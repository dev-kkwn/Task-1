import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${apiUrl}/login`, formData)
      .then((res) => {
        console.log("Login successful", res.data);
        if (res.status === 200) {
          navigate("/Home");
          toast.success("success");
        }
      })
      .catch((error) => {
        console.error("Error during login", error);
        toast.error("invalid")
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-600">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <section className="bg-slate-800 border border-slate-600 rounded-md shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="">
          <div className="relative mb-6">
            <input
              required
              type="text"
              name="userName"
              id="username"
              value={formData.userName}
              onChange={handleChange}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-white peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username or email
            </label>
          </div>
          <div className="relative mb-6">
            <input
              required
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-white peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>{" "}
          <button
            type="submit"
            className="w-full text-[18px] text-white rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex justify-center items-center gap-3">
          <p className="text-white">Didn't have a account?</p>
          <Link to="/SignUp">
            <p className="text-blue-400">Signup</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Login;
