import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className="navbar">
        <h1 className="logo">JP.</h1>
        <ul className={Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <a href="#about" smooth>
            <li>About</li>
          </a>
          <Link to="#myservices" smooth>
            <li>MyServices</li>
          </Link>
          <Link to="#contact" smooth>
            <li>Contact</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
    </nav>

    
  );
};

export default Navbar;
