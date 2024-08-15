import React from "react";
import Home from "./Landing/Home";
import Courses from "./Courses/mcourses";

import { Route,Routes } from "react-router-dom";


function app(){
  return (<>
    {/* <Home/> */}

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/course" element={<Courses />}/>  
    </Routes>
  </>)
}

export default app;