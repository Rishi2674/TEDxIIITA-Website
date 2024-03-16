import React, { useState } from "react";
import TEDxStage from "../assets/TEDx_Stage_img.jpg";
import Navbar from "./Navbar";
import register_x_logo from "../assets/register_x_logo.png";
import register_bg from "../assets/register_bg.png";

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
    <div className="flex justify-center items-center h-screen bg-slate-900 w-full">
      <img src={register_bg} className='h-screen w-full absolute'/>
      <div className="md:w-1/2 justify-center flex">
        <img
          className="object-cover h-2/3 w-2/3 opacity-95"
          src={register_x_logo}
          alt="Big Image"
        />
      </div>
      

      {/* Sign In Form on the right */}
      <div className="md:w-1/2 justify-center items-center flex-col">
        <h1 className="text-3xl font-bold mb-8 text-white justify-center flex">Sign In</h1>
        <form className="space-y-4 flex flex-col justify-center items-center gap-2">
          <div className="w-3/4">
            <label htmlFor="email" className="block text-white opacity-90 text-lg dark:text-white pb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              // placeholder="Enter your email"
              className="w-full justify-center shadow-sm bg-inherit text-white border-b-2"
            />
          </div>
          <div className="w-3/4">
            <label htmlFor="password" className="block text-white opacity-90 text-lg dark:text-white pb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"  
              // placeholder="Enter your password"
              className="w-full border-gray-300 shadow-sm bg-inherit text-white border-b-2" 
            />
          </div>
          <button
            type="submit"
            className="w-1/3 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
