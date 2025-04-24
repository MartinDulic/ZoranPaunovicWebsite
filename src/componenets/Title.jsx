import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Title = ({ text, className = "", centerText = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  
  const [borderShown, setBorderShown] = useState(false);
  const [textShown, setTextShown] = useState(false);

  useEffect(() => {
    if (inView) {
      // First animate the border
      setBorderShown(true);
      // Then animate the text after a short delay
      const timer = setTimeout(() => setTextShown(true), 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div className={`${className}`} ref={ref}>
      <div 
        className={`${centerText ? "lg:text-center lg:px-12 pr-16 lg:pr-16" : "pr-16"} relative text-4xl text-secondary font-bold mx-4 pb-2 w-fit`}
      >
        {/* Border element with animation */}
        <div 
          className={`absolute bottom-0 left-0 h-1 bg-primary origin-left ${borderShown ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-500 ease-out`}
          style={{ width: 'calc(100%)' }} // Adjust width to match your design
        />
        
        {/* Text element with animation */}
        <h2 
          className={`inline-block ${textShown ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'} transition-all duration-500 ease-out delay-500`}
        >
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Title;