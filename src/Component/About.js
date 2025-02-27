import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Text Section (Left) */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are passionate photographers, videographers, and motion designers who love capturing stories through visuals. With years of experience in creative media, we bring a unique approach to every project. Whether it's capturing stunning moments, creating beautiful videos, or designing captivating motion graphics, we are dedicated to delivering exceptional quality.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our work has been showcased across various platforms, and we pride ourselves on working closely with our clients to bring their vision to life. Let's create something extraordinary together.
          </p>
          <button  className="inline-block px-6 py-2 text-white bg-black border border-black rounded-md hover:bg-white hover:text-black transition duration-300">
            Get In Touch
          </button>
        </div>

        {/* Image Section (Right) */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src="https://media.istockphoto.com/id/1170916882/photo/woman-taking-picture-outdoors.jpg?s=612x612&w=0&k=20&c=C09Dk9DoDjVLR60Ztt-Jd9tyOdMo9p8WOIWUaVnfSrk=" 
            alt="About Us"
            className="w-full max-w-md rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
