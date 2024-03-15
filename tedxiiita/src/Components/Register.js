import React, { useState } from "react";
import TEDxStage from "../assets/TEDx_Stage_img.jpg";
import Navbar from "./Navbar";
import register_x_logo from "../assets/register_x_logo.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ name: "", email: "", studentId: "" });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url('../assets/register_bg.png')]">
      {/* <img src={register_x_logo} className='h-80'/> */}
      <div className="hidden md:block md:w-1/2">
        <img
          className="object-cover h-2/3 w-2/3 pl-32"
          src={register_x_logo}
          alt="Big Image"
        />
      </div>
      

      {/* Sign In Form on the right */}
      <div className="md:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Sign In</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
