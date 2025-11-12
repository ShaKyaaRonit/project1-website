import React from 'react';
import Button from './Button.jsx';

const Body = () => {
  return (
    <div id="home" className="m-0 pt-24 px-6 pb-10 bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center p-14 bg-gray-300 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 uppercase">Welcome to DevLoops</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          DevLoops Software Nepal — a creative software company passionate about crafting
          modern, efficient, and user-friendly web solutions to help businesses grow in the digital world.
        </p>
        <Button />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="scroll-mt-24 mt-24 text-center py-16 bg-amber-50 rounded-2xl"
      >
        <h2 className="text-4xl font-semibold mb-6 uppercase text-gray-800">About Our Company</h2>
        <p className="text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
          At DevLoops, we believe in turning ideas into impactful digital experiences.
          Our team of dedicated developers and designers work collaboratively to deliver
          high-quality, performance-driven web and mobile solutions.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We value innovation, collaboration, and simplicity — creating tools that empower
          businesses to thrive in the digital era.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact" className="scroll-mt-24 text-center bg-gray-200 py-18 rounded-2xl  mt-26">
        <h1 className="text-4xl font-bold uppercase text-gray-800 mb-8">Contact Us</h1>

        <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
          <form className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-lg border border-gray-400"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gray-700 text-white py-3 rounded-full font-semibold hover:bg-black transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Body;
