import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

const Check = () => {
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadGraphModel('http://localhost:5000/model.json')
        setModel(loadedModel);
        console.log("model loaded successfully!")
      } catch (error) {
        console.error('Error loading the model:', error);
      }
    };

    loadModel();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handlePredict = async () => {
    if (!model) {
      console.error('Model not loaded yet.');
      return;
    }

    try {
      // Prepare the input data (an image in this case)
      const imageElement = document.createElement('img');
      imageElement.src = image;
      await imageElement.decode();

      const imageTensor = tf.browser.fromPixels(imageElement).toFloat();
      const processedImage = imageTensor.reshape([1, imageElement.height, imageElement.width, 3]);

      // Make predictions
      const predictions = model.predict(processedImage);
      const predictionsArray = await predictions.data();

      // Update the state with predictions
      setPredictions(predictionsArray);

      // Cleanup tensors to free memory
      imageTensor.dispose();
      processedImage.dispose();
      predictions.dispose();
    } catch (error) {
      console.error('Error making predictions:', error);
    }
  };

  return (
    <div>
      <input type="file" accept=".jpg" onChange={handleImageUpload} />
      {image && <img src={image} alt="Selected" width="200" />}
      <button onClick={handlePredict}>Predict</button>

      {predictions.length > 0 && (
        <div>
          <h3>Predictions:</h3>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>{`Class ${index}: ${prediction}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Check;
