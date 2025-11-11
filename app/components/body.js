import React from 'react';

const Body = () => {
  return (
    <div id="home" className="pt-20 px-6 pb-10"> 
      <div className="text-center py-20 bg-amber-200 rounded shadow-md mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to DevLoops</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          At DevLoops Software Nepal, we create innovative solutions that empower businesses to thrive in the digital era. Our expertise lies in web development, app solutions, and custom software tailored to your needs.
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-4xl hover:bg-gray-700">
          Contact
        </button>
      </div>

      <div id="about" className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Our Company</h2>
        <p className="text-gray-700 mb-4">
          DevLoops is a leading software company in Nepal, dedicated to delivering high-quality digital solutions. We focus on customer satisfaction, innovative technology, and reliable service.
        </p>
        <p className="text-gray-700">
          Our team of experts works collaboratively to bring ideas to life, ensuring seamless integration and top-notch performance in every project.
        </p>
      </div>

    </div>
  )
}

export default Body;
