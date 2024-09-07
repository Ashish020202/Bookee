import React from 'react';
import Navbar from './Navbar'

const About = () => {
  return (
     <>
     <Navbar />
    <div className="min-h-screen bg-gray-100 py-10 px-5 mt-20  ">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Welcome to our Bookstore! We are passionate about books and dedicated to providing a wide variety of literature to suit all tastes. Our mission is to foster a love of reading in everyone and make it accessible to all.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div className="p-4 bg-blue-100 rounded-full">
              <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v14l9 4 9-4V5l-9-4zm7 16l-7 3.11L5 17V7l7-3.11L19 7v10z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Wide Collection</h3>
              <p className="text-gray-600">Explore a vast selection of books from different genres and authors.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-4 bg-yellow-100 rounded-full">
              <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v14l9 4 9-4V5l-9-4zm0 16l-7-3.11V7l7 3.11L19 7v6.89L12 17z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Easy Access</h3>
              <p className="text-gray-600">User-friendly online platform for browsing and purchasing books.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-4 bg-green-100 rounded-full">
              <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v14l9 4 9-4V5l-9-4zm7 16l-7 3.11L5 17V7l7-3.11L19 7v10z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Community Driven</h3>
              <p className="text-gray-600">Join a community of readers and participate in our events and discussions.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-4 bg-red-100 rounded-full">
              <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v14l9 4 9-4V5l-9-4zm7 16l-7 3.11L5 17V7l7 3.11L19 7v10z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Secure Payments</h3>
              <p className="text-gray-600">We offer multiple secure payment options for a seamless experience.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
