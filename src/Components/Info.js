import React from "react";
import InformationCard from "./InformationCard";
import { faPlay, faImage,faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="help">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>How to use GreenMed Lens?</span>
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
          title="Capture a Plant Leaf Photo"
          description="Begin by capturing a clear and focused photo of the plant leaf you wish to identify. Ensure the leaf is well-lit and the entire leaf is visible in the frame. Use your smartphone or camera to take the photo, making sure it's sharp and in focus."
          icon={faMobileScreen}
        />

        <InformationCard
          title="Upload the image"
          description="Once you have the perfect photo, save it in JPG format on your device. JPG format is preferred for efficient image processing. Navigate to the GreenMed Lens website and locate the  button. Click on Start Identifying it to select the JPG image file from your device and upload it to our platform."
          icon={faImage}
        />

        <InformationCard
          title="Start Identifying"
          description="Simply click on the Start Identifying button to initiate the plant identification process. Our advanced algorithms will analyze the uploaded JPG image and provide accurate identification results along with essential plant information."
          icon={faPlay}
        />
      </div>
    </div>
  );
}

export default Info;
