import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";
import { useTranslation } from "react-i18next";

function LegalDocs() {
   const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">{t("legaldoc1")}</Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">{t("legaldoc2")}</p>
        <p className="legal-description">{t("legaldoc3")}</p>

        <p className="legal-title">{t("legaldoc4")}</p>
        <p className="legal-description">{t("legaldoc5")}</p>

        <p className="legal-title">{t("legaldoc6")}</p>
        <p className="legal-description">{t("legaldoc7")}</p>

        {/* <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Our platform connects you with expert doctors who provide online
          consultations. These consultations are not a replacement for in-person
          medical visits but serve as a convenient option for medical advice,
          prescriptions, and guidance. It's crucial to provide accurate and
          complete information to receive the best possible care.
        </p> */}

        <p className="legal-title">{t("legaldoc8")}</p>
        <p className="legal-description">{t("legaldoc9")}</p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 GreenMed Lens. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
