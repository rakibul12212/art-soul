import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import 'animate.css';
import './Event.css'
const Event = () => {
    return (
        <>
             <div className='bg-orange-100 py-10'>
      <div className='text-center py-5'>
        <Slide><p className='text-orange-600'>Event</p></Slide>
        <Fade cascade damping={0.30}><h1 className='text-4xl text-bold text-stone-800 pt-2'>Exhibitions & Events</h1></Fade>
      </div>  
      <div className="container flex flex-col sm:flex-row justify-center px-5 sm:px-20">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1558452337-ca6e53836504?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaW50JTIwYXJ0fGVufDB8fDB8fHww&amp;w=1000&amp;q=80"
            alt=""
            className="responsive-image"
          />
        </div>

        <div className="w-full sm:w-72 pl-0 sm:pl-20 mt-5 sm:mt-0">
          <div>
            <div className="border-b-2 border-slate-400 ">
              <p className='text-bold text-2xl pb-2'>Summer Session</p>
              <p className='text-orange-400 text-bold pb-2'>15 Apr - 14 May 24</p>
              <p className='pb-4 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et nibh ut tortor dapibus aliquam sed.</p>
            </div>
            <div className="border-b-2 border-slate-400 mt-5 sm:mt-10">
              <p className='text-bold text-2xl pb-2'>Regular Session</p>
              <p className='text-orange-400 text-bold pb-2'>15 Apr - 14 May 24</p>
              <p className='pb-4 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et nibh ut tortor dapibus aliquam sed.</p>
            </div>
            <div className="border-b-2 border-slate-400 mt-5 sm:mt-10">
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