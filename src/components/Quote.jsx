import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



const Quote = () => {
  return (
    <div className="quote-sec">
      <p className="quote">
       
      <FaQuoteLeft className="quote-icon" />
        Cooking is all about people. Food is maybe the only universal thing
        that really has the power to bring everyone together. No matter what
        culture, everywhere around the world, people get together to eat. <FaQuoteRight className="quote-icon" />
      </p>
      <p className="author">-Guy fieri</p>
    </div>
  );
};

export default Quote;
