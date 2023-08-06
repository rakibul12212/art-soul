import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Gallary = () => {
    return (
        <>
            <div className='text-center p-20 bg-orange-50'>
                <Slide><h1 className='text-orange-600'>gallery</h1></Slide>
                <p className='text-4xl text-bold text-stone-800'><Fade>Student Works</Fade></p>
            </div>
            <div className="grid grid-cols-3 gap-4 px-20 mb-5">
  <div className="relative">
    <img src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">Halina Shearman</h2>
    </div>
  </div>
  <div className="relative">
    <img src="https://tds-images.thedailystar.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2022/10/14/ai_art_generator.png" alt="" className="w-full h-full object-cover rounded-lg" />
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">Anna Galvin</h2>
    </div>
  </div>
  <div className="relative">
    <img src="https://i.pinimg.com/originals/6c/3a/74/6c3a74c94839a9130a11e794161bc55a.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">Susan Seitz</h2>
    </div>
  </div>
  <div className="relative col-span-2">
    <img src="https://artincontext.org/wp-content/uploads/2022/07/Types-of-Painting-848x530.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">Peter John </h2>
    </div>
  </div>
  <div className="relative">
    <img src="https://i.pinimg.com/1200x/76/02/ca/7602caa1a91789b51596fc0b9b423a37.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">Reid Albert</h2>
    </div>
  </div>
</div>
<div className="flex justify-center p-5">
  <button className="bg-orange-500 bg-opacity-70 hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 ">
    View All Works
  </button>
</div>





            
        </>
    );
};

export default Gallary;