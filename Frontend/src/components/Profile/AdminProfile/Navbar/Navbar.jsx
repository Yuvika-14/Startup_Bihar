import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineDocumentText, HiOutlineCash } from "react-icons/hi"; // Importing icons

const AdminNavbar = () => {
  return (
    <nav className="w-64 h-screen bg-gray-100 p-6 font-montserrat font-medium text-gray-700">
      <h2 className="text-lg mb-6 text-gray-900">Navigation</h2>
      <ul className="space-y-4">
        <li className="border-b border-gray-300 pb-2">
          <Link
            to="/AdminSeedFundForm"
            className="flex items-center space-x-3 hover:text-blue-500"
          >
            <HiOutlineUser className="w-6 h-6" /> {/* Starter Profile Icon */}
            <span>Starter Profile</span>
          </Link>
        </li>
        <li className="border-b border-gray-300 pb-2">
          <Link
            to="/AdminForm"
            className="flex items-center space-x-3 hover:text-blue-500"
          >
            <HiOutlineDocumentText className="w-6 h-6" /> {/* Seed Fund Icon */}
            <span>Seed Fund</span>
          </Link>
        </li>
        <li className="border-b border-gray-300 pb-2">
          <Link
            to="/AdminSecondTrancheForm"
            className="flex items-center space-x-3 hover:text-blue-500"
          >
            <HiOutlineCash className="w-6 h-6" /> {/* Second Tranche Icon */}
            <span>Second Tranche</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
