import React from 'react'

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 text-gray-600">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Text Section */}
          <div className="w-full lg:w-6/12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              React development is powered by passionate developers
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              We build intuitive, scalable, and dynamic interfaces using modern technologies like React.js.
              Our team focuses on delivering seamless user experiences that bring ideas to life.
            </p>
            <p className="text-lg leading-relaxed">
              With a strong commitment to clean code, performance, and accessibility, we ensure every project
              is reliable, maintainable, and user-friendly.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-6/12">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/948/644/non_2x/diverse-business-people-meeting-at-boardroom-table-concept-free-vector.jpg"
              alt="Team meeting and discussion"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
