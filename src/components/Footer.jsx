import React from "react";
import { FaCopyright } from "react-icons/fa6";


const Footer = () => {
  return (
    <main>
      <div className="footer-section">
        <div className="footer-content">
          <h3>Recipehub.com</h3>
          <p>
            RecipeHub is a place where you can please your soul and tummy with
            delicious food recipes of all cuisines. All-in-one culinary
            companion that brings a world of delightful recipes to your
            fingertips.And our service is absolutely free.So start exploring now
          </p>
          <p className="copyright">
            <FaCopyright />
            2024|Recipehub.com|All Rights Reserved</p>
        </div>
        <div className="footer-content">
          <h3>Contact Us</h3>
         <div className="p-coll">
          <p>Recipehub@gmail.com</p>
          <p>+977-9854154777</p>
          <p>Kumbeshwar-11,Patan</p>
         </div>
        </div>
        <div className="footer-content">
          <h3>Socials</h3>
          <div className="p-coll">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
