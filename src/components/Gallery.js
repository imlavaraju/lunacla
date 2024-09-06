import React, { useState } from "react";
import "./Rectangle.png";
const predefinedImages = [
  "./Rectangle.png",
  "./Rectangle.png",
  "./Rectangle.png",
];

const Gallery = () => {
  const [images, setImages] = useState(predefinedImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    console.log(1, file);
    if (file) {
      const reader = new FileReader();
      console.log(2, reader);
      reader.onloadend = () => {
        setImages([...images, reader.result]);
        console.log(3, images);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const widgetStyle = {
    //width: "720px",
    //height: "330px",
    gap: "0px",
    opacity: "1",
    borderRadius: "24px",
    backgroundColor: "#363C43",
  };

  const imageStyle = {
    width: "190px",
    height: "179px",
    borderRadius: "24px",
    opacity: "1",
  };

  return (
    <div style={widgetStyle} className="flex-grow p-4 shadow-lg">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-300 text-lg">Gallery</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-600"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-600"
          >
            &gt;
          </button>
          <button
            onClick={() => document.getElementById("file-input").click()}
            className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600"
          >
            Add More
          </button>
        </div>
      </div>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleAddImage}
        className="hidden"
      />
      <div className="relative flex  h-full rounded-lg justify-center items-center">
        {images.length === 0 ? (
          <p className="text-gray-400">No images added yet.</p>
        ) : (
          <div className="flex">
            {images.slice(currentIndex, currentIndex + 3).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery image ${currentIndex + idx + 1}`}
                style={imageStyle}
                className="mr-4"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
