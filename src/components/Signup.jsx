import React, { useState } from "react";
import { Link } from "react-router-dom";
export function SignUp() {
  const [RegisterData, SetRegisterData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const url = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    SetRegisterData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${url}`, RegisterData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error Registering"));
  };
  return (
    <>
      <section>
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-600">
          <section className="bg-slate-800 border border-slate-600 rounded-md shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-8">
            <h1 className="text-4xl font-bold text-center text-white mb-6">
              Register
            </h1>
            <form onSubmit={handleSubmit} className="">
              <div className="relative mb-6">
                <input
                  type="text"
                  name="userName"
                  id="username"
                  value={RegisterData.userName}
                  onChange={handleChange}
                  required
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={RegisterData.email}
                  onChange={handleChange}
                  required
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email:
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={RegisterData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={RegisterData.password}
                  onChange={handleChange}
                  required
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <Link to="/">
                {" "}
                <button
                  type="submit"
                  className="w-full text-[18px] text-white rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300"
                >
                  Register
                </button>
              </Link>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
