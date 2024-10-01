import React, { useState } from 'react';

const Upload = ({ label, onFileChange }) => {
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);  // Set the file name in the textbox
      onFileChange(file);      // Pass the file to the parent component if needed
    } else {
      setFileName('Select a file');  // Fallback if no file is chosen
    }
  };
  const handleRemoveFile = () => {
    setFileName('');
    onFileChange(null); // Inform parent component that file is removed
  };


  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center space-x-4">
        {/* Textbox to show the file name */}
        <input
          type="text"
          value={fileName}
          readOnly
          className="w-1/2 py-2 px-4 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* File input button */}
        <label className="py-2 px-4   text-white bg-blue-700 rounded-full font-semibold hover:bg-blue-500 cursor-pointer">
          Choose File
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
           
        </label>
        
      </div>
    </div>
  );
};

export default Upload;
