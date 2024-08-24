import React from "react";
import Home from "./Landing/Home";
import Courses from "./Courses/mcourses";
import { Navigate, Route,Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";



function app(){
  const [Authuser,setAuthuser] = useAuth()
  return (<>
    {/* <Home/> */}

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/course" element={Authuser?<Courses />:<Navigate to = "signup" />}/>
      <Route path="/signup" element={<SignUp />}/> 
    </Routes>
    <Toaster />
  </>)
}

export default app;