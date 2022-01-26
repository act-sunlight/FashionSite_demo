import React, { useState, useEffect } from "react";
import "../styles/style.css";
import logo from "../image/Sunlight//sunlightgradenlogo-w-480.png";

const Header = () => {
  return (
    <header className="header-wrapper">
      <a href="/">
        <img src={logo} alt="logo" className="header-logo" />
      </a>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/collection">Collection</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
