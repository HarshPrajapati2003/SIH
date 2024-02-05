import React from "react";
import Plant from "../Assets/aboutPlant.avif";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Plant} alt="Plant" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>{t("about1")}</span>
        </h3>
        <p className="about-description">{t("about2")}</p>

        <h4 className="about-text-title" style={{ marginBottom: "13px" }}>
          {t("about3")}
        </h4>
        <p className="about-description" style={{ marginTop: "2px" }}>
          {t("about4")}
        </p>

        <h4 className="about-text-title">{t("about5")}</h4>

        <SolutionStep title={t("about6")} description={t("about7")} />

        <SolutionStep title={t("about8")} description={t("about9")} />

        <SolutionStep title={t("about10")} description={t("about11")} />
      </div>
    </div>
  );
}

export default About;
