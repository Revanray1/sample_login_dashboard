import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('abc@gmail.com');
  const [password, setPassword] = useState('123456');
  const { login } = useAuth();
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation (expand as needed)
    if (email && password) {
      // Simulate an API call, here we just create a fake token
      const fakeToken = 'dummyAuthToken';
      login(fakeToken);
      navigate('/dashboard'); // Use navigate() for programmatic navigation
    } else {
      alert('Please enter email and password');
    }
  };

  return (<>
      <div className="h-[100vh] items-center flex justify-center px-5  lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                LOGIN
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to Log-In
              </p>
            </div>
            <div className="w-full flex-1 mt-6">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                />
                <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                 onClick={(e)=>{handleLogin(e)}}>
                  <span className="ml-3">LOG IN</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don't have an account?{" "}
                  <a href="">
                    <span className="text-blue-900 font-semibold">Sign up</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  </>)
};

export default LoginPage;
