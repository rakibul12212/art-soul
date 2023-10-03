import React from 'react';

import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import Event from '../Event/Event';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Gallery from '../Gallary/Gallary';
import Herosection from '../HeroSection/Herosection';
import Navbar from '../NavBar/Navbar';
import ShowClass from '../ShowClass/ShowClass';
import Team from '../Team/Team';
import Testimonial from '../Teastimonial/Testimonial';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Feature></Feature>
            <Herosection></Herosection>
            <Classes></Classes>
            <Team></Team> 
            <Event></Event>
            <Testimonial></Testimonial>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;