import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeNav from './components/HomePage/HomeNav';
import Login from './components/Login/Login';
import AdminProfile from './components/Profile/AdminProfile'; // Import AdminProfile component
import ProfileMain from './components/Profile/UserProfile/ProfileMain'; // Import ProfileMain
import LoginCopy from './components/Login/LoginCopy';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen tyle={{
          background: 'linear-gradient(90deg, rgb(241, 241, 241) 0%, rgb(211, 208, 227) 85%, rgb(224, 224, 224) 100%)',
        }}">
        <Routes>
          <Route path="/" element={<HomeNav />} />
          <Route path="/login" element={<LoginCopy />} />
          <Route path="/adminprofile" element={<AdminProfile />} /> {/* Admin profile route */}
          <Route path="/profilemain" element={<ProfileMain/>} />   {/* User profile route */}
          <Route path="/all" element={<HomeNav />} />
          <Route path="/tech" element={<HomeNav />} />
          <Route path="/health" element={<HomeNav />} />
          <Route path="/finance" element={<HomeNav />} />
          <Route path="/education" element={<HomeNav />} />
          <Route path="/food" element={<HomeNav />} />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
