import React from 'react'
import Textbox from './Testbox';
import upload from  './Upload';
import { useFormik } from 'formik';
const StartupForms = () => {
  const formik = useFormik({
    initialValues: {
      CompanyName
      : '',
      RegistrationNumber
      : '',
      CompanyCertificate:'',
      CompanyAddress:'',
      Pincode:'',
      IFSCCode:'',
      CurrentAccountNumber:'',
      CurrentAccountHolderName:'',
      BranchName:'',
      BranchAddress:'',
      Uploadcancelcheque:'',
      PanNumber:'',
      GSTNumber:'',







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
                <div className=" mb-6">
                    <Textbox
                        label="Company Name
    "
                        name="CompanyName
    "
                        onChange={formik.handleChange}
                        value={formik.values.CompanyName
                        }
                    />
                    {formik.errors.CompanyName
    && <div className="text-red-600">{formik.errors.CompanyName}</div>}
                </div>
             <div className = "mb-6">
                        <Textbox
                            label="Registration Number/CIN
        "
                            name="RegistrationNumber
        "
                            onChange={formik.handleChange}
                            value={formik.values.RegistrationNumber
                            }
                        />
                        {formik.errors.RegistrationNumber
        && <div className="text-red-600">{formik.errors.RegistrationNumber
        }</div>}
        </div>
            <div className = "mb-6">
                <Upload
                    label="Company Certificate
"
                    name="CompanyCertificate"
                    onChange={formik.handleChange}
                    value={formik.values.CompanyCertificate}
                />
            </div>
              
            <div clasName ="mb-6">
                <Textbox
                    label="Company Address"
                    name="CompanyAddress"
                    onChange={formik.handleChange}
                    value={formik.values.CompanyAddress}
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
            <div className = "mb-6">
                <Textbox
                    label="Brief on the Business Concept
"
                    name="BriefontheBusinessConcept
r"
                    onChange={formik.handleChange}
                    value={formik.values.BriefontheBusinessConcept
                    }
                />
                {formik.errors.BriefontheBusinessConcept && <div className="text-red-600">{formik.errors.BriefontheBusinessConcept}</div>}
            </div>
        </form>
        <form className="w-1/2  p-8  mt-11 rounded-lg">
            <div className = "mb-6">
                <Textbox
                    label="Mobile No"
                    name="MobileNo"
                    onChange={formik.handleChange}
                    value={formik.values.MobileNo}
                />
                  {formik.errors.MobileNo && <div className="text-red-600">{formik.errors.MobileNo}</div>}
            </div>
            <div classNmae = "mb-6">
                <Upload label = "Company Logo"
                name="CompanyLogo"
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
            <div classNmae ="mb-6">
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
<div className = "mb-6">
<Upload label = "Upload DIPP Certificate"
                name="UploadDIPPCertificate
"
                onChange={formik.handleChange}
                value={formik.values.UploadDIPPCertificate
                }
                />
</div>
<div className ="mb-6">
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
  
  

export default StartupForms;
