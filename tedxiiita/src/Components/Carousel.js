import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/1.jpg'
import img2 from '../assets/bg1.jpg'
import img3 from '../assets/bg2.jpg'

export default function Carousel() {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
      };

  return (
    <div >
        <div className="slider-container">
      <Slider {...settings}>
        <div className='h-screen w-screen shadow-inner'>
          <img src={img1} />
        </div>
        <div className='h-screen w-screen shadow-inner'>
          <img src={img2} />
        </div>
        <div className='h-screen w-screen shadow-inner'>
          <img src={img3} />
        </div>
      </Slider>
    </div>
      
    </div>
  )
}
