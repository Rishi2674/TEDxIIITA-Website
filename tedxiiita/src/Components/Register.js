import React, { useState } from 'react';
import TEDxStage from '../assets/TEDx_Stage_img.jpg';


const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ name: '', email: '', studentId: '' });
  };


return (
    

    <div className="bg-black min-h-screen flex items-center justify-center flex-col pb-32">
        <div className='uppercase text-white pt-20 pb-5 underline decoration-red-600 text-6xl font-bold'>
            Register
        </div>
        <div className='uppercase text-white pt-8 pb-20 text-3xl font-semibold'>
            12th April, 2024 @ IIITA Auditorium
        </div>
        
        <img src={TEDxStage} alt="register" className = "pt-7 pb-32 w-full px- 5 bg-fixed"/>

        <div className='uppercase text-white pt-8 pb-20 text-xl font-semibold'>
            Please fill out your info below to register for the TEDxIIITA event on April 12, 2024 -
        </div>

        <div className='p-4 w-1/3'>
        
        <form  className='flex flex-col gap-4'>

            <input placeholder='Name'
             className='border p-5 bg-inherit rounded-lg' id='name' 
            />
            <input type='email' placeholder='Email'
             className='border p-5 bg-inherit rounded-lg' id='email' 
            />
            <input type='password' placeholder='Password' 
            className='border p-5 bg-inherit rounded-lg' id='password' 
            />

            <button  className='bg-red-700 text-xl text-white p-4 max-w-full font-semibold rounded-md uppercase hover:opacity-95 disabled:opacity-70'>
              REGISTER
            </button>

        </form>
    
      </div>
    </div>
  );
};

export default Register;
