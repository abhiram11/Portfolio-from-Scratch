import React from "react";
import "./Header.css";
import { Link as LinkS } from "react-scroll";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <LinkS
          to="banner"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <p className="nav__button__left">
            Home (bg black rest white n purpleish)
          </p>
        </LinkS>
      </div>
      <div className="header__right">
        <LinkS
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <p className="nav__button">About</p>
        </LinkS>
        <LinkS
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <p className="nav__button">Experience</p>
        </LinkS>
        <LinkS
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <p className="nav__button">Projects</p>
        </LinkS>
        <LinkS
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <p className="nav__button">Contact</p>
        </LinkS>
      </div>
    </div>
  );
}

export default Header;
