import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <>
        <Navbar></Navbar>
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center p-10">
    <div className="bg-white rounded-lg shadow-md flex-shrink-0">
        <img className='h-full w-64' src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" class="w-full h-64 object-cover rounded-t-lg" />
    </div>
    
    <div className="text-center md:text-left lg:text-left">
    <Fade cascade damping={0.5}>
        <p className="p-4 md:p-10">Art School</p>
        <p className="text-4xl text-bold pl-4 md:pl-10">A leader in educating artists since 2008</p>
        <p className="p-4 md:p-10">Art School offers nationally accredited undergraduate, graduate, and post-baccalaureate programs to more than 2,800 students from all over the world.Our school has an educational philosophy built upon an integrative approach to art, giving students exceptional opportunities to develop their creative and critical abilities, while working with leading faculty who include many of the famed artists.</p>
        </Fade>
    </div>
    
</div>

<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center p-10">
    
<div className="text-center md:text-left lg:text-left">
<Fade cascade damping={0.10}>
        <p className="p-4 md:p-10">mission</p>
        <p className="text-4xl text-bold pl-4 md:pl-10">The highest caliber of artistic education</p>
        <p className="p-4 md:p-10">The ArtSoul educates students in the language and process of making art in an environment where anyone who wishes to pursue an art education can realize his or her full potential.We fulfill this mission by offering high quality and accessible education and instruction in painting, drawing, sketch, sculpture and digital.</p></Fade>
   
        <Link to="/classes" className="relative inline-flex items-center justify-start  px-6  py-3 ml-10 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
            <span  className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span  className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span  className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span  className="relative w-full text-left text-white transition-colors duration-100 ease-in-out group-hover:text-white">VIEW PROGRAMS</span>
        </Link>
    </div>
    
    <div className="bg-white rounded-lg shadow-md flex-shrink-0">
        <img className='h-full w-64' src="https://cdn.pixabay.com/photo/2017/06/03/20/12/art-2369664_640.jpg" alt=""/>
    </div>
</div>

<Footer></Footer>
        </>
    );
};

export default About;