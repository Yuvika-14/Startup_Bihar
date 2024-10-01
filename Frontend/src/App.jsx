import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeNav from './components/HomePage/HomeNav';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import AdminProfile from './components/Profile/AdminProfile'; // Import AdminProfile component
import UserProfile from './components/Profile/UserProfile'; // Import UserProfile component

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomeNav />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminprofile" element={<AdminProfile />} /> {/* Admin profile route */}
          <Route path="/userprofile" element={<UserProfile />} /> {/* User profile route */}
          <Route path="/all" element={<HomeNav />} />
          <Route path="/tech" element={<HomeNav />} />
          <Route path="/health" element={<HomeNav />} />
          <Route path="/finance" element={<HomeNav />} />
          <Route path="/education" element={<HomeNav />} />
          <Route path="/food" element={<HomeNav />} />
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;
