import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddClass.css";
import useAuth from "../../Hooks/useAuth";
const AddClass = () => {
  // const [users, setUsers] = useState([]);
  // Taken From React Hook Form
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();
  const {user}=useAuth()
   // find users from database
  //  React.useEffect(()=>{
  //   fetch('http://localhost:5000/findusers')
  //   .then(res=>res.json())
  //   .then(data=>setUsers(data))
  // }, []);
  // Taken From React Hook Form On Submit
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/classes", data).then((res) => {
      if (res.data.insertedId) {
        alert("Class Added successfully");
        reset();
      }
    });
    console.log(data)
  };
  return (
    <div className="add-class my-0 py-5 container-fluid">
      <h2 className="font-bold">Please Add a Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("className", {
            required: true,
            maxLength: 40,
          })}
          placeholder="Class Name"
        />
        {errors?.name?.type === "required" && <p>This field is required</p>}
        {errors?.name?.type === "maxLength" && (
          <p>Name cannot exceed 40 characters</p>
        )}

          <input
          {...register("classImage")}
          placeholder="Please Insert an Class Image url"
        />
        {errors?.img?.type === "url" && <p>Please Insert an image url</p>}
        {errors?.name?.type === "required" && (
          <p>Required ! Please insert an image url. Be careful!</p>
        )}
        {user?.photoURL ? (
          <input
            defaultValue={user?.photoURL}
            {...register("instructorImage")}
            placeholder="Please Insert an Instructor Image url"
          />
        ) : (
          ""
        )}
        <input defaultValue={user.displayName} {...register("instructorName")} placeholder="Instructor name" />
        
        <input
          defaultValue={user.email}
          {...register("instructorEmail", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}{" "}

        
        <input type="number" {...register("availableSeats")} placeholder="Available Seats" />
        <input 
        type="number"
        min="0"
        step="1"
        {...register("price")} placeholder="price" />
        
        

        
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddClass;