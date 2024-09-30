import React, { useState } from 'react';
import Textbox from './Testbox'; // Ensure this is correctly imported
import Upload from './Upload'; // Assuming you have an Upload component
import { useFormik } from 'formik';

// Validation function
const validate = values => {
    const errors = {};

    if (!values.RegistrationNo) {
        errors.RegistrationNo = 'Required';
    }
    if (!values.DPIITRecognitionNumber) {
        errors.  DPIITRecognitionNumber = 'Required';
    }
    if(!values.Breifonthebusinessconcept){
        errors.Breifonthebusinessconcept = 'Required';
    }
    if (!values.FounderAadharNumber) {
        errors.FounderAadharNumber = 'Required';
    } else if (values.FounderAadharNumber.length !== 10) {
        errors.FounderAadharNumber = 'Must be 10 digits';
    }
    if (!values.WebsiteLink) {
        errors.WebsiteLink= 'Required';
    }
        errors.FounderAadharNumber = 'Required';
    if (!values.CofunderAadharNumber) {
        errors.CofunderAadharNumber = 'Required';
    } else if (values.CofunderAadharNumber.length !== 10) {
        errors.CofunderAadharNumber = 'Must be 10 digits';
    }
    if (!values.FounderName) {
        errors.FounderName = 'Required';
    } else if (values.FounderName.length > 15) {
        errors.FounderName = 'Must be 15 characters or less';
    }
    if (!values.MobileNo) {
        errors.MobileNo = 'Required';
    } else if (values.MobileNo.length > 10) {
        errors.FounderName = 'Must be 10 digit';
    }
    if (!values.CofunderName) {
        errors.CofunderName = 'Required';
    } else if (values.CofunderName.length > 20) {
        errors.CofunderName = 'Must be 20 characters or less';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const SeedFund = () => {
    const formik = useFormik({
        initialValues: {
            RegistrationNo: '',
            FounderName: '',
            FounderAadharNumber: '',
            Breifonthebusinessconcept:'',
            CompanyLogo:'',
            WebsiteLink:'',
            DPIITRecognitionNumber:'',
            UploadDIPPCertificate:'',

            CofunderName: '',
            MobileNo: '',
            email: '',
            // Other fields can be added as needed
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileChange = (file) => {
        setUploadedFile(file);
    };

    return (
        <div div className="min-h-screen bg-gray-50 flex flex-col items-center">
        
            <div className="flex w-full max-w-5xl mt-10 space-x-10">
                <form onSubmit={formik.handleSubmit} className="w-1/2  p-8 rounded-lg">
                <h3 className="font-semibold text-xl mb-6">Application Form for Startups</h3>

                          <div className = "mb-6">
                             <Textbox
                            label="Registration No"
                            name="RegistrationNo"
                            onChange={formik.handleChange}
                            value={formik.values.RegistrationNo}
                           />
                          {formik.errors.RegistrationNo && <div className="text-red-600">{formik.errors.RegistrationNo}</div>}
                        </div>  

                           
                        {/* Date of Incorporation Field */}
                        <div classNmae = "mb-6">
                        <Textbox
                                        label="Founder Name"
                                        name="FounderName"
                                        onChange={formik.handleChange}
                                        value={formik.values.FounderName}
                                    />
                                    {formik.errors.FounderName && <div className="text-red-600">{formik.errors.FounderName}</div>}
                        </div>
                        <div classNmae = "mb-6">
                                    <Textbox
                                        label="Co-Funder Name"
                                        name="CofunderName"
                                        onChange={formik.handleChange}
                                        value={formik.values.CofunderName}
                        />
                                    {formik.errors.CofunderName && <div className="text-red-600">{formik.errors.CofunderName}</div>}
                        </div>
                        <div classNmae = "mb-6">
                                    <Textbox
                                        label="Founder Aadhar Number"
                                        name="FounderAadharNumber"
                                        onChange={formik.handleChange}
                                        value={formik.values.FounderAadharNumber}
                                    />
                                    {formik.errors.FounderAadharNumber && <div className="text-red-600">{formik.errors.FounderAadharNumber}</div>}
                         </div>
                         <div classNmae = "mb-6">
                                    <Textbox
                                        label="Co-Funder Aadhar Number"
                                        name="CofunderAadharNumber"
                                        onChange={formik.handleChange}
                                        value={formik.values.CofunderAadharNumber}
                                    />
                                    {formik.errors.CofunderAadharNumber && <div className="text-red-600">{formik.errors.CofunderAadharNumber}</div>}
                        </div>
                        <div classNmae = "mb-6">
                                   <Textbox
                                        label="Brief on the Business Concept
                "
                                        name="BriefontheBusinessConcept
                r"
                                        onChange={formik.handleChange}
                                        value={formik.values.BriefontheBusinessConcept}
                                        
                                    />
                      
                                    {formik.errors.BriefontheBusinessConcept && <div className="text-red-600">{formik.errors.BriefontheBusinessConcept}</div>}
                        </div>
                                 

         </form>
         <form className="w-1/2  p-8  mt-11 rounded-lg">
           <div classNmae = "mb-6">
           <Textbox
                                        label="Mobile No"
                                        name="MobileNo"
                                        onChange={formik.handleChange}
                                        value={formik.values.MobileNo}
                                    />
                                    {formik.errors.MobileNo && <div className="text-red-600">{formik.errors.MobileNo}</div>}
           </div>
           <div className = "mb-6">
            <Upload label = "Company Logo"
                                    name="CompanyLogo"
                                    onFileChange={handleFileChange}
                                    onChange={formik.handleChange}
                                    value={formik.values.CompanyLogo}
            />

           </div>
           <div className = "mb-6">
           <Textbox
                                        label="Website Link
                "
                                        name="WebsiteLink
                r"
                                        onChange={formik.handleChange}
                                        value={formik.values.WebsiteLink
                                        }
                                    />
                                    {formik.errors.WebsiteLink && <div className="text-red-600">{formik.errors.WebsiteLink}</div>}
           </div>
                                
            <div className = "mb-6">
            <Textbox
                                        label="DPIIT Recognition Number
                "
                                        name="DPIITRecognitionNumber
                "
                                        onChange={formik.handleChange}
                                        value={formik.values.DPIITRecognitionNumber
                                        }
                                    />
                                    {formik.errors.DPIITRecognitionNumber
                && <div className="text-red-600">{formik.errors.DPIITRecognitionNumber
                }</div>}                         
            </div>           
                                    
           <div className="mb-6">
            <Upload label = "Upload DIPP Certificate"
                        name="UploadDIPPCertificate
    "
                        onChange={formik.handleChange}
                        value={formik.values.UploadDIPPCertificate
                        }
                        />
            </div>
            <div className="mb-6">
           
                <Textbox
                            label="Email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email && <div className="text-red-600">{formik.errors.email}</div>}
                </div>
         </form>
        </div>
   
      
   </div>
      
                 



                 
        
    );
};

export default SeedFund;
