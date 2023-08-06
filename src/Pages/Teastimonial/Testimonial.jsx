
import React from 'react';
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const Testimonial = () => {
    return (
        <>

    <div className="testimonial-container h-screen">
        <div className='pt-48 text-center text-white '>
        <p className='text-orange-300 text-xl'>testimonial</p>
        <p className='text-4xl text-bold text-orange-500'>What Our Students Say</p>

            <Swiper
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }} 
       navigation={true}
       modules={[Autoplay]}
       className="mySwiper ">
        
        <SwiperSlide>
        <figure className="flex flex-col items-center justify-center p-4 md:p-8 text-center text-white">
          <blockquote className="max-w-md mx-auto mb-4 text-white md:mb-4 dark:text-gray-400">
            <p >Art has given me a creative outlet to express myself, allowing me to explore my emotions and thoughts in a visually captivating way. It's truly liberating.</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-center">
              <div>Bonnie Green</div>
            </div>
          </figcaption>
        </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="flex flex-col items-center justify-center p-4 md:p-8 text-center text-white">
          <blockquote className="max-w-md mx-auto mb-4 text-white md:mb-4 dark:text-gray-400">
            <p >Art has given me a creative outlet to express myself, allowing me to explore my emotions and thoughts in a visually captivating way. It's truly liberating.</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-center">
              <div>Bonnie Green</div>
            </div>
          </figcaption>
        </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="flex flex-col items-center justify-center p-4 md:p-8 text-center text-white">
          <blockquote className="max-w-md mx-auto mb-4 text-white md:mb-4 dark:text-gray-400">
            <p >Art has given me a creative outlet to express myself, allowing me to explore my emotions and thoughts in a visually captivating way. It's truly liberating.</p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-center">
              <div>Bonnie Green</div>
            </div>
          </figcaption>
        </figure>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
        </>
    );
};

export default Testimonial;