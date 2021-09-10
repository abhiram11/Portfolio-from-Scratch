import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">Abhiram</div>
      <div className="header__center">Center</div>
      <div className="header__right">
        <button>About</button>
        <button>Project</button>
        <button>Experience</button>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Header;
