import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
import { useForm } from "react-hook-form"
import axios from 'axios';


function SignUp() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    console.log(data);
    
    const userInfo = {
      fullname : data.fullname,
      email: data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data);
        if(res.data){
          alert("signup sucessful");
        }

        localStorage.setItem("Users", JSON.stringify(res.data.user))
        
      }).catch((err)=>{
       if(err.response){
        console.log(err);
        alert("error"+err.response.data.mssg);
       }
      })

  };

  const handleLoginClick = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate('/login');
    }, 2000); // 2 seconds delay to show the modal
  };
  
  return (
    
    <div>
      <div className='flex justify-center m-36'>
        <div className="modal-box m-auto">
          <form method="dialog"  onSubmit={handleSubmit(onSubmit)}>
            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-lg">Sign Up</h3>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="input input-bordered w-full mt-1"
                required
                {...register("fullname", { required: true })}
              />
              {errors.text && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered w-full mt-1"
                required
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                placeholder="Create a password" 
                className="input input-bordered w-full mt-1"
                required
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-success w-72">Sign Up</button>
              <p className='text-lime-900'>Have account?{" "}
               <Link to="/" className="text-blue-700 ml-1">Login</Link>{" "}
              
              
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
