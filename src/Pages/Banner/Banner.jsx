
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Slide } from "react-awesome-reveal";
import './Banner.css'
const Banner = () => {
  return (
    
    <>
  

<Swiper
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 4500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Autoplay, Pagination]}
       className="mySwiper h-screen"
        
      >
        <SwiperSlide><div className="relative">
   <img
     className="w-full h-25%"
     src="https://cdn.shopify.com/s/files/1/0118/2053/1771/files/SKS_1046.jpg?v=1672287875&width=1500"
    alt="..."/>
   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">

       <Slide><h1 className="text-white text-6xl font-bold py-2">Found by Artists and Supporting Artists Since 1875</h1></Slide>
    
    <button className="bg-orange-500 bg-opacity-70  hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 ">EXPLORE OUR PROGRAMS</button>
   </div>
</div></SwiperSlide>
        <SwiperSlide><div className="relative">
    <img
      className="w-full h-25%"
      src="https://www.rappler.com/tachyon/2022/12/2022-12-16T095850Z_383355044_RC2JVX91LLGO_RTRMADP_3_PHILIPPINES-ART-BLOOD-scaled.jpg"
      alt="..."/>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <Slide><h1 className="text-white text-6xl font-bold py-2">Experience for the Artists in you</h1></Slide>
      <button className="bg-orange-500 bg-opacity-70  hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 ">EXPLORE OUR PROGRAMS</button>
    </div>
</div></SwiperSlide>
        <SwiperSlide><div className="relative">
  <img
    className="w-full h-25%"
    src="https://www.kingstonarts.com.au/files/sharedassets/arts-website/opportunities/artist-studios/_e6a5566.jpg"
    alt="..."/>
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <Slide><h1 className="text-white text-6xl font-bold py-2">Pursue your passion Create your life</h1></Slide>
    <button className="bg-orange-500 bg-opacity-70  hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 ">EXPLORE OUR PROGRAMS</button>
  </div>
</div></SwiperSlide>
        
      </Swiper>



    </>
  );
};

export default Banner;
