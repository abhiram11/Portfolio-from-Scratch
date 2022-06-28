import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link as LinkS } from "react-scroll";
// import { Link } from "react-router-dom";

// navigation not working as expected....some errors happening and takes action after scrolling a bit below

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll"); //remove listener redundancy, not called 20 times, etc...
    };
  }, []);

  // className={`nav ${show && "nav_black"}`

  return (
    <div className={`header ${show && "header__bg"}`}>
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
      <div className="header__center" />
      <div className="header__right">
        <LinkS
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-100}
        >
          <p className="nav__button">About</p>
        </LinkS>
        <LinkS
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-100}
        >
          <p className="nav__button">Experience</p>
        </LinkS>
        <LinkS
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-100}
        >
          <p className="nav__button">Projects</p>
        </LinkS>
        <LinkS
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-100}
        >
          <p className="nav__button">Contact</p>
        </LinkS>
      </div>
    </div>
  );
}

export default Header;

// function Nav() {
//   const [show, handleShow] = useState([]);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll"); //remove listener redundancy, not called 20 times, etc...
//     };
//   }, []);

//   return (
//     <div className={`nav ${show && "nav_black"}`}>
//       <img
//         className="nav_logo"
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
//         alt="Netflix Logo"
//       />

//       <img
//         className="nav_avatar"
//         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
//         alt="Avatar"
//       ></img>
//     </div>
//   );
