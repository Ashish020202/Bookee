import React from "react";
import Home from "./Landing/Home";
import Courses from "./Courses/mcourses";

import { Route,Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/login";


function app(){
  return (<>
    {/* <Home/> */}

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/course" element={<Courses />}/>
      <Route path="/signup" element={<SignUp />}/> 
      <Route path="/login" element={<Login />}/> 
    </Routes>
  </>)
}

export default app;