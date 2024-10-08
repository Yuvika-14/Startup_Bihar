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

    if (!values.Gender) {
        errors.Gender = 'Required';
    }

    if (!values.BriefontheBusinessConcept) {
        errors.BriefontheBusinessConcept = 'Required';
    }

    if (!values.FounderAadharNumber) {
        errors.FounderAadharNumber = 'Required';
    } else if (values.FounderAadharNumber.length !== 10) {
        errors.FounderAadharNumber = 'Must be 10 digits';
    }

    if (!values.Sector) {
        errors.Sector = 'Required';
    }

    if (!values.CofounderAadharNumber) {
        errors.CofounderAadharNumber = 'Required';
    } else if (values.CofounderAadharNumber.length !== 10) {
        errors.CofounderAadharNumber = 'Must be 10 digits';
    }

    if (!values.FounderName) {
        errors.FounderName = 'Required';
    } else if (values.FounderName.length > 15) {
        errors.FounderName = 'Must be 15 characters or less';
    }

    if (!values.Category) {
        errors.Category = 'Required';
    }

    if (!values.MobileNo) {
        errors.MobileNo = 'Required';
    } else if (values.MobileNo.length !== 10) {
        errors.MobileNo = 'Must be 10 digits';
    }

    if (!values.CofounderName) {
        errors.CofounderName = 'Required';
    } else if (values.CofounderName.length > 20) {
        errors.CofounderName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const Startupform = () => {
    const formik = useFormik({
        initialValues: {
            RegistrationNo: '',
            FounderName: '',
            FounderAadharNumber: '',
            BriefontheBusinessConcept: '',
            Sector: '',
            CompanyLogo: '',
            WebsiteLink: '',
            DPIITRecognitionNumber: '',
            UploadDIPPCertificate: '',
            CofounderName: '',
            CofounderAadharNumber: '',
            MobileNo: '',
            email: '',
            Category: '',
            Gender: '',
        },
        validate,
        onSubmit: values => {
            alert("Form submitted successfully!");
            console.log(JSON.stringify(values, null, 2));
        },
    });

    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileChange = file => {
        setUploadedFile(file);
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8 min-h-screen flex flex-col items-center">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                ></div>
            </div>

            <div className="flex w-full max-w-5xl mt-10 space-x-10 ">
                <form onSubmit={formik.handleSubmit} className="w-1/2 p-8 rounded-lg">
                    <h3 className="font-semibold text-xl mb-6">Application Form for Startups</h3>

                    {/* Registration No Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Registration No"
                            name="RegistrationNo"
                            onChange={formik.handleChange}
                            value={formik.values.RegistrationNo}
                        />
                        {formik.errors.RegistrationNo && <div className="text-red-600">{formik.errors.RegistrationNo}</div>}
                    </div>

                    {/* Founder Name Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Founder Name"
                            name="FounderName"
                            onChange={formik.handleChange}
                            value={formik.values.FounderName}
                        />
                        {formik.errors.FounderName && <div className="text-red-600">{formik.errors.FounderName}</div>}
                    </div>

                    {/* Co-Funder Name Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Co-Founder Name"
                            name="CofounderName"
                            onChange={formik.handleChange}
                            value={formik.values.CofounderName}
                        />
                        {formik.errors.CofounderName && <div className="text-red-600">{formik.errors.CofounderName}</div>}
                    </div>

                    {/* Founder Aadhar Number Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Founder Aadhar Number"
                            name="FounderAadharNumber"
                            onChange={formik.handleChange}
                            value={formik.values.FounderAadharNumber}
                        />
                        {formik.errors.FounderAadharNumber && <div className="text-red-600">{formik.errors.FounderAadharNumber}</div>}
                    </div>

                    {/* Co-Founder Aadhar Number Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Co-Funder Aadhar Number"
                            name="CofunderAadharNumber"
                            onChange={formik.handleChange}
                            value={formik.values.CofounderAadharNumber}
                        />
                        {formik.errors.CofounderAadharNumber && <div className="text-red-600">{formik.errors.CofounderAadharNumber}</div>}
                    </div>

                    {/* Brief on Business Concept Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Brief on the Business Concept"
                            name="BriefontheBusinessConcept"
                            onChange={formik.handleChange}
                            value={formik.values.BriefontheBusinessConcept}
                        />
                        {formik.errors.BriefontheBusinessConcept && <div className="text-red-600">{formik.errors.BriefontheBusinessConcept}</div>}
                    </div>

                    {/* Gender Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        <select
                            name="Gender"
                            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={formik.handleChange}
                            value={formik.values.Gender}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                        </select>
                        {formik.errors.Gender && <div className="text-red-600">{formik.errors.Gender}</div>}
                    </div>
                </form>

                {/* Right Side Form */}
                <form className="w-1/2 p-8 mt-11 rounded-lg">
                    {/* Mobile No Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Mobile No"
                            name="MobileNo"
                            onChange={formik.handleChange}
                            value={formik.values.MobileNo}
                        />
                        {formik.errors.MobileNo && <div className="text-red-600">{formik.errors.MobileNo}</div>}
                    </div>

                    {/* Email Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email && <div className="text-red-600">{formik.errors.email}</div>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo</label>
                        <Upload name="  CompanyLogo" onFileChange={handleFileChange} />
                    </div>


                    {/* Sector Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Sector"
                            name="Sector"
                            onChange={formik.handleChange}
                            value={formik.values.Sector}
                        />
                        {formik.errors.Sector && <div className="text-red-600">{formik.errors.Sector}</div>}
                    </div>

                    {/* Category Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Category"
                            name="Category"
                            onChange={formik.handleChange}
                            value={formik.values.Category}
                        />
                        {formik.errors.Category && <div className="text-red-600">{formik.errors.Category}</div>}
                    </div>

                    {/* Website Link Field */}
                    <div className="mb-6">
                        <Textbox
                            label="Website Link"
                            name="WebsiteLink"
                            onChange={formik.handleChange}
                            value={formik.values.WebsiteLink}
                        />
                        {formik.errors.WebsiteLink && <div className="text-red-600">{formik.errors.WebsiteLink}</div>}
                    </div>

                    {/* Upload Logo */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload DIPP Certificate</label>
                        <Upload name=" UploadDIPPCertificate" onFileChange={handleFileChange} />
                    </div>

                    <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Upload</button>
  </div>

                </form>
            </div>
        </div>
    );
};

export default Startupform;