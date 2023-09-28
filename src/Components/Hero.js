import React, { useEffect, useState } from "react";
import Plant from "../Assets/plant2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

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
          <h2 className="text-title">
          Welcome to GreenMed Lens : Your Herbal Plant ID Tool
          </h2>
          <p className="text-descritpion">
          Our platform is designed to assist you in identifying various medicinal plants effortlessly through images. Whether you're a nature enthusiast, a researcher, or a health-conscious individual, our tool provides accurate plant identification, along with insightful information on their properties and potential uses. Join us on this botanical journey and explore the wonders of nature's pharmacy. Start identifying medicinal plants with just a click!
          </p>
          <a href="#services">
          <button
            className="text-appointment-btn"
            type="button"
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Start identifying
          </button></a>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>50+</p>
              <p>Medical Plants Data</p>
            </div>

            <div className="text-stats-container">
              <p>93%</p>
              <p>Software Accuracy Rate</p>
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
