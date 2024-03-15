import React from 'react'
import { useEffect } from 'react';
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa";
import Maps from './Maps';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
        <div id = 'contact' className='bg-black z-0 '>
             
            <div className='font-poppins'>
            {/* <div className="flex justify-center z-10">
      <div className="flex-col items-center justify-center">
        <div className="w-1/4 h-full blur-md  fixed rounded-full   -inset-0.5 bg-gradient-to-r from-[#AB2100] to-transparent"></div>
        </div>

                </div> */}
                <div  className='z-20'>
                <h1 data-aos ="fade-up" data-aos-duration='1500' className='text-4xl font-semibold text-center pt-9 opacity-85 text-white'>
                    CONTACT
                </h1>

                {/* <hr className='' width={20}></hr> */}
                <hr data-aos ="fade-up" data-aos-duration='1500' className='w-80 h-[6px] mx-auto  rounded md:my-9 bg-red-600'></hr>

                <h1 data-aos ="fade-up" data-aos-duration='1500' className='text-3xl text-center opacity-85 pb-20 text-red-600 font-semibold'>
                    Team TEDxIIITA
                </h1>

                <h2  data-aos ="fade-up" data-aos-duration='1500' className='text-center text-lg opacity-90 text-gray-300'>
                    Find us at Student Activity Centre, IIIT Allahabad,
                </h2>
                <h2  data-aos ="fade-up" data-aos-duration='1500' className='text-center text-lg opacity-90 text-gray-300'>
                    Allahabad.
                </h2>
                <h2 data-aos ="fade-up" data-aos-duration='1500' className='text-center text-lg opacity-90 text-gray-300 pb-24 pt-3'>
                    Email: tedxiiita@gmail.com
                </h2>

            </div>
            <div className='font-poppins '>
                
                <h1 data-aos ="fade-up" data-aos-duration='1500' className='text-4xl font-semibold text-center pt-9 opacity-85 text-white'> FOLLOW US</h1>
                <hr data-aos ="fade-up" data-aos-duration='1500' className='w-80 h-[6px] mx-auto  rounded md:my-9 bg-red-600'></hr>
                <div className='flex items-center justify-center gap-28 p-16'>
                    <div>
                        <button data-aos ="zoom-in" data-aos-duration='750' className='rounded-full border-2 border-gray-200 hover:scale-110 duration-300'>
                        <a href="mailto:tedxiiita@gmail.com">
                            <div className='text-white text-6xl p-5'>
                            <CiMail/>
                            </div>
                            </a>
                            
                        </button>
                    </div>
                    <div>
                        <button data-aos ="zoom-in" data-aos-duration='750' className='rounded-full border-2 border-gray-200 hover:scale-110 duration-300'>
                        <a href="https://www.instagram.com/tedxiiita/" target="_blank">
                            <div className='text-white text-6xl p-5 '>
                            <FaInstagram/>
                            </div>
                        </a>
                            
                        </button>
                    </div>
                    <div>
                        <button data-aos ="zoom-in" data-aos-duration='750' className='rounded-full border-2 border-gray-200 hover:scale-110 duration-300'>
                        <a href="https://www.facebook.com/tedxiiita/" target="_blank">
                            <div className='text-white text-5xl p-6'>
                            <FaFacebookF/>
                            </div>
                            </a>
                            
                        </button>
                    </div>
                    <div>
                        <button data-aos ="zoom-in" data-aos-duration='750' className='rounded-full border-2 border-gray-200 hover:scale-110 duration-300'>
                        <a href="https://www.flickr.com/photos/ams_iiita/albums/72157706287414711" target="_blank">
                            <div className='text-white text-5xl p-7'>
                            <FaFlickr/>
                            </div>
                            </a>
                            
                        </button>
                    </div>

                    

                </div>

            </div>
            <div className=' flex items-center '>
                <div data-aos ="fade-up" data-aos-duration='1500' className='w-1/2 px-6 ml-12 border-r-[3px] border-r-white '>
                    <Maps/>
                </div>
                <div data-aos ="fade-up" data-aos-duration='1500' className='text-white font-poppins w-[40%] ml-5 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda non dolorem repellendus eveniet maxime tempore aliquam quam. Amet nihil adipisci magnam quibusdam.
                </div>

                        
            </div>
            </div>
            
            </div>
        )
    }