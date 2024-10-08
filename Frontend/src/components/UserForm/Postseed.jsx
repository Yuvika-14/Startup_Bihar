import React, { useState } from 'react';
import Textbox from './Testbox'; // Assuming correct component path
import Upload from './Upload';
import { useFormik } from 'formik';
const validate = (values) => {
    const errors = {};

    if (!values.Startupstage) {
        errors.Startupstage = 'Required';
    }
    if (!values.Knowledge) {
        errors.Knowledge = 'Required';
    }
    if (!values.Balancesheet) {
        errors.Balancesheet = 'Required';
    }
    if (!values.GSTReturn) {
        errors.GSTReturn = 'Required';
    }
    if (!values.Fundraised) {
        errors.Fundraised = 'Required';
    }
    if (!values.Employment) {
        errors.Employment = 'Required';
    }
    if (!values.ProjectReport) {
        errors.ProjectReport = 'Required';
    }

    return errors;
};
const PostSeed = () => {
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            Startupstage: '',
            Knowledge: '',
            Balancesheet: null, // Set initial value to null for file inputs
            GSTReturn: null,    // Set initial value to null for file inputs
            Fundraised: '',
            Employment: '',
            ProjectReport: '',
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitted(true); // Set submitted to true upon successful form submission
        },
    });

    const handleFileChange = (event, fieldName) => {
        const file = event.currentTarget.files[0]; // Get the selected file
        formik.setFieldValue(fieldName, file); // Use setFieldValue to set the file in Formik
    };

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="flex w-full max-w-5xl mt-10 space-x-10">
                <form onSubmit={formik.handleSubmit} className="w-1/2 p-8 rounded-lg">
                    <h3 className="font-semibold text-xl mb-6">Post Seed Fund</h3>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current stage of your startup</label>
                        <select
                            name="Startupstage"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={formik.handleChange}
                            value={formik.values.Startupstage}
                        >
                            <option value="">Select Stage</option>
                            <option value="Ideation">Ideation</option>
                            <option value="Prototype">Prototype</option>
                            <option value="Validation">Validation</option>
                            <option value="MVP">MVP</option>
                            <option value="Scaling">Scaling</option>
                        </select>
                        {formik.errors.Startupstage && <div className="text-red-600">{formik.errors.Startupstage}</div>}
                    </div>

                    <div className="mb-6">
                        <Textbox
                            label="Do the founders/Key employees possess technical knowledge/necessary skills to operate and scale the business?"
                            name="Knowledge"
                            onChange={formik.handleChange}
                            value={formik.values.Knowledge}
                        />
                        {formik.errors.Knowledge && <div className="text-red-600">{formik.errors.Knowledge}</div>}
                    </div>

                    <div className="mb-6">
                        <Upload
                            label="Upload Audited Balance Sheet of Previous Financial Year"
                            name="Balancesheet"
                            onChange={(event) => handleFileChange(event, 'Balancesheet')}
                        />
                        {formik.errors.Balancesheet && <div className="text-red-600">{formik.errors.Balancesheet}</div>}
                    </div>

                    <div className="mb-6">
                        <Upload
                            label="Upload GST return of the current Financial Year"
                            name="GSTReturn"
                            onChange={(event) => handleFileChange(event, 'GSTReturn')}
                        />
                        {formik.errors.GSTReturn && <div className="text-red-600">{formik.errors.GSTReturn}</div>}
                    </div>
                </form>

                <form className="w-1/2 p-8 mt-12 rounded-lg" onSubmit={formik.handleSubmit}>
                    <div className="mb-6">
                        <Textbox
                            label="Has the startup raised any fund/investment from recognized SEBI CAT 1 AIF, angel investors, or venture capitalists?"
                            name="Fundraised"
                            onChange={formik.handleChange}
                            value={formik.values.Fundraised}
                        />
                        {formik.errors.Fundraised && <div className="text-red-600">{formik.errors.Fundraised}</div>}
                    </div>

                    <div className="mb-6">
                        <Textbox
                            label="Has the startup given employment to 5-10 employees working continuously for at least 6 months?"
                            name="Employment"
                            onChange={formik.handleChange}
                            value={formik.values.Employment}
                        />
                        {formik.errors.Employment && <div className="text-red-600">{formik.errors.Employment}</div>}
                    </div>

                    <div className="mb-6">
                        <Textbox
                            label="Submit the Project Report with future plans, milestones, and timeframes"
                            name="ProjectReport"
                            onChange={formik.handleChange}
                            value={formik.values.ProjectReport}
                        />
                        {formik.errors.ProjectReport && <div className="text-red-600">{formik.errors.ProjectReport}</div>}
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Upload
                        </button>
                    </div>

                    {submitted && (
                        <div className="mt-4 text-green-600">
                            Form submitted successfully!
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default PostSeed;
