import React from "react";
import Plant from "../Assets/aboutPlant.avif";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Plant} alt="Plant" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to GreenMed Lens, your premier destination for effortless identification and comprehensive knowledge of medicinal plants. Our mission is to bridge the gap between nature and technology, making herbal plant identification accessible and insightful for everyone. Join us in unraveling the wonders of herbal medicine and fostering a deeper connection with the plant kingdom.
        </p>

        <h4 className="about-text-title" style={{marginBottom: '13px'}}>Our Vision</h4>
        <p className="about-description" style={{marginTop:'2px'}}>
        At GreenMed Lens, we envision a world where understanding and utilizing medicinal plants is as easy as a click. We strive to empower individuals, from enthusiasts to researchers, with a tool that simplifies the identification of medicinal plants and enriches their understanding of natural remedies.
        </p>

        <h4 className="about-text-title">Our Commitment</h4>

        <SolutionStep
          title="Accurate Identification"
          description="We are committed to providing precise and reliable plant identification through cutting-edge machine learning algorithms and image processing techniques."
        />

        <SolutionStep
          title="Educational Insights"
          description="We believe in educating and enlightening our users about the properties, benefits, and uses of various medicinal plants, fostering a sense of knowledge and appreciation for nature's offerings."
        />

        <SolutionStep
          title="User-Friendly Experience"
          description="GreenMed Lens is designed with you in mind. We prioritize a seamless, intuitive user experience, ensuring that identifying and learning about medicinal plants is easy and enjoyable."
        />
      </div>
    </div>
  );
}

export default About;
