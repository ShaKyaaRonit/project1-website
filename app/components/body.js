import React from 'react';
import Button from './Button.jsx'
const Body = () => {
  return (
    <div id="home" className="m-0 pt-20 px-6 pb-10">
      {/* Hero Section */}
      <div className="text-center p-25 pb-40 bg-gray-300 rounded-2xl">
        <h1 className="text-4xl font-bold mb-6 uppercase">Welcome to DevLoops</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          DevLoops Software Nepal — a creative software company passionate about crafting
          modern, efficient, and user-friendly web solutions to help businesses grow in the digital world.
        </p>
        {<Button/>}
      </div>

      {/* About Section */}
      <div id="about" className="m-15 text-center">
        <h2 className="text-4xl font-semibold mb-6 uppercase">About Our Company</h2>
        <p className="text-gray-700 mb-4">
          At DevLoops, we believe in turning ideas into impactful digital experiences. 
          Our team of dedicated developers and designers work collaboratively to deliver 
          high-quality, performance-driven web and mobile solutions.
        </p>
        <p className="text-gray-700">
          We value innovation, collaboration, and simplicity — creating tools that empower 
          businesses to thrive in the digital era.
        </p>
      </div>
     {/* Contact Section */}
<div id="contact" className="text-center bg-gray-200 py-16 rounded-2xl shadow-lg mt-24">
  <h1 className="text-4xl font-bold uppercase text-gray-800 mb-8">Contact Us</h1>

  <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
    <form className="flex flex-col space-y-5">
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 rounded-lg border border-black"
        required
      />
      <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-black"
        required
      />
      <textarea placeholder="Your Message" className="p-3 rounded-lg border border-black" required>

      </textarea>
        <button type="submit" className="bg-gray-700 text-white py-3 rounded-full font-semibold hover:bg-black transition-all duration-300"
        >
          Send Message
        </button>
    </form>
  </div>

</div>

</div >

  );
};

export default Body;
