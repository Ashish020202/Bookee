import React from "react";
import Home from "./Landing/Home";
import Courses from "./Courses/mcourses";
import { Route,Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import { Toaster } from 'react-hot-toast';



function app(){
  return (<>
    {/* <Home/> */}

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/course" element={<Courses />}/>
      <Route path="/signup" element={<SignUp />}/> 
    </Routes>
    <Toaster />
  </>)
}

export default app;