import React from "react";
import Hero2  from './Hero2';
import Quote from "./Quote";

const Hero = () => {
  return (
    <main>
      <div className="body-section">
        <div className="text-content">
          <h1>What Are We About</h1>
          <p>
            RecipeHub is a place where you can please your soul and tummy with
            delicious food recipes of all cuisines. All-in-one culinary
            companion that brings a world of delightful recipes to your
            fingertips.And our service is absolutely free.So start exploring now
          </p>
          <button className="btn">Explore now</button>
        </div>
        <div className="img-content">
          <img src="/images/img_1.jpg" alt="image" />
          <img src="/images/img_2.jpg" alt="image" />
          <img src="/images/img_3.jpg" alt="image" />
          <img src="/images/img_4.jpg" alt="image" />
          <img src="/images/img_5.jpg" alt="image" />
          <img src="/images/img_6.jpg" alt="image" />
          <img src="/images/img_7.jpg" alt="image" />
          <img src="/images/img_8.jpg" alt="image" />
          <img src="/images/img_9.jpg" alt="image" />
          <img src="/images/img_6.jpg" alt="image" />
          <img src="/images/img_4.jpg" alt="image" />
          <img src="/images/img_2.jpg" alt="image" />
        </div>
      </div>
      <Hero2/>
      <Quote/>
    </main>
  );
};

export default Hero;
