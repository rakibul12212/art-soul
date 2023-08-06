import React, { useEffect, useState } from 'react';

const useClasses = () => {
    // products to be rendered on the UI
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  
    return {classes, setClasses}
    ;
};

export default useClasses;