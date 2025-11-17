import React from 'react'

const hero = () => {
  return (
    <>
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6  from-blue-50 to-blue-100"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
             DIGITAL INNOVATION
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Welcome to DevLoop — where smart ideas, clean code, and a tiny bit of chaos come together to create genuinely impressive digital solutions.
          We build software that works  
        </p>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition">
          Connect
        </button>
      </div>
    </section>
    </>
  )
}

export default hero