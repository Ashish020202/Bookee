import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
// import { useForm, SubmitHandler } from "react-hook-form"

function SignUp() {
  return (
    <div>
      <div className='flex justify-center m-36'>
        <div className="modal-box m-auto">
          <form method="dialog"  onSubmit={handleSubmit(onSubmit)}>
            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          </form>
          <h3 className="font-bold text-lg">Sign Up</h3>
          <form>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="input input-bordered w-full mt-1"
                required
              />
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered w-full mt-1"
                required
              />
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                placeholder="Create a password" 
                className="input input-bordered w-full mt-1"
                required
              />
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
