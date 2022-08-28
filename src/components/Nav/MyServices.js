import React from "react";
import "./MyServices.css";

const MyServices = () => {

  return (

    <div className="content-services" id="#myservices">
      <div className="content-services-title">What I do</div>
      <div className="content-content">
        <div className="content-services-subtitle">
          Software Development
          <h6>
            I design and build computer programs using React Js, aimed at
            delivering great experiences for users. I use various source
            debuggers and visual development environments to modify, write, and
            debug software for client applications, to create applications that
            boost access to servers and services. I enjoy creating highly
            interactive user interfaces and also optimizing web applications to
            make them highly scalable and lightweight leveraging tools such as
            ReactJS, Angular, Java and other related technologies.
          </h6>
        </div>
        <div className="content-services-subtitle2">
          Creative Direction
          <h6>
            As a creative director, I act as creative lead for brands, I create
            strategy, plan and deliver a vision with the support of my creative
            team, who think outside the box and produce their best work. I
            monitor the progress of design projects, communicating with clients
            and ensuring my team co-collaborates well. As a creative director i
            help brand execute projects from start to finish, this involves idea
            generation, team sourcing ,direction, post production and final
            result.
          </h6>
        </div>
      </div>
      <a href="./Images/okafor.pdf" download="OKAFOR'S RESUME" className="btn"> RESUME </a>
    </div>
    
  );
};

export default MyServices;
