"use client"
import React from 'react';
import Hero from './hero.jsx'
import About from './about.jsx'
import Button from './Button.jsx';
import Contact from './contact.jsx';

const Body = () => {
  return (
     
    <div id="home" className="m-0 pt-24 px-6 pb-10 bg-amber-50 min-h-screen">

      {/* Hero Section */}
    <Hero/>
      {/* Contact Section */}
    <About/>
      {/* {/* <Contact/> */}
    <Contact/>
    </div>
  );
};

export default Body; 
