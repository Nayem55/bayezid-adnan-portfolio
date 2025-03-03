import React from 'react';

const Photography = () => {
  return (
    <section className="py-20 px-4 lg:px-32 bg-gray-100">
      <div className="text-left mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Photography</h2>
        <p className="text-lg text-gray-600 mb-8">Explore some of our finest photography work. Capturing the beauty in every moment.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img src="https://www.nijolcreative.com/wp-content/uploads/2023/07/The-Best-Wedding-Photography-Bangladesh-by-Nijol-Creative-Photography.jpg" alt="Photography 1" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"/>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-xl font-bold">Weeding Photography</span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img src="https://images.squarespace-cdn.com/content/v1/5a1fac7e914e6b30d737146f/1683652897432-UKUTT07XCKS9NI9NLOXT/228A4750a.jpg" alt="Photography 2" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"/>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-xl font-bold">Product Shoot</span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img src="https://www.nijolcreative.com/wp-content/uploads/2023/07/Professional-Fashion-Photography-service-in-Bangladesh-by-Nijol-Creative.jpg" alt="Photography 3" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"/>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-xl font-bold">Model Shoot</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="inline-block px-6 py-2 text-white bg-black border border-black rounded-md hover:bg-white hover:text-black transition duration-300">See All</button>
      </div>
    </section>
  );
};

export default Photography;
