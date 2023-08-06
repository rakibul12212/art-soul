
import React, { useEffect, useState } from 'react';
import { Tabs } from 'flowbite-react';
import ShowClass from '../ShowClass/ShowClass';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';


const Classes = () => {

    const [items, setItems] = useState([]);
   
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
    console.log(items._id)
 
    return (
        <>
        <Fade> <div className='p-20 text-center'>
            <p className='py-5 text-orange-400'>education</p>
            <p className='text-4xl text-bold text-stone-700'>Full Time Courses</p>
         </div></Fade>
    {/* <div>
      {items.map(item=>
      <div key={item._id}>
        <Link to={`/classDetails/${item._id}`}>{item.category}</Link>
      </div>)}
    </div> */}
        <ShowClass></ShowClass>


        {/* <Tabs.Group
          className="my-2 flex flex-row justify-self-center justify-center "
          aria-label="Tabs with underline"
          style="underline"
        >
          <Tabs.Item active={true} title="Painting">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-4">
              {items
                .filter(item => item.category === 'Painting')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Sculpture">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-4">
              {items
                .filter(item => item.category === 'Sculpture')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Drawing">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-4">
              {items
                .filter(item => item.category === 'Drawing')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Photography">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-4">
              {items
                .filter(item => item.category === 'Photography')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Digital Art">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-6">
              {items
                .filter(item => item.category === 'Digital Art')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Illustration">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-6">
              {items
                .filter(item => item.category === 'Illustration')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Textile Art">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-6">
              {items
                .filter(item => item.category === 'Textile Art')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Glass Art">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-6">
              {items
                .filter(item => item.category === 'Glass Art')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Street Art">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-6">
              {items
                .filter(item => item.category === 'Street Art')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Film and Video Art">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-6">
              {items
                .filter(item => item.category === 'Film and Video Art')
                .map(item => (
                  <ShowClass key={item._id} item={item} />
                ))}
            </div>
          </Tabs.Item>
        </Tabs.Group> */}


        
      </>
    );
  };

export default Classes;




