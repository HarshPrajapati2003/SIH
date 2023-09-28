import React, { useState } from "react";
import "../Styles/Services.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash, faSync } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SolutionStep from "./SolutionStep";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Services = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [Loadnig, setLoading] = useState(false);
  const [ShowInfo, setShowInfo] = useState(false);
  const [ShowInfoLoading, setShowInfoLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type === "image/jpeg") {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please upload a valid JPG image.");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];

    if (droppedFile && droppedFile.type === "image/jpeg") {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(droppedFile);
    } else {
      alert("Please upload a valid JPG image.");
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreviewUrl(null);
    setShowInfo(false)
    setLoading(false)
    setShowInfoLoading(false)
    setPrediction(null)
  };

  const handleUpload = async () => {
    setLoading(true);
    
    setSelectedImage(URL.createObjectURL(file));

    // Send the image to the server for prediction
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
      console.log(response.data);
      setPrediction(response.data);
      setLoading(false)
      setShowInfoLoading(true)
      setTimeout(()=>{
      setShowInfo(true)
      setShowInfoLoading(false)
      },5000)      
    } catch (error) {
      console.error("Error predicting image:", error);
    }
  };
  return (
    <div className="ba-section" id="services">
      {/* <div className="ba-image-content">
        <img src={Plant} alt="Doctor Group" className="ba-image1" />
      </div> */}

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Upload Photo and Start Identifying!</span>
        </h3>

        <div className="file-upload">
          <div
            className="drop-area"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              id="file-input"
              type="file"
              accept="image/jpeg"
              onChange={handleFileChange}
            />
            <p>Drag & drop a JPG image here or click to Choose file.</p>
          </div>

          {file && (
            <div className="file-info">
              <div className="preview">
                <img src={previewUrl} alt="Preview" />
              </div>
              <p>Selected File: {file.name}</p>
              <div className="button-container">
                <button className="btn btn-success" onClick={handleUpload}>
                  <FontAwesomeIcon icon={faUpload} /> Upload
                </button>
                <button className="btn btn-danger" onClick={handleRemoveImage}>
                  <FontAwesomeIcon icon={faTrash} /> Remove Image
                </button>
              </div>
            </div>
          )}
        </div>
        {/* <div style={{backgroundColor:"red", height:"300px"}}>{prediction && <h1>{prediction}</h1>}</div> */}
        {prediction && (
          <p className="ba-checks ba-check-first">
            <div class="text-center ba-checks">
              <button
                className="btn border-primary btn-center ba-checks about-text-sTitle"
                type="button" style={{padding: "10px 20px",fontSize: "18px"}}
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#1E8FFD", marginRight: "0.8rem" }}
                />
                Plant Name : {prediction}
              </button>
            </div>
          </p>
        )}

        {Loadnig && (
          <div class="text-center">
            <button
              className="btn btn-primary btn-center"
              type="button"
              disabled
            >
              <span
                className="spinner-grow spinner-grow-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              identifying...
            </button>
          </div>
        )}

        {
          ShowInfoLoading && <div class="text-center"><button class="btn btn-white" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
  Collecting more information...
</button></div>
        }

        {ShowInfo && <><SolutionStep
          title="Scientific Name:"
          description="Ocimum tenuiflorum or Ocimum sanctum"
        />

        <SolutionStep title="Common Names" description="Tulsi, Holy Basil" />

        <SolutionStep
          title="Description"
          description="Tulsi is an aromatic plant belonging to the Lamiaceae (mint) family.It has a strong, pleasant aroma and a distinct taste."
        />
        <SolutionStep
          title="Varieties:"
          description="There are three primary varieties of Tulsi:Rama Tulsi (green leaves), Krishna Tulsi (purple leaves), Vana Tulsi (wild variety)"
        />
        <SolutionStep
          title="Uses:"
          description="Widely used in traditional medicine for its medicinal properties.Used in cooking, especially in Indian cuisine.Considered sacred in Hinduism and often grown around temples and homes."
        />
        <SolutionStep
          title="Medicinal Applications:"
          description="Used in Ayurvedic medicine for its healing properties.Treats various ailments such as colds, coughs, fever, respiratory disorders, and more."
        />
        <SolutionStep
          title="Health Benefits:"
          description="Has anti-inflammatory and antioxidant properties.Known to boost the immune system and help fight infections.Used to manage stress and promote relaxation."
        /></>}

        {/* <button
          className="text-appointment-btn"
          type="button"
          
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button> */}
      </div>
    </div>
  );
};

export default Services;
