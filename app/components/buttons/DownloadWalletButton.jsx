"use client";

const DownloadWalletButton = ({ className = '', children }) => {
  return (
    <button 
        className={`btn btn-active rounded-md ${className}`}
    >
        {children}
    </button>
  )
}

export default DownloadWalletButton