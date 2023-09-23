import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
           GreenMed Lens
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to GreenMed Lens, your go-to platform for seamless identification and insightful information about medicinal plants. Our platform aims to offer accessible and personalized experiences to individuals seeking to explore the world of herbal medicine. By utilizing our platform, you agree to the terms outlined in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Respecting your privacy is of utmost importance to us. Our Privacy Policy details how we gather, utilize, and safeguard your personal and browsing information. Rest assured, we prioritize secure data handling, ensuring your information is handled with the highest level of confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        Using GreenMed Lens implies your agreement with our Terms of Service. These terms encompass guidelines for utilizing our platform, engaging with our features, and your responsibilities as a user. Familiarizing yourself with these terms is vital to guarantee a seamless experience for all users.
        </p>

        {/* <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Our platform connects you with expert doctors who provide online
          consultations. These consultations are not a replacement for in-person
          medical visits but serve as a convenient option for medical advice,
          prescriptions, and guidance. It's crucial to provide accurate and
          complete information to receive the best possible care.
        </p> */}

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        GreenMed Lens simplifies the identification of medicinal plants. Capture a plant leaf photo, upload the image in JPG format, and click on the "Start Identifying" button. Our platform employs advanced algorithms to accurately identify the plant and provide detailed information about its properties and potential uses. Please remember, for emergencies, seek immediate medical attention from your local healthcare facility.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
