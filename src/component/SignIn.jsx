import React, { useState } from "react";
import { logo } from "../assets";
import { CiGlobe } from "react-icons/ci";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Email:", email);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Logo positioned in the top left corner of the viewport */}
      <div className="absolute top-0 left-0 p-5">
        <img src={logo} alt="Logo" className="w-32 h-auto" />
      </div>
      <div className="absolute top-0 right-0 p-5 flex items-center space-x-2">
        <CiGlobe size={30} /> en-US
      </div>
      {/* Centered sign-in form */}
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-sm mx-auto p-6 space-y-6">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">Sign In</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-xs text-gray-500">
              <span className="mr-1">ⓘ</span>
              Email
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
            >
              Next
            </button>
          </form>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-gray-700 underline">
              Trouble Signing In?
            </a>
          </div>

          <div className="text-center text-sm text-gray-500 mt-4">Or</div>

          <button
            type="button"
            className="w-full bg-gray-100 hover:bg-gray-200 text-black border border-gray-300 rounded-md py-2 px-4 mt-4"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
