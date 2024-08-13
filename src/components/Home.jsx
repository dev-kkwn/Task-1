import React, { useState } from "react";
import a from "../assets/a.jpeg";
import b from "../assets/b.jpeg";
import c from "../assets/c.jpeg";
import e from "../assets/e.jpeg";
import axios from "axios";

// TestimonialCard Component
const TestimonialCard = ({ logo, text, author }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center">
      <img src={logo} alt={`${author} logo`} className="h-16 mb-4" />
      <p className="text-gray-700 mb-4">{text}</p>
      <p className="font-semibold text-gray-900">{author}</p>
    </div>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      logo: a,
      text: "This service has transformed our business!",
      author: "IT",
    },
    {
      logo: b,
      text: "Exceptional quality and customer service.",
      author: "HR",
    },
    {
      logo: c,
      text: "Highly recommended for anyone looking to improve their workflow.",
      author: "AI",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              logo={testimonial.logo}
              text={testimonial.text}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component that combines the Navbar and Testimonials
const App = () => {
  const [mailerData, SetMailerData] = useState({
    St_name: "",
    St_email: "",
    St_phonenumber: "",
    St_state: "",
    St_country: "",
    St_pincode: "",
  });

  const url = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    SetMailerData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mailerData);

    axios
      .post(`${url}/form`, mailerData)
      .then((res) => {
        console.log(res.data, "submitted");
      })
      .catch((err) => console.log("error posting"));
  };
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <img src={e} alt="Logo" className="h-8" />
          <ul className="flex space-x-4 ml-auto mr-auto">
            <li className="text-white hover:text-gray-300 transition duration-300">
              HOME
            </li>
            <li className="text-white hover:text-gray-300 transition duration-300">
              ABOUT
            </li>
            <li className="text-white hover:text-gray-300 transition duration-300">
              SERVICES
            </li>
            <li className="text-white hover:text-gray-300 transition duration-300">
              CONTACT
            </li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
            LOGIN
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Welcome to Our Website
          </h1>
          <p className="text-lg mb-10 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan ante sed massa tincidunt, et vehicula ligula commodo.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
      <h1 className=" text-center text-red-700 font-bold text-3xl mb-5 ">
        Enter Your Student Details
      </h1>
      <form action="">
        <div className="flex max-w-lg mx-auto flex-col gap-4">
          <div>
            <div className="mb-2">
              <label htmlFor="all" value="Enter Name" />
            </div>
            <input
              value={mailerData.St_name}
              onChange={handleChange}
              placeholder="username"
              id="all"
              type="text"
              name="St_name"
              className="w-[100%] border border-black  rounded py-2"
            />
          </div>
          <div>
            <div className="mb-2">
              <label htmlFor="base" value="Enter  Email" />
            </div>
            <input
              placeholder="Email"
              value={mailerData.St_email}
              onChange={handleChange}
              id="base"
              type="text"
              sizing=""
              name="St_email"
              className="w-[100%] border border-black rounded py-2"
            />
          </div>
          <div>
            <div className="mb-2 ">
              <label htmlFor="base" value="Enter  Phone Number " />
            </div>
            <input
              placeholder="Phone Number"
              onChange={handleChange}
              value={mailerData.St_phonenumber}
              id="base"
              type="number"
              sizing=""
              name="St_phonenumber"
              className="w-[100%] border border-black rounded py-2"
            />
          </div>
          <div>
            <div className="mb-2 ">
              <label htmlFor="base" value="Enter  State" />
            </div>
            <input
              placeholder="State"
              onChange={handleChange}
              value={mailerData.St_state}
              id="base"
              type="text"
              sizing=""
              name="St_state"
              className="w-[100%] border border-black rounded py-2"
            />
          </div>
          <div>
            <div className="mb-2 ">
              <label htmlFor="base" value="Enter  Country" />
            </div>
            <input
              placeholder="country"
              onChange={handleChange}
              value={mailerData.St_country}
              id="base"
              type="text"
              sizing=""
              name="St_country"
              className="w-[100%] border border-black rounded py-2"
            />
          </div>
          <div>
            <div className="mb-2 ">
              <label value="Enter  PinCode" />
            </div>
            <input
              placeholder="Pincode"
              onChange={handleChange}
              value={mailerData.St_pincode}
              id="large"
              type="number"
              sizing=""
              name="St_pincode"
              className="w-[100%] border border-black rounded py-2"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded transition duration-300 w-[15%] mx-auto mt-5"
          >
            Save
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
