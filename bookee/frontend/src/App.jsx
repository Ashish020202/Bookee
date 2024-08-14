import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Social from "./components/social";
import Bookcard from "./components/Bookcard";
import Cards from "./components/Cards";
function app(){
  return (<>
    <Navbar/> 
    <Banner/> 
    <Bookcard/>
     <Social/>
  </>)
}

export default app;