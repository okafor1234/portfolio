import React from "react";
import Navbar from "./components/Nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Nav/Home";
import About from "./components/Nav/About";
import MyServices from "./components/Nav/MyServices";
import Contact from "./components/Nav/Contact";
import Footer from './components/Nav/Footer';
import { Fragment } from "react";
import ScrollButton from "./components/Nav/ScrollButton";
import './App.css';

const App = () => {
  return (
    <><div className="background">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/" element={<About />}></Route>
          <Route exact path="/" element={<MyServices />}></Route>
          <Route exact path="/" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
    <About />
    <MyServices />
    <Contact />
    <Footer />
    <Fragment>
      <ScrollButton />
    </Fragment>
    </>
  );
};

export default App;
