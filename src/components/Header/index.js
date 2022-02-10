import React from "react";
import "./Header.css";
import { Link as LinkS } from "react-scroll";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">Abhiram</div>
      {/* <div className="header__center">Center</div> */}
      <div className="header__right">
        <LinkS
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <button className="nav__button">About</button>
        </LinkS>
        <LinkS
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <button className="nav__button">Projects</button>
        </LinkS>
        <LinkS
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <button className="nav__button">Experience</button>
        </LinkS>
        <LinkS
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <button className="nav__button">Contact</button>
        </LinkS>
      </div>
    </div>
  );
}

export default Header;
