import React, { useState } from "react";
import { useFormik } from "formik";
import userData from "./userDetalis";
import toast, { Toaster } from "react-hot-toast";
import AdminNavbar from "./Navbar/Navbar";

function AdminForm() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [formAccepted, setFormAccepted] = useState(false);
  const { users, userDetails } = userData();
  const [activeTab, setActiveTab] = useState("list");

  const formik = useFormik({
    initialValues: selectedUserId
      ? userDetails[selectedUserId]
      : {
          registrationNo: "",
          founderName: "",
          founderAadharNumber: "",
          cofunderName: "",
          cofunderAadharNumber: "",
          sector: "",
          businessConceptBrief: "",
          mobileNumber: "",
          email: "",
          companyLogo: "",
          websiteLink: "",
          businessCategory: "",
          gender: "",
          dpiitRecognitionNumber: "",
          dippCertificate: "",
          iprApplied: "",
        },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("Submitted data:", values);
    },
  });

  const handleAccept = () => {
    if (userDetails != "") {
      toast.error("Data is  missing!");
    } else {
      toast.success("Upload Certificate Accepted");
      setFormAccepted(true);
    }
  };

  const handleReject = () => {
    toast.error("Upload Certificate Rejected");
    setFormAccepted(false);
  };

  const handleFormAccept = () => {
    if (userDetails != "") {
      toast.error("Data is missing!");
    } else {
      toast.success("Form Accepted");
      setFormAccepted(true);
    }
  };

  const handleFormReject = () => {
    toast.error("Form Rejected");
    setFormAccepted(false);
  };

  const handleViewClick = (id) => {
    const userDetails = users.find((user) => user.id === id);
    console.log("Viewing details for:", userDetails);
    setSelectedUserId(id);
    setActiveTab("form");
  };

  return (
    <div className="flex">

    <AdminNavbar/>
    <div className="flex-1 p-6">

    <div className="px-4 sm:px-0 flex h-screen">
      <div className="w-1/3 border-r p-4">
        <h3 className="text-lg font-semibold mb-4">Startup Profile</h3>
        <ul className="p-4 bg-white shadow-md rounded-md space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between p-4 border rounded-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border">
                  {user.companyLogo ? (
                    <img
                      src={user.companyLogo}
                      alt={user.companyName || "Company Logo"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs font-bold text-gray-700">
                      {user.companyName ? user.companyName.charAt(0) : "N/A"}
                    </span>
                  )}
                </div>

                <div>
                  <div className="text-lg font-semibold text-gray-800">
                    {user.companyName || (
                      <span className="text-xs">No Name</span>
                    )}
                  </div>

                  <div className="text-sm text-gray-500">
                    Reg No: {user.registrationNumber || "N/A"}
                  </div>
                </div>
              </div>

              <button
                className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-full transition-colors duration-200"
                onClick={() => handleViewClick(user.id)}
              >
                View
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {activeTab === "form" && (
          <div>
            <div class="px-4 sm:px-0">
              <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Startup Profile
              </p>
            </div>
            <div class="mt-6 border-t border-gray-100">
              <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="  px-7 text-sm font-medium leading-6 text-gray-900">
                    Registration No
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.registrationNumber}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Founder Name
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.founderName}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Founder Aadhar Number
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.founderAadharNumber}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Co-Funder Name
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.cofunderName}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Co-Funder Aadhar Number
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.cofunderAadharNumber}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Sector
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.sector}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Brief on the Business Concept
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.briefOnBusinessConcept}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Mobile No
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.mobileNo}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Email
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.email}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Company Logo
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.companyLogo}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Website Link
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.websiteLink}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Category
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.category}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Gender
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.gender}
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    DPIIT Recognition Number
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.dpiitRecognitionNumber}
                  </dd>
                </div>

                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Upload DIPP Certificate
                  </dt>
                  <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul
                      role="list"
                      class="divide-y divide-gray-100 rounded-md border border-gray-200"
                    >
                      <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div class="flex w-0 flex-1 items-center">
                          <svg
                            class="h-5 w-5 flex-shrink-0 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <div class="ml-4 flex min-w-0 flex-1 gap-2">
                            <span class="truncate font-medium"></span>
                            <span class="flex-shrink-0 text-gray-400">
                              {formik.values.dippCertificate}
                            </span>
                          </div>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            open
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="flex mt-6 space-x-4">
                      {!formAccepted && (
                        <button
                          type="button"
                          onClick={handleAccept}
                          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                          ✔
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={handleReject}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      >
                        ✘
                      </button>
                    </div>
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class=" px-7 text-sm font-medium leading-6 text-gray-900">
                    Has your startup applied for any IPR(Intellectual Property
                    Right)(Yes/No){" "}
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {formik.values.iprApplied}
                  </dd>
                </div>
                <div className="flex mt-6 space-x-4">
                  {!formAccepted && (
                    <button
                      type="button"
                      onClick={handleFormAccept}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      Accepted
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleFormReject}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Rejected
                  </button>
                </div>
              </dl>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
    </div>
    </div>
  );
}

export default AdminForm;
