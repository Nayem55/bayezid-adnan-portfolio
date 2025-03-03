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
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-48 sm:h-[400px]"
            title="Motion Design 1"
            allowFullScreen
          ></iframe>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            className="w-full h-48 sm:h-[400px]"
            title="Motion Design 2"
            allowFullScreen
          ></iframe>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/mN4qEw2OzF8"
            className="w-full h-48 sm:h-[400px]"
            title="Motion Design 3"
            allowFullScreen
          ></iframe>
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
