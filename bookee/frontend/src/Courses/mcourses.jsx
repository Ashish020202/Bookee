import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Social from '../components/social'

function courses() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
      <Course />
      </div>
      <Social />
    </div>
  )
}

export default courses
