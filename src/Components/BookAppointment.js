import React from "react";
import Plant from "../Assets/Plant3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";
import { useTranslation } from "react-i18next";

function BookAppointment() {
  const navigate = useNavigate();
   const { t } = useTranslation();

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Plant} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>{t("book1")}</span>
        </h3>
        <p className="ba-description">{t("book2")}</p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          {t("book3")}
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          {t("book4")}
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          {t("book5")}
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          {t("book6")}
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
