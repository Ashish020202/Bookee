import React from 'react'
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Social from "../components/social";
import Bookcard from "../components/Bookcard";


function Home() {
  return (
    <div>
    <Navbar/> 
    <Banner/> 
    <Bookcard/>
    <Social/>
    </div>
  )
}

export default Home
