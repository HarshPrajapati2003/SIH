import React from "react";
import InformationCard from "./InformationCard";
import { faPlay, faImage,faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import { useTranslation } from "react-i18next";

function Info() {
  const { t } = useTranslation();
  return (
    <div className="info-section" id="help">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>{t("info1")}</span>
        </h3>
        {/* <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p> */}
      </div>

      <div className="info-cards-content">
        <InformationCard
          title={t("info2")}
          description={t("info3")}
          icon={faMobileScreen}
        />

        <InformationCard
          title={t("info4")}
          description={t("info5")}
          icon={faImage}
        />

        <InformationCard
          title={t("info6")}
          description={t("info7")}
          icon={faPlay}
        />
      </div>
    </div>
  );
}

export default Info;
