import React from "react";
import Home from "./Landing/Home";
import Courses from "./Courses/mcourses";
import { Navigate, Route,Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";
import Contact from "./components/Contact";



function app(){
  const [Authuser,setAuthuser] = useAuth()
  return (<>
    {/* <Home/> */}

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/course" element={Authuser?<Courses />:<Navigate to = "/signup" />}/>
      <Route path="/signup" element={<SignUp />}/> 
      <Route path="/About" element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>
    </Routes>
    <Toaster />
  </>)
}

export default app;