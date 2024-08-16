import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <form>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered w-full mt-1"
                {...register("email", { required: true })}
              />
            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="input input-bordered w-full mt-1"
                {...register("password", { required: true })}
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary w-full">Login</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-lime-800">Not registered? 
              <a href="/signup" className="text-blue-700 ml-1">Sign up here</a>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
