// import React from 'react';
//  import { useLoaderData } from 'react-router-dom';


// const ViewClasses = () => {
//     const classDetails=useLoaderData()
//     const {category}=classDetails
//     console.log(classDetails);
//     return (
//         <>
//         this is view classes{category}
        

//         </>
//     );
// };

// export default ViewClasses;

import React, { useEffect, useState } from 'react';

const ViewClasses = () => {
  const [classDetails, setClassDetails] = useState({});
  const { category } = classDetails;

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const response = await fetch('http://localhost:5000/classes/1'); // Replace '1' with the actual class ID
        if (!response.ok) {
          throw new Error('Failed to fetch class details');
        }
        const data = await response.json();
        setClassDetails(data);
      } catch (error) {
        console.error('Error fetching class details:', error);
      }
    };

    fetchClassDetails();
  }, []);

  return (
    <>
      <p>This is view classes: {category}</p>
    </>
  );
};

export default ViewClasses;
