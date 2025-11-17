import React from 'react'

const about = () => {
  return (
    <> 
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
      </section></>
  )
}

export default about