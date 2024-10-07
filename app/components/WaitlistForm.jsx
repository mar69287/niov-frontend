'use client';
import { useState } from 'react';
import GradientBox from "./GradientBox";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const [status, setStatus] = useState(null);
  const [buttonText, setButtonText] = useState('Join Now');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setStatus(null); 

    try {
      // Send POST request to the API route
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);

        setButtonText('Submitted');
        setFormData({ fullName: '', email: '' });
        setTimeout(() => {
          setButtonText('Join Now');
        }, 4000);
      } else {
        console.error('Failed to submit waitlist');
        setStatus('Failed to submit waitlist. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <GradientBox className="bg-gradient-to-t rounded-md p-[1px] w-full ">
      <div className="rounded-md p-5 md:p-7 lg:p-10 w-full z-5 bg-white h-auto flex justify-center items-center flex-col gap-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-start font-bold leading-6 max-w-sm lg:max-w-xl">Join the Waitlist</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm md:text-base lg:text-lg mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border-b border-gray-400 focus:outline-none focus:border-black p-2 text-base"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm md:text-base lg:text-lg mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-b border-gray-400 focus:outline-none focus:border-black p-2 text-base"
              placeholder="mike@gmail.com"
              required
            />
          </div>

          {status && (
            <p className="text-red-500 text-sm md:text-base lg:text-lg mb-2">{status}</p>
          )}

          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all duration-200 mt-4"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </GradientBox>
  );
};

export default WaitlistForm;
