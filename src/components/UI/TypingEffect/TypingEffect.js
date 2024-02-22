import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text = "", typingSpeed = 150, styles = "" }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
      // Define a recursive function to update the displayed text
      const typeCharacter = (index) => {
        if (index < text.length) {
          setDisplayedText((prevText) => prevText + text.charAt(index));
          setTimeout(() => typeCharacter(index + 1), typingSpeed);
        }
      };
  
      // Initialize the typing effect
      typeCharacter(0);
  
      // Cleanup function to prevent memory leaks or unintended behavior
      // in case the component unmounts before finishing typing
      return () => clearTimeout();
    }, [text, typingSpeed]);
  return <span className={styles}>{displayedText}</span>;
};

export default TypingEffect;