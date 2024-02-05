import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { i18n } from "../i18n";
import {
  faCommentDots,
  faBars,
  faXmark,
  faLanguage
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../Assets/GreenMedLens.jpg";
import { useTranslation } from "react-i18next";
// Contains the value and text for the options

function Navbar() {
  
   const { t } = useTranslation();
const languages = [
  { value: "", text: t("language") },
  { value: "hi", text: 'Hindi' },
  { value: "gu", text: 'Gujarati' },
  { value: "en", text: "English" },
];

   const [lang, setLang] = useState("");

   // This function put query that helps to
  // change the language
  
  //  const handleChange = (e) => {
  //    setLang(e.target.value);
  //    let loc = "http://localhost:3000/";
  //    window.location.replace(loc + "?lng=" + e.target.value);
  //  };

  const handleChange = (e) => {
    setLang(e.target.value);

    // Get the current origin
    const currentOrigin = window.location.origin;

    // Specify the path to append to the current origin
    const newPath = "/"; // Adjust this path as needed

    // Construct the new URL
    const newURL = currentOrigin + newPath + "?lng=" + e.target.value;

    // Replace the current URL with the new URL
    window.location.replace(newURL);
  };

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
      <h1
        className="navbar-title"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "14px",
        }}
      >
        <Link to="/">
          <img style={{ width: "33px" }} src={Logo} alt="GreenMed Lens" />
        </Link>
        {t("nav1")}
      </h1>

      {/* Desktop */}
      <ul className="navbar-items" style={{ marginBottom: "0px" }}>
        <li>
          <a href="#home" className="navbar-links">
            {t("nav2")}
          </a>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            {t("nav3")}
          </a>
        </li>
        <li>
          <a href="#help" className="navbar-links">
            {t("nav4")}
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            {t("nav5")}
          </a>
        </li>
        <div
          className="select-dropdown mycss"
          value={lang}
          onChange={handleChange}
        >
          <FontAwesomeIcon icon={faLanguage} className="hamb-icon" />
          <select className="navbar-links">
            {languages.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
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
              {t("nav2")}
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              {t("nav3")}
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#help">
              {t("nav4")}
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              {t("nav5")}
            </a>
          </li>

          <div
            className="select-dropdown mycss"
            value={lang}
            onChange={handleChange}
            style={{ backgroundColor: "white" }}
          >
            <FontAwesomeIcon icon={faLanguage} className="hamb-icon" />
            <select
              style={{
                letterSpacing: ".8px",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              {languages.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </div>
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
