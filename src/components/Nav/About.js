import React from "react";
import "./About.css";

const About = () => {
  return (
    
    <div className="content-about" id="#about">
      <div className="content-about-title">Who I am</div>
      <div className="content-about-subtitle">
        <h3>Front End Software Developer (React JS & Angular).</h3>
      </div>
      <div className="content-about-write-up">
        <p>
          I am Front End Software Developer. Specializing in React, I’ve amassed
          over a year of experience in software development. I’m passionate
          about translating project visions and objectives into reality,
          offering tangible results in line with client expectations.
          Discovering over time that I have a passion for the execution of
          creative ideas has greatly influenced my taste for design and has gone
          a long way in improving my overall results when it comes to software
          execution. I have decided to pay more attention to React because I
          believe It can help improve development time for engineering teams and
          producing results. ‍Over time I have worked with talented individuals
          across diverse teams on exciting projects where I made valuable
          contributions. When I’m not working as a Developer, you can find me
          creating content, directing projects, learning new languages and
          catching up with old friends. I currently live in Lagos, Nigeria but I
          am very much open to opportunities that’ll enable me explore and
          connect with diverse people from different backgrounds.
        </p>
      </div>
      <img src="./images/image2.jpeg" alt="" className="pic" />
    </div>
    
  );
};

export default About;
