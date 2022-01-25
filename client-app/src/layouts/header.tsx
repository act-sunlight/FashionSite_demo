import React, { useState, useEffect } from "react";
import "../styles/style.css";
import logo from "../image/Sunlight//sunlightgradenlogo-w-480.png";

const Header = () => {
  return (
    <header className="header-wrapper">
      <a href="index.html">
        <img src={logo} alt="logo" className="header-logo" />
      </a>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="collection.html">Collection</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
