import React from "react";
import img1 from "../assets/mypic.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={img1}
          alt="Founder"
        />

        <h2>Abhay Bhardwaj</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
