import React from "react";
import banner from "../assets/Books.png";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-20">

      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-24 lg:mt-36 space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-400 leading-tight">
          Discover Your Next Favorite <span className="text-indigo-600">Book</span> 
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Dive into a world of stories, knowledge, and adventure. Our collection 
          of books offers something for every reader. Explore new genres, 
          find bestsellers, and enjoy the timeless classics. Start your 
          reading journey with us today!
        </p>
        <div className="flex items-center gap-2 bg-white p-3 border border-gray-300 rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 text-indigo-500"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="flex-grow text-gray-700 placeholder-gray-400 focus:outline-none"
            placeholder="Enter your email to get updates"
          />
        </div>
        <button className="btn mt-6 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-500 transition duration-300">
          Get Started
        </button>
      </div>

      <div className="order-1 w-full mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <img
          src={banner}
          className="md:w-[500px] md:h-[400px] lg:w-[550px] lg:h-[460px] object-contain"
          alt="Books banner"
        />
      </div>
    </div>
  );
}

export default Banner;
