import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import 'animate.css';
const Event = () => {
    return (
        <>
            <div className='bg-orange-100'>
                <div className='text-center p-20'>
                  <Slide><p className='text-orange-600'>Event</p></Slide>
                  <Fade cascade damping={0.30}><h1 className='text-4xl text-bold text-stone-800'>Exhibitions & Events</h1></Fade>
                </div>  
                <div className="flex flex-wrap">
                <div className="relative mb-20">
  <img src="https://images.unsplash.com/photo-1558452337-ca6e53836504?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaW50JTIwYXJ0fGVufDB8fDB8fHww&amp;w=1000&amp;q=80" alt="" className="w-3/4 h-1/12 px-10 " />
  
  <Fade delay={1e3} cascade damping={2e-1}><h2 className="absolute bottom-0 left-4 md:left-20 text-white bg-stone-800 p-4 md:p-8 lg:p-16 w-full md:w-2/3 rounded text-sm md:text-xl ">Art soul students and staff initiate and engage in a wide range of events and projects. Some of these are hosted by the  ArtSoul.</h2></Fade>

</div>

  
  <div className="w-72 ml-20">
    <div >
      <div className="border-b-2 border-slate-400 my-10">
      <p className='text-bold text-2xl pb-2'>Summer Session </p>
      <p className='text-orange-400 text-bold pb-2'>15 Apr - 14 May 24</p>
      <p className='pb-4 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et nibh ut tortor dapibus aliquam sed.</p>
      </div>
      <div className="border-b-2 border-slate-400 my-10">
      <p className='text-bold text-2xl pb-2'>Regular Session</p>
      <p className='text-orange-400 text-bold pb-2'>15 Apr - 14 May 24</p>
      <p className='pb-4 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et nibh ut tortor dapibus aliquam sed.</p>
      </div>
      <div className="border-b-2 border-slate-400 my-10">
      <p className='text-bold text-2xl pb-2'>Encountering Pain</p>
      <p className='text-orange-400 text-bold pb-2'>15 Apr - 14 May 24</p>
      <p className='pb-4 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et nibh ut tortor dapibus aliquam sed.</p>
      </div>
    </div>
  </div>
</div>

            </div>
            
        </>
    );
};

export default Event;