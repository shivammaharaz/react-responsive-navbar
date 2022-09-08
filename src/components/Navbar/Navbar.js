import React, { memo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {FaBars,FaTimes} from "react-icons/fa";

 function Navbar() {
  const [isMobile,setIsMobile]=useState(false);
  console.log('nav')
  return (
    <nav className="navbar">
      <h3 className="logo">LOGO</h3>
      <ul className={isMobile ? "nav-links-mobile":"nav-links"}
      onClick={()=>
        setIsMobile(false)
      }>
        <li>
          <Link to="/" className="home">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="about">
            About
          </Link>
        </li>

        <li>
          <Link to="/product" className="product">
            Product
          </Link>
        </li>

        <li>
          <Link to="/testemonial" className="testemonials">
            Testemonials
          </Link>
        </li>

        <li>
          <Link to="/contact" className="contact">
            Contact
          </Link>
        </li>
      </ul>
      <button className="mobile-menu-icons"
      onClick={()=>{setIsMobile(!isMobile);}}
      >
        {isMobile?<FaTimes />: <FaBars/> }
      </button>
    </nav>
  );
}
export default memo(Navbar);
