import React from "react";
import Plant from "../Assets/Plant3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Plant} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose GreenMed Lens?</span>
        </h3>
        <p className="ba-description">
        Discover the compelling reasons to choose GreenMed Lens for all your medicinal plant identification needs. Experience accuracy, educational insights, and a user-friendly interface, making your exploration of medicinal plants a seamless and enlightening journey. Join us in uncovering the wonders of herbal medicine and enhancing your understanding of the plant world.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Precision and Reliability
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> In-depth Educational Resources
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Intuitive User Interface
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Diverse Plant Database
        </p>

        {/* <button
          className="text-appointment-btn"
          type="button"
          
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button> */}
      </div>
    </div>
  );
}

export default BookAppointment;
