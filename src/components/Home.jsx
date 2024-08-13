import React from 'react';
import a from '../assets/a.jpeg';
import b from '../assets/b.jpeg';
import c from '../assets/c.jpeg';
import e from '../assets/e.jpeg';

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
      text: 'This service has transformed our business!',
      author: 'IT',
    },
    {
      logo: b,
      text: 'Exceptional quality and customer service.',
      author: 'HR',
    },
    {
      logo: c,
      text: 'Highly recommended for anyone looking to improve their workflow.',
      author: 'AI',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
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
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <img src={e} alt="Logo" className="h-8" />
          <ul className="flex space-x-4 ml-auto mr-auto">
            <li className="text-white hover:text-gray-300 transition duration-300">HOME</li>
            <li className="text-white hover:text-gray-300 transition duration-300">ABOUT</li>
            <li className="text-white hover:text-gray-300 transition duration-300">SERVICES</li>
            <li className="text-white hover:text-gray-300 transition duration-300">CONTACT</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
            LOGIN
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our Website</h1>
          <p className="text-lg mb-10 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ante
            sed massa tincidunt, et vehicula ligula commodo.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

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