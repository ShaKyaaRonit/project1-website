"use client"
import React from 'react'
const Navbar = () => 
{
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-3 fixed w-full top-0 z-50 shadow-md">
      <div className="flex items-center space-x-3">
        <h1 className="font-semibold text-lg">DevLoops</h1>
      </div>

      <div className="space-x-6">
        <button  className="hover:text-gray-300">Home</button>
        <button className="hover:text-gray-300">About</button>
        <button className="hover:text-gray-300">Contact</button>
      </div>
    </nav>
  )
}

export default Navbar
