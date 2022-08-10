import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="cover">
      <div className="intro-wel">JP.</div> 
      <div className="intro-explain">
        Hi, i am <br />
        <b>Okafor Jeffrey.</b>
        <picture>
          <img src="./Images/image.jpg" alt="" />
        </picture>
      </div>
    </div>
  );
};

export default Intro;
