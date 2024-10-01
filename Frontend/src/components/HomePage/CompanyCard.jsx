import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ logo, fundingStatus, name, founder, startupSince, Category }) => {
  const dotColor = fundingStatus === 'Seed Funded' ? 'bg-green-500' : 'bg-red-500';
  
  return (
    // Wrap the card in the Link component to enable navigation
    <Link to="/Profile">
      <div className="flex items-center rounded-xl p-4 mb-0 bg-gradient-to-r from-[#780206] to-[#061161] shadow-lg relative w-full max-w-lg transform transition-transform duration-300 hover:scale-105 focus:scale-105 cursor-pointer">
        
        {/* Top right corner arrow icon */}
        <div className="absolute top-2 right-2">
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>

        {/* Left-side circular profile image */}
        <img
          src={logo} // founder's image
          alt={name}
          className="h-24 w-24 rounded-full border-4 border-white mr-4"
        />

        {/* Text section */}
        <div className="flex-1 text-white">
          {/* Funding status */}
          <span className="flex items-center text-xs mb-1">
            <span className={`h-3 w-3 rounded-full mr-1 ${dotColor}`}></span> {/* Dot for funding status */}
            {fundingStatus}
          </span>

          {/* Founder Name and Company */}
          <h3 className="text-lg font-bold">{founder}</h3>
          <p className="text-lg">Founder, {name}</p>

          {/* Startup Info */}
          <div className="flex space-x-2 mt-3">
            <span className="flex items-center text-xs">
              <span className="h-3 w-3 bg-teal-400 rounded-full mr-1"></span> Startup
            </span>
            <span className="flex items-center text-xs">
              <span className="h-3 w-3 bg-yellow-400 rounded-full mr-1"></span> Since {startupSince}
            </span>
            <span className="flex items-center text-xs">
              <span className="h-3 w-3 bg-gray-400 rounded-full mr-1 "></span> {Category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
