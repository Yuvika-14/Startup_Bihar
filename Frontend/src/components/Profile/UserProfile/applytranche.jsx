import React from 'react';
import PropTypes from 'prop-types';

const Applytranche = ({ text, text1, imageSrc, imageAlt }) => {
  return (
    <div className="max-w-lg flex relative justify-between items-start mt-6 p-2 rounded-xl bg-gradient-to-r from-blue-900 to-purple-400 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
      <div className="flex flex-col items-start">
        <span>
          {text ? (
            <span className="text-white text-sm font-normal">{text}</span>
          ) : null}
        </span>
        <div className="w-6 h-1 mt-2 mb-2 bg-white rounded"></div>
        <span>
          {text1 ? (
            <span className="text-white text-xs font-normal leading-relaxed">
              {text1}
            </span>
          ) : null}
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

Applytranche.defaultProps = {
  imageSrc: '/external/apply-200h-200h.png',
  text: undefined,
  text1: undefined,
  imageAlt: 'image',
};

Applytranche.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default Applytranche;
