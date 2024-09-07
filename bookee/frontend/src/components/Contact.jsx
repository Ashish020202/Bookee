import React from 'react';


const Contact = () => {
  return (
    
    <div className="h-44 bg-gradient-to-r to-indigo-100 py-12 px-2 ">
      <div className="max-w-6xl h-screen mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
         
          <form className="space-y-2">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-gray-700">
            <p><strong>Email:</strong> contact@bookstore.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Address:</strong> 123 Book Street, City, Country</p>
          </div>
          
        </div>
        <div className="md:w-1/2">
          <iframe
            title="Our Location"
            className="w-full h-full"
            src="https://maps.google.com/maps?q=123%20Book%20Street,%20City,%20Country&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
   
  );
};

export default Contact;
