import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import BottomBar from "../Component/BottomBar";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const Main = () => {
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Main;
