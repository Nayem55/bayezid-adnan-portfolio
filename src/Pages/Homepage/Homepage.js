// src/components/Home.js
import React from 'react';
import Banner from '../../Component/Banner';
import Header from '../../Component/Header';
import About from '../../Component/About';
import Photography from '../../Component/Photography';
import Videography from '../../Component/Videography';
import MotionDesign from '../../Component/MotionDesign';
import Clients from '../../Component/Clients';

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Photography/>
      <Videography/>
      <MotionDesign/>
      <Clients/>
    </div>
  );
};

export default Home;
