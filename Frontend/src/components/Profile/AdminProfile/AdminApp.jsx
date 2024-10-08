import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import StarterAdminForm from "./starterAdminForm";
import SeedAdminForm from "./seedAdminForm";
import SecondTrancheAdminForm from "./secondTrancheAdminForm";
import Navbar from "./Navbar/Navbar";

const AdminApp = () => {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/starter" element={<StarterAdminForm />} />

            <Route path="/seedFund" element={<SeedAdminForm />} />

            <Route path="/secondTranche" element={<SecondTrancheAdminForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminApp;
