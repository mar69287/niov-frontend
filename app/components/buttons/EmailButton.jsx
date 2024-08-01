"use client";

import React from 'react'

const EmailButton = ({ className = '', children }) => {
  return (
    <button 
        className={`btn btn-active rounded-md ${className}`}
        onClick={() => window.location.href = 'mailto:support@example.com?subject=Request for Demo'}

    >
        {children}
    </button>
  )
}

export default EmailButton