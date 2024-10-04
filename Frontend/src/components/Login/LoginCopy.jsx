import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // Import toast for notifications
import loginvid from '../../assets/loginvid.mp4'; // Video import


const LoginCopy = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Input validation for empty fields
    if (!id || !password) {
      setErrorMessage('Please enter both ID and Password');
      toast.error('Please enter both ID and Password');
      return;
    }

    if (isAdminLogin) {
      // Admin login
      if (id === 'admin' && password === 'admin') {
        toast.success('Admin login successful!');
        navigate('/adminprofile'); // Redirect to Admin Profile page
      } else {
        setErrorMessage('Invalid Admin ID or Password');
        toast.error('Invalid Admin ID or Password');
      }
    } else {
      // User login
      if (id === 'user' && password === 'user') {
        toast.success('User login successful!');
        navigate('/profilemain'); // Redirect to User Profile page
      } else {
        setErrorMessage('Invalid User ID or Password');
        toast.error('Invalid User ID or Password');
      }
    }
  };

  const toggleLoginMode = () => {
    setIsAdminLogin(!isAdminLogin);
    setErrorMessage('');
    setId('');
    setPassword('');
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="relative z-10 bg-white p-6 rounded-lg shadow-md login-container w-full max-w-xs mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-xs">
          <img className="mx-auto h-10 w-auto" src="https://startup.bihar.gov.in/static/media/new_logo.efdd49a20c5fb7fe0b73.png" alt="Startup Bihar" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        {/* Radio Buttons for User/Admin Selection */}
        <fieldset className="mt-6">
          <legend className="sr-only">Login Type</legend>
          <div className="flex justify-center gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="login-type"
                className="hidden"
                checked={!isAdminLogin}
                onChange={() => setIsAdminLogin(false)}
              />
              <span className={`px-4 py-2 rounded-full ${!isAdminLogin ? 'border-2 border-blue-500' : 'border'}`}>Startup</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="login-type"
                className="hidden"
                checked={isAdminLogin}
                onChange={() => setIsAdminLogin(true)}
              />
              <span className={`px-4 py-2 rounded-full ${isAdminLogin ? 'border-2 border-blue-500' : 'border'}`}>Admin</span>
            </label>
          </div>
        </fieldset>

        {errorMessage && (
          <p className="mt-2 text-red-600 text-center">{errorMessage}</p>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-900">
              User ID
            </label>
            <div className="mt-2">
              <input
                id="userId"
                name="userId"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Not a Member Section */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Only for Selected Startup.
          </a>
        </p>
      </div>

      {/* Video Element (Optional) */}
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full blur-sm">
        <source src={loginvid} type="video/mp4" />
      </video>
    </div>
  );
};

export default LoginCopy;
