import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../Assets/GreenMedLens.jpg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (

    <div className="navbar-section">
      <h1 className="navbar-title" style={{"display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "columnGap": "14px"}}>
        <Link to="/">
          <img style={{"width":'33px'}} src={Logo} alt="GreenMed Lens" />
        </Link>
        GreenMed Lens
      </h1>

      {/* Desktop */}
      <ul className="navbar-items" style={{marginBottom:"0px"}}>
        <li>
        <a href="#home" className="navbar-links">
            Home
            </a>
        </li>
        <li>
          <a href="#services" className="navbar-links">
          Services
          </a>
        </li>
        <li>
          <a href="#help" className="navbar-links">
            Help
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        {/* <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li> */}
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
          <a onClick={openNav} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#help">
              Help
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
         
          {/* <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li> */}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
