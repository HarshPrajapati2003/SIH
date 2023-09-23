import React, { useState } from 'react'
import "../Styles/Services.css"
import '../index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const Services = () => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
  
      if (selectedFile && selectedFile.type === 'image/jpeg') {
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        alert('Please upload a valid JPG image.');
      }
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      const droppedFile = event.dataTransfer.files[0];
  
      if (droppedFile && droppedFile.type === 'image/jpeg') {
        setFile(droppedFile);
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(droppedFile);
      } else {
        alert('Please upload a valid JPG image.');
      }
    };
  
    const handleRemoveImage = () => {
      setFile(null);
      setPreviewUrl(null);
    };
  

  const handleUpload=async()=>{
    const fileInput = document.getElementById('file-input');
    const formData = new FormData();
    formData.append('image', fileInput.files[0]);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('Predictions:', result.predictions);
    } catch (error) {
      console.error('Error making prediction:', error);
  }
}
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
        {/* <p className="ba-checks ba-check-first">
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
        </p> */}

        {/* <button
          className="text-appointment-btn"
          type="button"
          
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button> */}
      </div>
    </div>

  )
}

export default Services
