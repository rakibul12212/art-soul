import React, { useEffect, useState } from 'react';
import { Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const ShowClass = () => {
  
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/classes");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);
  // console.log(items._id)
  const handleClickSeeAll = () => {
    setShowAll(true);
  };

  
 
  return (
    <div className="flex justify-center flex-wrap ">
      {items.slice(0, showAll ? items.length : 3).map((item, _id) => (
        <div key={_id} className="w-64 m-4 ">
          <div 
          className="max-w-xs bg-white rounded-lg shadow-lg hover:bg-orange-100">
            <a href="#">
              <img className="rounded-t-lg h-48" src={item.classImage} alt="" />
            </a>
            <div className="p-5 text-center">
              <a href="#">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-stone-700 dark:text-white">
                  {item.className}
                </h5>
                
              </a>
             <div className='py-4 text-justify'>
             <p>
                <span className="font-bold text-orange-500">Time:</span> {item.time}
              </p>
              <p>
                <span className="font-bold text-orange-500">Days of Week:</span> {item.date}
              </p>
            
              <p><span className="font-bold text-orange-500">Available Seats :</span> {item.availableSeats}</p>
             </div>
              <p className=" text-gray-700 dark:text-gray-400">
                <span className="font-bold text-2xl text-cyan-600">$</span>{" "}
                <span className="font-bold text-3xl text-cyan-600">{item.price}</span>/
                <span className="font-bold text-xl text-slate-400">monthly</span>
              </p>

            </div>
            <div className="flex justify-center w-full py-0">
    
          {/* <NavLink as={Link} to={`/aboutclass/${_id}`}>
                  <Button variant="outline-danger" className=" bg-orange-500 bg-opacity-70 hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 ">Read more</Button>
                </NavLink> */}
                <NavLink as={Link} to={`/aboutclass/${item._id}`}>
                  <Button variant="outline-danger" className=" bg-orange-500 bg-opacity-70 hover:bg-cyan-500 text-white py-2 px-4 rounded mt-4 ">Select Course</Button>
                </NavLink>
          
        </div>
          </div>
        </div>
      ))}
      {!showAll && (
        <div className="flex justify-center w-full py-5">
          <button
            className=" bg-orange-500 bg-opacity-70 hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 "
            onClick={handleClickSeeAll}
          >
            View All Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowClass;
