import React, { useState } from 'react';
import Upload from '../components/Upload';
import Testbox from '../components/Testbox';
import './question.css'; // If you still want to keep the Mont-Regular font

import { useFormik } from 'formik';
const SecondTrance = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (file) => {
    setUploadedFile(file);
  };

  
  


  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      CAcertifiedutilizationcertificate
: '',
StatusReport:'',
UploadSelfdeclaredsecondtrancheexpenditureplanintheletterheadofentity:'',
BankStatement:'',
UploadExpenditureInvoice:'',
Uploadgeotaggedphotosofyourofficesunits:''








    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    < div className="min-h-screen bg-gray-50 flex flex-col items-center">
    {/* Header */}
    
        
      
    {/* Main Form Section */}
    <div className="flex w-full max-w-5xl mt-10 space-x-10">
      {/* Left Form */}
      <form className="w-1/2  p-8 rounded-lg">
        <h3 className="font-semibold text-xl mb-6">Application Form for First Tranche</h3>

        {/* Registration Number Field */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">C.A certified utilization certificate
          </label>
        
            <Upload className=" bg-blue-500  text-white rounded-2xl shadow-lg gap-1.4rem">
    Upload Button
  </Upload>
        </div>

        {/* Date of Incorporation Field */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Status Report
          </label>
         
           
           <Upload className=" bg-blue-500  text-white rounded-2xl shadow-lg gap-1.4rem">
            
    Upload Button

  </Upload>
        </div>

        {/* Business Entity Type Field */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Upload Self declared second tranche expenditure plan in the letter head of entity
          </label>
         
           
           <Upload className=" bg-blue-500  text-white rounded-2xl shadow-lg gap-1.4rem">
    Upload Button
  </Upload>
        </div>
    
        {/* Date of Incorporation Field */}
      
       
       

        {/* Business Entity Type Field */}
       
      </form>

      {/* Right Form (Optional, if needed) */}
      <form className="w-1/2  p-8  mt-11 rounded-lg">
        {/* Additional fields if necessary */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Bank statement (Highlight the fund received and expenditure made)
          </label>
          
         
          <Upload className=" bg-blue-500  text-white rounded-2xl shadow-lg gap-1.4rem">
    Upload Button
  </Upload>

        </div>
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Upload Expenditure Invoice
          </label>
      
          <Upload className=" bg-blue-500  text-white rounded-2xl shadow-lg gap-1.4rem">
    Upload Button
  </Upload>

        </div>
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Upload geo-tagged photos of your offices/ units

          </label>
          
          <Upload className=" bg-blue-500  text-white rounded-2xl shadow-lg gap-1.4rem">
    Upload Button
  </Upload>

       
         
        </div>

       

      </form>
    </div>

    {/* Upload Button */}
    
  </div>
  );
};
  





    export default SecondTrance;