import React from 'react';

const Videography = () => {
  return (
    <section className="py-20 px-4 lg:px-32 bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Videography</h2>
        <p className="text-lg text-gray-600 mb-8">Discover our creative videography, capturing every story with passion and precision.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <video src="https://www.w3schools.com/html/movie.mp4" controls className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"></video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-xl font-bold">Videography 1</span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <video src="https://www.w3schools.com/html/movie.mp4" controls className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"></video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-xl font-bold">Videography 2</span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <video src="https://www.w3schools.com/html/movie.mp4" controls className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"></video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-xl font-bold">Videography 3</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
      <button className="inline-block px-6 py-2 text-white bg-black border border-black rounded-md hover:bg-white hover:text-black transition duration-300">See All</button>
      </div>
    </section>
  );
};

export default Videography;
