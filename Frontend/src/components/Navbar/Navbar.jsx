import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent mx-10">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <div className="navbar-login">
        <Link to="/login">
          <button className="bg-[#780206] text-white py-3 px-6 rounded-full hover:bg-[#f7585d]">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
