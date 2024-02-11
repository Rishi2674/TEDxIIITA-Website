import React from 'react'

export default function About() {
  return (
    <div class="delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:invisible" data-taos-offset="300">
    <div className= " bg-[url('./assets/about_bg2.png')]">
      <div className='text-white  font-bold text-6xl text-center pt-24 gap-2'>
        About <span className='text-black'>TEDx</span>IITA
        </div>
        <div className='flex justify-center items-center'>
        <div className='text-white font-bold text-2xl w-[60%] text-center my-12 p-7'>
            TEDxIIITA builds a TED like experience at Indian Institute of Information Technology, Allahabad in
					order to engage the students, leading professors and researchers, area leaders and visionaries in
					thoughtful discussions. Our goal is to bring together bright minds to give talks that are idea
					focused, and on a wide range of subjects, to foster learning, inspiration and wonder, and provoke
					conversations that matter.</div>
                    </div>
    </div>
    </div>
  )
}
