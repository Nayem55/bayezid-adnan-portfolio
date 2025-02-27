import React from 'react';

const Banner = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-semibold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4">Building amazing things with MERN Stack</p>
      </div>
    </section>
  );
};

export default Banner;
