import React from "react";

const clients = [
  "https://flormarbd.com/static/media/Flormar-Logo-Png-1.d88c155633b56f195278.png",
  "https://luvit.com.bd/wp-content/uploads/2022/11/Luvit-final-Logo.svg",
  "https://clariss.com.bd/static/media/Clariss-Logo.63340c74383fffd01b19.webp",
  "https://luvit.com.bd/wp-content/uploads/2022/11/Armaf.jpg",
];

const Clients = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Our Trusted Clients
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          We are proud to work with some of the best brands worldwide.
        </p>
      </div>

      {/* Clients Logo Slider */}
      <div className="relative w-full overflow-hidden w-[90vw] mx-auto">
        <div className="flex space-x-10 animate-marquee">
          {[...clients, ...clients].map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <div className="bg-white shadow-lg rounded-xl px-6 py-4 flex items-center justify-center h-24 w-40 sm:h-28 sm:w-48 md:h-32 md:w-56 transition-transform transform hover:scale-105">
                <img
                  src={logo}
                  alt="Client Logo"
                  className="h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 12s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Clients;
