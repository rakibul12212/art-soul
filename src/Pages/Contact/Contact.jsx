import React from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <>
        <Navbar></Navbar>
        <h1 className='text-center text-4xl p-5'>Contact Us</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 text-center p-10">
    <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://i.pinimg.com/originals/c6/42/1f/c6421f7dcd64555d57264165f58f9819.png" alt="" className='h-14 w-14 mx-auto pb-2' />
        <p className='font-bold pt-5'>By Phone</p>
        <p className='pt-5'>North America Toll-Free:</p>
        <p>1-877-930-1234</p>
        <p className='pt-5'>International:</p>
        <p>1-333-444-5555</p>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
        <img src="https://icons-for-free.com/iconfiles/png/512/file+icon-1320087274221188067.png" alt="" className='h-14 w-14 mx-auto pb-2'/>
        <p className='font-bold pt-5 pb-2'>Start a new case</p>
        <p>Just send us your question or concerns by starting a new case and we will give you the help you need</p>
        <div className="flex justify-center w-full py-5">
          <button
            className=" bg-orange-500 bg-opacity-70 hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 transition-all duration-500 transform hover:translate-x-2">START HERE</button>
        </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
        <img src="https://cdn-icons-png.flaticon.com/512/2665/2665038.png" alt="" className='h-14 w-14 mx-auto pb-2'/>
        <p className='font-bold pt-5 pb-2'>Live chat</p>
        <p>Chat with a member of our in-house team</p>
        <div className="flex justify-center w-full py-5">
          <button
            className=" bg-orange-500 bg-opacity-70 hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 transition-all duration-500 transform hover:translate-x-2">START CHAT</button>
        </div>
    </div>
</div>

        <Footer></Footer>
        </>
    );
};

export default Contact;

