"use client"
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center rounded-b-4xl bg-gray-800 text-white px-6 py-3 fixed w-full top-0 z-50 shadow-md">
      <div className="flex items-center gap-2.5 ">
         <Image
          src="/favicon.ico"       
          alt="Dev"
          width={40}            
          height={40}
          className="rounded-full"
        />
        <h1 className="font-semibold text-3xl">DevLoops</h1>
      </div>

      <div className="space-x-12">
        <a href="#home" className="hover:text-neutral-600">Home</a>
        <a href="#about" className="hover:text-neutral-600">About</a>
        <a href="#contact" className="hover:text-neutral-600">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
