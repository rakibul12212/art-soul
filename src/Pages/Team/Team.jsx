import React from 'react';
import './Team.css'
import { Slide } from "react-awesome-reveal";


const Team = () => {
    return (
       <>
           <div className='about-container flex justify-end p-48 '>
            
            <div>
           <Slide> <p className='text-yellow-400'>Popular Instructors</p>
            <p className='text-4xl text-bold text-slate-300 pt-2'>A Legendary Community</p></Slide>
            
           
                <p className='pt-10 w-80 text-slate-400'>Art teaching is a transformative process that empowers individuals to explore their creativity, express their emotions, and develop their unique artistic skills. </p>
                <div className="flex space-x-4 p-2 space-y-2">
                  <p className="text-xl text-bold text-white">Mia Harper</p>
                  <div className="h-4 w-4 flex space-x-2">
                     <img src="https://www.iconpacks.net/icons/2/free-facebook-icon-2869-thumb.png" alt="" />
                     <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="" />
                    </div>
                </div>
                
                <div className='grid grid-row grid-cols-3 gap-3 w-full  pt-5 rounded'>
                        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" className='h-48 w-48 rounded-lg'/>
                        <img src="https://images.unsplash.com/photo-1514355315815-2b64b0216b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='h-48 w-48 rounded-lg'/>
                        <img src="https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='h-48 w-48 rounded-lg'/>
                        <img src="https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='h-48 w-48 rounded-lg'/>
                        <img src="https://images.unsplash.com/photo-1515073838964-4d4d56a58b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='h-48 w-48 rounded-lg'/>
                        <img src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" className='h-48 w-48 rounded-lg'/>
                    </div>
            </div>
           </div>
       </>
    );
};

export default Team;
