import React from 'react';

const GradientBox = ({ className = '', children }) => {
  return (
    <div className={`from-[#FF7D9C] via-[#00FF7F] to-[#FFF2AF] ${className}`}>
      {children}
    </div>
  );
};

export default GradientBox;
