import React from "react";

const clientsRow1 = [
  "https://flormarbd.com/static/media/Flormar-Logo-Png-1.d88c155633b56f195278.png",
  "https://luvit.com.bd/wp-content/uploads/2022/11/Luvit-final-Logo.svg",
  "https://clariss.com.bd/static/media/Clariss-Logo.63340c74383fffd01b19.webp",
  "https://luvit.com.bd/wp-content/uploads/2022/11/Armaf.jpg",
];

const clientsRow2 = [
  "https://flormarbd.com/static/media/Flormar-Logo-Png-1.d88c155633b56f195278.png",
  "https://luvit.com.bd/wp-content/uploads/2022/11/Luvit-final-Logo.svg",
  "https://luvit.com.bd/wp-content/uploads/2022/11/Armaf.jpg",
];

const clientsRow3 = [
  "https://luvit.com.bd/wp-content/uploads/2022/11/Armaf.jpg",
  "https://clariss.com.bd/static/media/Clariss-Logo.63340c74383fffd01b19.webp",
];

const Clients = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Our Valuable Clients Around The Globe
      </h2>

      <div className="flex flex-col items-center space-y-6">
        {/* First Row - Right to Left */}
        <div className="overflow-hidden relative w-[80%]">
          <div className="flex space-x-10 animate-marquee-rtl">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex space-x-10">
                {clientsRow1.map((logo, i) => (
                  <img key={i} src={logo} alt="Client Logo" className="h-10" />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Left to Right */}
        <div className="overflow-hidden relative w-[60%]">
          <div className="flex space-x-10 animate-marquee-ltr">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex space-x-10">
                {clientsRow2.map((logo, i) => (
                  <img key={i} src={logo} alt="Client Logo" className="h-10" />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Third Row - Right to Left */}
        <div className="overflow-hidden relative w-[40%]">
          <div className="flex space-x-10 animate-marquee-rtl">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex space-x-10">
                {clientsRow3.map((logo, i) => (
                  <img key={i} src={logo} alt="Client Logo" className="h-10" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes marquee-rtl {
            from { transform: translateX(50%); }
            to { transform: translateX(-100%); }
          }
          @keyframes marquee-ltr {
            from { transform: translateX(-50%); }
            to { transform: translateX(100%); }
          }
          
          .animate-marquee-rtl {
            display: flex;
            animation: marquee-rtl 20s linear infinite;
          }
          .animate-marquee-ltr {
            display: flex;
            animation: marquee-ltr 18s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Clients;
