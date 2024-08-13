import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SignUp } from './Signup';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const apiUrl = import.meta.env.VITE_API_URL; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${apiUrl}`, formData) 
      .then(res => {
        console.log('Login successful', res.data);
      })
      .catch(error => {
        console.error('Error during login', error);
      });
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-600'>
      <section className='bg-slate-800 border border-slate-600 rounded-md shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-8'>
        <h1 className='text-4xl font-bold text-center text-white mb-6'>Login</h1>
        <form onSubmit={handleSubmit} className=''>
          <div className='relative mb-6'>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer'
              placeholder=' '
            />
            <label htmlFor="username" className='absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-white peer-focus:scale-75 peer-focus:-translate-y-6'>
              Username or email
            </label>
          </div>
          <div className='relative mb-6'>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer'
              placeholder=' '
            />
            <label htmlFor="password" className='absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-white peer-focus:scale-75 peer-focus:-translate-y-6'>
              Password
            </label>
          </div>
        <Link to="/Home">  <button type='submit' className='w-full text-[18px] text-white rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300'>
            Login
          </button></Link>
        </form>
        <div className='mt-4 flex justify-center items-center gap-3'>        
        <p className='text-white'>Didn't hava a account?</p>
        <Link to="/SignUp" ><p className='text-blue-400'>Signup</p></Link>
        </div>

      </section>
    </div>
  );
}

export default Login;