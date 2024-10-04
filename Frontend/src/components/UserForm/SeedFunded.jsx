import React,{useState} from 'react'
import Textbox from './Testbox';
import Upload from  './Upload';
import Datepicker from './Datepicker';
import { useFormik } from 'formik';
const validate = values => {
    const errors = {};

    if (!values.CompanyName
    ) {
        errors.CompanyName
        = 'Required';
    }
    if (!values.RegistrationNumber
    ) {
        errors.RegistrationNumber
        = 'Required';
    }
    if (!values.DateofIncorporation
    ) {
        errors.DateofIncorporation
        = 'Required';
    }
    if(!values.BusinessEntityType
        ){
        errors.BusinessEntityType
        = 'Required';
    }
    if (!values.CompanyCertificate
    ) {
        errors.CompanyCertificate = 'Required';
    } 
    if (!values.ROCDistrict) {
        errors.OCDistrict= 'Required';
    }R
    if(!values.CompanyAddress
    ){
        errors.CompanyAddress
        = 'Required';
    }
    if(!values.Pincode
    ){
        errors.Pincode
        = 'Required';
    }
        
    if (!values.BankName
    ) {
        errors.BankName
        = 'Required';
    } 
    if (!values.IFSCCode
    ) {
        errors.IFSCCode
        = 'Required';
    } 
    if (!values.CurrentAccountNumber
    ) {
        errors.CurrentAccountNumber
        = 'Required';
    }
    if (!values.CurrentAccountHolderName
    ) {
        errors.CurrentAccountHolderName
        = 'Required';
    } 
    if (!values.BranchName
    ) {
        errors.BranchName
        = 'Required';
    } 
    if (!values.BranchAddress
    ) {
        errors.BranchAddress
        = 'Required';
    } 

    return errors;
};

