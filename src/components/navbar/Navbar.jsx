import React from "react";
import "./Navbar.css";
import {RiMenu5Fill} from "react-icons/ri"

const Navbar = () => {
  const [navLinkOpen, navLinkToggle] = React.useState(false)

  return (
    
      <nav>
        <div className="logo">
          <a href="/" className="puff-in-center">
            <h5>PaintZoneOne</h5>
          </a>
        </div>
        <ul className={navLinkOpen ? "navlinks active" : "navlinks"}>
          <li className="link">
            <a href="About" className="fade-in">
              Paint Projects
            </a>
          </li>
          <li className="link">
            <a href="Projects" className="fade-in">
              Recent Works
            </a>
          </li>
          <li className="link">
            <a href="Contact" className="fade-in">
              Estimates
            </a>
          </li>
          <li className="link">
            <a href="Contact" className="fade-in">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="hamburger-toggle" onClick={()=>navLinkToggle(!navLinkOpen)}>
        <RiMenu5Fill/>
        </div>
      </nav>
    
  );
};

export default Navbar;
