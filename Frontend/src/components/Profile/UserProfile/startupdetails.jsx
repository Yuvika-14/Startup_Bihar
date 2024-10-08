import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Startupdetails = ({ founderimage, companyname, year }) => {
  const [foundername, setFounderName] = useState('');

  useEffect(() => {
    // Retrieve foundername from localStorage
    const storedFounderName = localStorage.getItem('user_id');
    if (storedFounderName) {
      setFounderName(storedFounderName);
    }
  }, []);

  return (
    <div className="flex items-center justify-start p-6 rounded-lg w-full max-w-5xl ml-[3%] mt-4">
      {/* Profile Section */}
      <div className="flex items-center space-x-6">
        <img
          alt="Founder Image"
          src={founderimage}
          className="w-24 h-24 rounded-full"
        />

        <div>
          <p className="text-lg text-gray-500">Welcome back,</p>
          <h1 className="text-2xl font-bold text-gray-800">{foundername || 'Loading...'}</h1>
          <p className="text-xl text-gray-600">Founder, {companyname}</p>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm text-gray-500">• Startup</span>
            <span className="text-sm text-gray-500">• Since {year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Startupdetails.defaultProps = {
  founderimage: undefined,
  companyname: undefined,
  year: undefined,
};

Startupdetails.propTypes = {
  founderimage: PropTypes.string,
  companyname: PropTypes.string,
  year: PropTypes.string,
};

export default Startupdetails;
