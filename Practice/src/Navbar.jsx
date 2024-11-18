import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Logo</div>
      <ul className="nav-items">
        <li>
          <a href="#home" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="link">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="link">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
