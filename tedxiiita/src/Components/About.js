import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div >
    <div className= " bg-[url('./assets/about_bg2.png')] bg-cover font-poppins">
      <div data-aos ="fade-up" data-aos-duration='1500' className='text-white  font-bold text-6xl text-center pt-24 gap-2 '>
        About <span className='text-black'>TEDx</span>IIITA
        </div>
        <div className='flex justify-center items-center'>
        <div data-aos ="fade-up" data-aos-duration='1500' className='text-white font-bold text-2xl w-[60%] text-center my-12 p-7'>
            TEDxIIITA builds a TED like experience at Indian Institute of Information Technology, Allahabad in
					order to engage the students, leading professors and researchers, area leaders and visionaries in
					thoughtful discussions. Our goal is to bring together bright minds to give talks that are idea
					focused, and on a wide range of subjects, to foster learning, inspiration and wonder, and provoke
					conversations that matter.</div>
                    </div>

                    <div data-aos ="fade-up" data-aos-duration='1500' className='text-white  font-bold text-6xl text-center pt-24 gap-2'>
        Welcome To <span className='text-black'>TEDx</span>IIITA
        </div>
        <div className='flex justify-center items-center'>
        <div data-aos ="fade-up" data-aos-duration='1500' className='text-white font-bold text-2xl w-[60%] text-center my-12 p-7'>
        TEDx is a program of local, self-organized event that brings people together to share ideas
							worth spreading. At a TEDx event, TED Talks videos and live speakers combine to spark deep
							discussion and connection. These local, self-organized events are branded TEDx, where
							x=independently organized event.</div>
                    </div>
    </div>
    </div>
  )
}
