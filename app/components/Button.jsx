import React from 'react'

const Button = () => {
  return (
    <button className="mt-6 px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-black hover:font-bold transition"
    onClick={() =>
    {alert("helo")}
    }
    >
          Contact Us
        </button>
  )
}

export default Button