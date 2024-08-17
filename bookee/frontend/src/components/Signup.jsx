import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
import { useForm } from "react-hook-form"

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
                {...register("text", { required: true })}
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
               <button to ="/" className="text-blue-900 ml-1  my-2 underline" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>
               <Login />
              
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
