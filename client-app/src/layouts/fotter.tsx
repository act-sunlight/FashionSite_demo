import React, { useState, useEffect } from "react";
import "../styles/style.css";
import logo from "../image/Sunlight/logo-w-240.png";

const Fotter = () => {
  return (
    <footer>
      <img
        src={ logo }
        alt="logo"
        className="fotter-logo"
      />
      <p>Copyright © 2022 Sunlight</p>
    </footer>
  );
};

export default Fotter;