import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) =>{  console.log(data)
    
  const userInfo = {
    email: data.email,
    password:data.password,
  }
  await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Login Successfully');
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 1000);
      }

      localStorage.setItem("Users", JSON.stringify(res.data.user))
      
    }).catch((err)=>{
     if(err.response){
      // console.log(err);
      // alert("error"+err.response.data.mssg);
      toast.error("error"+err.response.data.mssg);
      setTimeout(() => {}, 2000);

     }
      
    })
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_model_3").close()}>✕</Link>
         
          <h3 className="font-bold text-lg">Login</h3>
       
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered w-full mt-1"
                {...register("email", { required: true })}
              />
               {errors.email && <span className='text-red-600'>This field is required</span>}

            </div>
            <div className="py-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="input input-bordered w-full mt-1"
                {...register("password", { required: true })}
              />
               {errors.password && <span className='text-red-600'>This field is required</span>}

            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary w-full">Login</button>
            </div>

          <div className="text-center mt-4">
            <p className="text-lime-800">Not registered? 
              <Link to="/signup" className="text-blue-700 ml-1">Sign up here</Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
