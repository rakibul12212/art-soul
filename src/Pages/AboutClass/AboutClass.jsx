
import { Card } from 'flowbite-react';

import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import useClasses from '../Hooks/useClasses';
import "./AboutClass.css"
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import { useHistory, useParams } from 'react-router-dom';

const aboutClass = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { serviceId } = useParams();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { classes } = useClasses();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
  
    let productToShow = classes.filter((product) => product._id === serviceId);
    // console.log(serviceId);
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useForm();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user } = useAuth();
    const onSubmit = (data) => {
      // const savedCart = ;
      data.cart = productToShow;
      fetch("https://artsoul.onrender.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          alert(
            "You have Successfully Purchased the Product,\n We will Contact with You very Soon !"
          );
          reset();
          const destination = "/dashboard";
          history.replace(destination);
        });
    };

   
  
    
    

    

    return (
    
    <>
    <Navbar></Navbar>
        <div className="purchase my-10 py-5 container mx-auto">
          <h2 className="text-center font-bold text-4xl bg-dark text-white py-2">
            CLASS-<span className="">DETAIL</span>{" "}
          </h2>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
              <div className="my-auto">
                <img
                  src={productToShow[0]?.classImage}
                  className="w-full rounded"
                  alt=""
                />
              </div>
              <div>
                <div className="p-4">
                  <h5 className="font-bold text-2xl text-white">
                    <span>Class Name: </span>{productToShow[0]?.className}
                    <br />
                  </h5>
                  <p className="text-white font-bold"><span>Instructor Name: </span>{productToShow[0]?.instructorName}</p>
                  <p className="text-white font-bold">
                  <span>Category: </span>{productToShow[0]?.category}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-gray-300"><span>Available Seats: </span>{productToShow[0]?.availableSeats}</p>
                    <p className="font-bold">
                      <span className="font-bold text-lg price">
                        <span className="font-bold text-gray-300">Just </span>{" "}
                        <span className="font-bold text-xl text-gray-300">$</span>{" "}
                        <span className="text-red-600 price">
                          {productToShow[0]?.price}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <small>             
                  </small>
                </div>
              </div>
            </div>
          </div>
          </div>
    <div>
    <h2 className="font-bold text-3xl mt-8 px-10">Order Process</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='p-10 flex flex-rows gap-3 '>
        <input
          defaultValue={user.displayName}
          {...register('name')}
          className="border rounded p-2 w-40% mt-2"
        />
        <input
          defaultValue={user.email}
          {...register('email', { required: true })}
          className="border rounded p-2 w-40% mt-2"
        />
        {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          placeholder="Address"
          defaultValue=""
          {...register('address')}
          className="border rounded p-2 w-40% mt-2"
        />
        <input
          placeholder="City"
          defaultValue=""
          {...register('city')}
          className="border rounded p-2 w-40% mt-2"
        />
        <input
          placeholder="Phone Number"
          defaultValue=""
          type="number"
          {...register('phone', { required: true })}
          className="border rounded p-2 w-40% mt-2"
        />
        {errors?.phone?.type === 'required' && (
          <p className="text-red-600">This field is required</p>
        )}
        <input
          type="submit"
          value="Submit"
          className="bg-orange-500 hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 transition-all duration-500 transform hover:translate-x-2 cursor-pointer"
        />
      </form>

    </div>
    <Footer></Footer>
    </>
    );
};

export default aboutClass;
