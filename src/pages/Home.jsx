import React from "react";
import Hero from "../components/Hero";
import Chefs from "../components/Chefs";
import Footer from "../components/Footer";

export const Home = () => {
  return (
  
      <div className="body">
        <Hero />
        <Chefs />
        <Footer/>
      </div>
  );
};
