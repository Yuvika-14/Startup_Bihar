import React from 'react';
import PropTypes from 'prop-types';

const GrievanceContainer = ({ text, text1, imageSrc, imageAlt }) => {
  return (
    <div className="cursor-pointer max-w-lg flex relative justify-between items-start mt-6 p-2 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex flex-col items-start">
        <span className="text-white text-sm">
          {text}
        </span>
        <div className="w-6 h-1 mt-2 mb-2 bg-white rounded"></div>
        <span className="text-white text-xs">
          {text1}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center self-start w-18 h-18">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="w-[70px] h-[52px] object-cover"
        />
      </div>
    </div>
  );
};

GrievanceContainer.propTypes = {
  text: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default GrievanceContainer;
