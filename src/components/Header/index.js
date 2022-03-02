import React from "react";
import "./Header.css";
import { Link as LinkS } from "react-scroll";
// import { Link } from "react-router-dom";

// navigation not working as expected....some errors happening and takes action after scrolling a bit below

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
          // offset={-46}
        >
          <p className="nav__button">
            Home
            {/* P.S.: Desktop only, not optimized for Mobile yet */}
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
          offset={-46}
        >
          <p className="nav__button">About</p>
        </LinkS>
        <LinkS
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-46}
        >
          <p className="nav__button">Experience</p>
        </LinkS>
        <LinkS
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-46}
        >
          <p className="nav__button">Projects</p>
        </LinkS>
        <LinkS
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-46}
        >
          <p className="nav__button">Contact</p>
        </LinkS>
      </div>
    </div>
  );
}

export default Header;
