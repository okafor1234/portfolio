import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="content">
        <div className="text-head">
          <h1>Hi, I'm<br /></h1>
          <h1>Jeffrey Okafor.</h1>
        </div>
        <div className="text">
            <h4>Front-End Developer and Database Manager.</h4>
           <h4>(Angular, React JS and SQL)</h4>
        </div>
      <img src="./images/image.jpg" alt="" />
    </section>
  );
};

export default Home;
