import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Startupdetails = (props) => {
  return (
    <div className="flex items-center justify-start p-6 rounded-lg  w-full max-w-5xl ml-0 mt-4">
    {/* Profile Section */}
    <div className="flex items-center space-x-6">
      <img
        alt="Founder Image"
        src="https://cdn.brandfetch.io/massart.edu/fallback/transparent/theme/dark/h/512/w/512/icon?t=1719560097892"
        className="w-24 h-24 rounded-full"
      />

      <div>
        <p className="text-lg text-gray-500">Welcome back,</p>
        <h1 className="text-2xl font-bold text-gray-800">Siddhant Ranjan</h1>
        <p className="text-xl text-gray-600">Founder, InnovateX.com</p>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-sm text-gray-500">• Startup</span>
          <span className="text-sm text-gray-500">• Since 2023</span>
        </div>
      </div>
    </div>

    {/* Status Icons (Optional, if you need additional icons) */}

  </div>
  );
}

Startupdetails.defaultProps = {
  text4: undefined,
  text1: undefined,
  text3: undefined,
  text2: undefined,
  text: undefined,
};

Startupdetails.propTypes = {
  text4: PropTypes.element,
  text1: PropTypes.element,
  text3: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
};

export default Startupdetails;
