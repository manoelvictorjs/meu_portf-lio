import { Typography, TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";
import React from 'react';

interface TypewriterProps extends TypographyProps {
  text: string;
  delay: number;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay, 
  onComplete,
  ...typographyProps 
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <Typography {...typographyProps}>
      {currentText}
    </Typography>
  );
};

export default Typewriter;