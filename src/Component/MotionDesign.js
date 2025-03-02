import React from "react";

const MotionDesign = () => {
  return (
    <section className="py-20 px-4 lg:px-32 bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Motion Design</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our motion design work that brings stories to life through
          creative animations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg?itok=1qzAKjaO&timestamp=1631290597"
            alt="Motion Design 1"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-xl font-bold">Motion 1</span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQEaKoty4iyXcQ/article-cover_image-shrink_600_2000/0/1657206551008?e=2147483647&v=beta&t=kTjnSQcHvSFnXmYvJQrfKtKc1eHdQO4rD8bkrVL2erA"
            alt="Motion Design 2"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-xl font-bold">Motion 2</span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://cdn.prod.website-files.com/646e2eaef4ea8c90fde6a519/64d32b9df6c651a09a133902_How%20to%20use%20motion%20graphics%20in%20your%20marketing.webp"
            alt="Motion Design 3"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-xl font-bold">Motion 3</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="inline-block px-6 py-2 text-white bg-black border border-black rounded-md hover:bg-white hover:text-black transition duration-300">
          See All
        </button>
      </div>
    </section>
  );
};

export default MotionDesign;
