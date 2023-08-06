import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

const Instructors = () => {
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/public/data.json");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
    <Navbar></Navbar>
      <h1 className='text-4xl text-center p-10'>Instructors</h1>
      <div className="flex justify-center flex-wrap">
        {items.slice(0, showAll ? items.length : 3).map((item) => (
          <div key={item.id} className="w-64 m-8 mv-8">
            <div className="max-w-xs bg-white">
              <a href="#">
                <img className="h-48 w-72" src={item.instructorImage} alt="" />
              </a>
              <p className='pt-5 font-bold'>{item.instructorName}</p>
              <p>{item.instructorEmail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-5">
        <button
          className="bg-orange-500 bg-opacity-70 hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 transition-all duration-500 transform hover:translate-x-2"
          onClick={toggleShowAll}
        >
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Instructors;
