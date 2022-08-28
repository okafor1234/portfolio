import React from "react";
import Navbar from "./components/Nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Nav/Home";
import About from "./components/Nav/About";
import MyServices from "./components/Nav/MyServices";
import { Fragment } from "react";
import ScrollButton from "./components/Nav/ScrollButton";
import './App.css';
import NewComment from "./components/NewComment/NewComment";

const App = () => {
  return (
    <><div className="background">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/myservices" element={<MyServices />} />
          <Route exact path="/contact" element={<NewComment />} />
        </Routes>
      </Router>
    </div>
    
    <Fragment>
      <ScrollButton />
    </Fragment>
    </>
  );
};

export default App;
