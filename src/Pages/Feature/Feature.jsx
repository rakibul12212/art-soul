import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Feature = () => {
    return (
        <>
       
            <div className="bg-orange-100 dark:bg-gray-900 p-5">
            <Fade><h1 className='text-2xl text-bold text-gray-500 p-5 text-center'>Most Popurar</h1></Fade>
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 sm:gap-6">
        <div className="border-r-2 border-slate-400 text-center mb-10 sm:mb-0 flex flex-col items-center">
          <img src="https://www.pngmart.com/files/22/Icon-Painting-Art-PNG-1.png" alt="" className="h-10 mb-5 mx-auto pr-8" />
          <h2 className="mb-6 text-lg font-semibold text-slate-800 uppercase dark:text-white pr-8">Painting</h2>
        </div>
        <div className="border-r-2 border-slate-400 text-center mb-10 sm:mb-0 flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1454/1454971.png" alt="" className="h-10 mb-5 mx-auto pr-8" />
          <h2 className="mb-6 text-lg font-semibold text-slate-800 uppercase dark:text-white pr-8">Sketch</h2>
        </div>
        <div className="border-r-2 border-slate-400 text-center mb-10 sm:mb-0 flex flex-col items-center">
          <img src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/design_graphic_sign_icon_symbol-512.png" alt="" className="h-10 mb-5 mx-auto pr-8" />
          <h2 className="mb-6 text-lg font-semibold text-slate-800 uppercase dark:text-white pr-8">Drawing</h2>
        </div>
        <div className="border-r-2 border-slate-400 text-center mb-10 sm:mb-0 flex flex-col items-center ">
          <img src="https://cdn-icons-png.flaticon.com/512/2071/2071234.png" alt="" className="h-10 mb-5 mx-auto pr-8" />
          <h2 className="mb-6 text-lg font-semibold text-slate-800 uppercase dark:text-white pr-8">Sculpture</h2>
        </div>
        <div className="border-r-2 border-slate-400 text-center mb-10 sm:mb-0 flex flex-col items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe1eeTZSGspavEeDCWGSSMF2w4bYarxAmIA&usqp=CAU" alt="" className="h-10 mb-5 mx-auto pr-8" />
          <h2 className="mb-6 text-lg font-semibold text-slate-800 uppercase dark:text-white pr-8">Video Art</h2>
        </div>
        <div className="text-center mb-10 sm:mb-0 flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/4359/4359906.png" alt="" className="h-10 mb-5 mx-auto pr-8" />
          <h2 className="mb-6 text-lg font-semibold text-slate-800 uppercase dark:text-white pr-8">Digital</h2>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default Feature;