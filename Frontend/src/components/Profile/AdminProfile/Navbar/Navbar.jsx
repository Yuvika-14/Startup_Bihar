import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-64 h-screen bg-gray-100 p-4 font-montserrat font-bold">
      <h2>Form</h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/starter"
            className="text-blue-500 hover:text-blue-700 block"
          >
            Starter Profile
          </Link>
        </li>
        <li>
          <Link
            to="/seedFund"
            className="text-blue-500 hover:text-blue-700 block"
          >
            Seed Fund
          </Link>
        </li>
        <li>
          <Link
            to="/secondTranche"
            className="text-blue-500 hover:text-blue-700 block"
          >
            Second Tranche
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