const SeedFunded = () => {
  const formik = useFormik({
    initialValues: {
      CompanyName
      : '',
      RegistrationNumber
      : '',
      DateofIncorporation:'',
      BusinessEntityType:'',
      ROCDistrict:'',



      CompanyCertificate:'',
      CompanyAddress:'',
      Pincode:'',
      BankName:'',


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
    <div div className="min-h-screen  flex flex-col items-center">
        
    <div className="flex w-full max-w-5xl mt-10 space-x-10">
        <form onSubmit={formik.handleSubmit} className="w-1/2  p-8 rounded-lg">
        <h3 className="font-semibold text-xl mb-6">Application Form for Startups</h3>
                <div className=" mb-6">
                    <Textbox
                        label="Company Name"
                        name="CompanyName"
                        onChange={formik.handleChange}
                        value={formik.values.CompanyName
                        }
                    />
                    {formik.errors.CompanyName
    && <div className="text-red-600">{formik.errors.CompanyName}</div>}
                </div>
             <div className = "mb-6">
                        <Textbox
                            label="Registration Number/CIN"
                            name="RegistrationNumber"
                            onChange={formik.handleChange}
                            value={formik.values.RegistrationNumber
                            }
                        />
                        {formik.errors.RegistrationNumber
        && <div className="text-red-600">{formik.errors.RegistrationNumber
        }</div>}
        </div>
        <div className=" mb-6">
                    <Datepicker
                        label="Date of Incorporation"
                        name="DateofIncorporation"
                        onChange={formik.handleChange}
                        value={formik.values.DateofIncorporation
                        }
                    />
                    {formik.errors.DateofIncorporation
    && <div className="text-red-600">{formik.errors.DateofIncorporation}</div>}
                </div>
                <div className="mb-6">
           <label className="block text-sm font-medium text-gray-700 mb-2">Buisness Entity Type</label>
            <select 
              
                
                name="BuisnessEntityType"
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                onChange={formik.handleChange}
                value={formik.values.BusinessEntityType} // Ensure this matches the field you're handling
            >
                <option value="Sector1">Sector1</option>
                <option value="Sector2">Sector2</option>
                <option value="Sector3">Sector3</option>
                <option value="Sector4">Sector4</option>
            </select>

            {formik.errors.BusinessEntityType && <div className="text-red-600">{formik.errors.BusinessEntityType}</div>} 
           </div>
        
           <div className="mb-6">
           <label className="block text-sm font-medium text-gray-700 mb-2">ROC District</label>
            <select 
              
                
                name="ROCDistrict"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                onChange={formik.handleChange}
                value={formik.values.ROCDistrict} // Ensure this matches the field you're handling
            >
                <option value="District1">District1</option>
                <option value="Sector2">Sector2</option>
                <option value="Sector3">Sector3</option>
                <option value="Sector4">Sector4</option>
            </select>

            {formik.errors.ROCDistrict&& <div className="text-red-600">{formik.errors.ROCDistrict}</div>} 
           </div>
            <div className = "mb-6">
                <Upload
                    label="Company Certificate"
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
                {formik.errors.CompanyAddress && <div className="text-red-600">{formik.errors.FounderAadharNumber}</div>}
            </div>
            <div clasName ="mb-6">
                <Textbox
                    label="Pincode"
                    name="Pincode"
                    onChange={formik.handleChange}
                    value={formik.values.Pincode}
                />
                {formik.errors.Pincode&& <div className="text-red-600">{formik.errors.Pincode}</div>}
            </div>
            <div className="mb-6">
           <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
            <select 
              
                
                name="BankName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                onChange={formik.handleChange}
                value={formik.values.BankName} // Ensure this matches the field you're handling
            >
                <option value="Bank1">Bank1</option>
                <option value="Sector2">Sector2</option>
                <option value="Sector3">Sector3</option>
                <option value="Sector4">Sector4</option>
            </select>

            {formik.errors.BankName && <div className="text-red-600">{formik.errors.BankName}</div>} 
           </div>
           
           
        </form>
        <form className="w-1/2  p-8  mt-11 rounded-lg">
        <div className = "mb-6">
                <Textbox label = "IFSC Code"
                name="IFSCCode"
                onChange={formik.handleChange}
                value={formik.values.IFSCCode}
                />
            </div>
            <div classNmae = "mb-6">
                <Textbox label = "Branch Name"
                name="BranchName"
                onChange={formik.handleChange}
                value={formik.values.BranchName}
                />
            </div>
            <div className = "mb-6">
                  <Textbox
                    label="Branch Address"
                    name="BranchAddress"
                    onChange={formik.handleChange}
                    value={formik.values.BranchAddress
                    }
                />
                {formik.errors.BranchAddress&& <div className="text-red-600">{formik.errors.CompanyAddress}</div>}
            </div>
            <div classNmae ="mb-6">
                <Textbox
                    label="Current Account Number"
                    name="CurrentAccountNumber"
                    onChange={formik.handleChange}
                    value={formik.values.CurrentAccountNumber

                    }
                />
                {formik.errors.CurrentAccountNumber

            
&& <div className="text-red-600">{formik.errors.CurrentAccountNumber

}</div>}
</div>
<div classNmae ="mb-6">
                <Textbox
                    label="Current Account Holder Number"
                    name="CurrentAccountHolderNumber"
                    onChange={formik.handleChange}
                    value={formik.values.CurrentAccountHolderNumber

                    }
                />
                {formik.errors.CurrentAccountHolderNumber

            
&& <div className="text-red-600">{formik.errors.CurrentAccountHolderNumber

}</div>}
</div>

<div className = "mb-6">
<Upload label = "Upload cancel cheque/Passbook First Page(Where Account Detail mention Clearly"
 
                name="Uploadcancelcheque"
                onChange={formik.handleChange}
                value={formik.values.Uploadcancelcheque
                }
                />
</div>
<div className ="mb-6">
                <Textbox
                    label="Pan Number"
                    name="PanNumber"
                    onChange={formik.handleChange}
                    value={formik.values.PanNumber}
                />
                {formik.errors.PanNumber && <div className="text-red-600">{formik.errors.PanNumber}</div>}
</div>
<div className ="mb-6">
                <Textbox
                    label="GST Number"
                    name="GSTNumber"
                    onChange={formik.handleChange}
                    value={formik.values.GSTNumber}
                />
                {formik.errors.GSTNumber && <div className="text-red-600">{formik.errors.GSTNumber}</div>}
</div>      
           
        
    </form>
    
    </div>
    
    <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Upload</button>
  </div>

</div>
);
};
  
  

export default SeedFunded;