import React, { useEffect, useState } from "react";
import Plant from "../Assets/plant2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import { t } from "i18next";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline"></p>
          <h2 className="text-title">{t("hero1")}</h2>
          <p className="text-descritpion">{t("hero2")}</p>
          <a href="#services">
            <button className="text-appointment-btn" type="button">
              <FontAwesomeIcon icon={faCalendarCheck} /> {t("hero3")}
            </button>
          </a>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>{t("hero4")}</p>
              <p>{t("hero5")}</p>
            </div>

            <div className="text-stats-container">
              <p>{t("hero6")}</p>
              <p>{t("hero7")}</p>
            </div>

            {/* <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div> */}
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Plant} alt="Plant" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
