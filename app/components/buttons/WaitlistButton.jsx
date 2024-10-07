"use client";

import React from 'react';

const WaitlistButton = ({ className = '', children, onClick }) => {
  return (
    <button 
      className={`btn btn-active rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WaitlistButton;
