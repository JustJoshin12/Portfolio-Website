import React, { useState, useEffect } from 'react';
import JavascriptAssessmentImg from "../../../images/javascriptAssessmentImg.png";
import CodeImg from "../../../images/codeImg.PNG";
import Certificate from "../../../images/certificate.png";

const images = [
    JavascriptAssessmentImg,
    CodeImg,
    Certificate,
];

const FadeThroughColorSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fadeIn');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(fadeState => fadeState === 'fadeIn' ? 'fadeOut' : 'fadeIn');

      if (fadeState === 'fadeOut') {
        setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
      }
    }, 2000); 

    return () => clearInterval(interval);
  }, [fadeState]);

  return (
    <div className="relative w-[80%] h-[600px] overflow-hidden ">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 w-full h-full bg-center bg-contain bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? (fadeState === 'fadeIn' ? 'opacity-100' : 'opacity-0') : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${fadeState === 'fadeIn' ? 'opacity-0' : 'opacity-50'}`}></div>
    </div>
  );
};

export default FadeThroughColorSlideshow;
