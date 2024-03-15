// Photos from https://citizenofnowhe.re/lines-of-the-city
import React from "react";
//import './pastspeakers.css'
import akash_ganesan from '../assets/akash_ganesan.png'
import diljott from '../assets/diljot.png'
import kevin  from '../assets/kevin_missal.png'
import vasudevan from '../assets/r_vasudevan.png'
import rakhi from '../assets/rakhi_pal.png'
import nandini from '../assets/nandini_azad.png'
import sahil from '../assets/sahil_pruthi.png'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ img, name }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="flex justify-center items-center relative snap-center h-[100vh] font-poppins">
      <h2 data-aos ="fade-up" data-aos-duration='1500' style={{ y }} className="text-white font-bold text-4xl w-[20%] text-center">{name}</h2>
      <div ref={ref} className="h-[600px] w-[500px] relative flex justify-center items-center overflow-hidden">
        <img data-aos ="fade-up" data-aos-duration='1500' src={img} alt="A London skyscraper" className=" absolute h-3/4 w-5/6" />
      </div>
      <h2  data-aos ="fade-up" data-aos-duration='1500' className="text-white font-bold text-xl w-[25%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quisquam, molestias, dolor perferendis itaque magni temporibus rem expedita distinctio id enim recusandae!</h2>
      
    </section>
  );
}

export default function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <div className=" bg-black">
      <div className="flex justify-centbetween">
      <div className="flex-col items-center justify-center">
        <div className="w-2/3 h-screen blur-md  fixed rounded-full overflow-y-hidden left-[-500px] -inset-0.5 bg-gradient-to-r from-[#AB2100] to-transparent"></div>

      </div>
      <div className="flex-col items-center justify-center">
        <div className="w-2/3 h-screen blur-md  fixed rounded-full overflow-y-hidden left-[875px] -inset-0.5 bg-gradient-to-l from-[#AB2100] to-transparent"></div>

      </div>
      </div>
      {/* <div className="flex-col items-center justify-center">
        <div className="w-2/3 h-screen blur-md  fixed rounded-full overflow-y-hidden left-[-500px] -inset-0.5 bg-gradient-to-r from-[#AB2100] to-transparent"></div>

      </div> */}
     
      {data.map((data) => (
        <Image img = {data.images} name = {data.name1} />
      ))}
      <motion.div className=" fixed left-0 bottom-[50px] right-0 h-[5px] bg-white" style={{ scaleX }} />
      </div>
    </>
  );
}

const data = [
 
  {
    images: akash_ganesan,
    name1: "Akash Ganesan"
  },
  {
    images: diljott,
    name1: "Diljot"
  },
  {
    images: nandini,
    name1: "Nandini Azad"
  },
  {
    images: kevin,
    name1: "Kevin Missal"
  },
  {
    images: rakhi ,
    name1: "Rakhi Pal"
  },
  {
    images: vasudevan,
    name1: "R Vasudevan"
  },
  {
    images: sahil,
    name1: "Sahil Pruthi"
  },
]
