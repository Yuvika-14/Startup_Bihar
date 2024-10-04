import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import userData from "./userDetalis";

function SecondTrancheForm() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { users, userDetails } = userData();
  const [activeTab, setActiveTab] = useState("list");

  const [certificateStatus, setCertificateStatus] = useState({
    formAccepted: null,
    companyCertificate: null,
    panNumber: null,
    gstNumber: null,
    cancelledChequePassbook: null,
    caCertifiedUtilizationCertificate: null,
    statusReport: null,
    expenditurePlan: null,
    bankStatement: null,
    expenditureInvoice: null,
    geoTaggedPhotos: null,
  });

  const formik = useFormik({
    initialValues: selectedUserId
      ? userDetails[selectedUserId]
      : {
          companyName: "",
          registrationNumber: "",
          dateOfIncorporation: "",
          businessEntityType: "",
          companyCertificate: "",
          rocDistrict: "",
          companyAddress: "",
          pincode: "",
          bankName: "",
          ifscCode: "",
          currentAccountNumber: "",
          currentAccountHolderName: "",
          branchName: "",
          branchAddress: "",
          cancelledChequePassbook: "",
          panNumber: "",
          gstNumber: "",
          caCertifiedUtilizationCertificate: "",
          statusReport: "",
          expenditurePlan: "",
          bankStatement: "",
          expenditureInvoice: "",
          geoTaggedPhotos: "",
        },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("Submitted data:", values);
      toast.success("Form Submitted Successfully!");
    },
  });

  useEffect(() => {
    if (selectedUserId) {
      const user = users.find((user) => user.id === selectedUserId);
      setCertificateStatus({
        formAccepted: null,
        companyCertificate: user?.companyCertificateStatus || null,
        panNumber: user?.panNumberStatus || null,
        gstNumber: user?.gstNumberStatus || null,
        cancelledChequePassbook: user?.cancelledChequePassbookStatus || null,
        caCertifiedUtilizationCertificate:
          user?.caCertifiedUtilizationCertificateStatus || null,
        statusReport: user?.statusReportStatus || null,
        expenditurePlan: user?.expenditurePlanStatus || null,
        bankStatement: user?.bankStatementStatus || null,
        expenditureInvoice: user?.expenditureInvoiceStatus || null,
        geoTaggedPhotos: user?.geoTaggedPhotosStatus || null,
      });
    } else {
      setCertificateStatus({
        formAccepted: null,
        companyCertificate: null,
        panNumber: null,
        gstNumber: null,
        cancelledChequePassbook: null,
        caCertifiedUtilizationCertificate: null,
        statusReport: null,
        expenditurePlan: null,
        bankStatement: null,
        expenditureInvoice: null,
        geoTaggedPhotos: null,
      });
    }
  }, [selectedUserId, users]);

  const handleAccept = (certificate) => {
    if (!formik.values[certificate]) {
      toast.error(`"${getCertificateLabel(certificate)}" is missing!`);
      return;
    }
    setCertificateStatus((prevStatus) => ({
      ...prevStatus,
      [certificate]: true,
    }));
    toast.success(`"${getCertificateLabel(certificate)}" Accepted`);
  };

  const handleReject = (certificate) => {
    setCertificateStatus((prevStatus) => ({
      ...prevStatus,
      [certificate]: false,
    }));
    toast.error(`"${getCertificateLabel(certificate)}" Rejected`);
  };

  const getCertificateLabel = (certificate) => {
    const labels = {
      companyCertificate: "Company Certificate",
      panNumber: "PAN Number",
      gstNumber: "GST Number",
      cancelledChequePassbook: "Cancelled Cheque/Passbook",
      caCertifiedUtilizationCertificate:
        "C.A Certified Utilization Certificate",
      statusReport: "Status Report",
      expenditurePlan: "Self Declared Second Tranche Expenditure Plan",
      bankStatement: "Bank Statement",
      expenditureInvoice: "Expenditure Invoice",
      geoTaggedPhotos: "Geo-Tagged Photos of Offices/Units",
    };
    return labels[certificate] || certificate;
  };

  const handleViewClick = (id) => {
    const selectedUserDetails = users.find((user) => user.id === id);
    console.log("Viewing details for:", selectedUserDetails);
    setSelectedUserId(id);
    setActiveTab("form");
  };

  const handleFormAccept = () => {
    const allCertificatesAccepted = Object.keys(certificateStatus)
      .filter((key) => key !== "formAccepted")
      .every((key) => certificateStatus[key] === true);

    if (!allCertificatesAccepted) {
      toast.error(
        "All certificates must be accepted before accepting the form."
      );
      return;
    }

    setCertificateStatus((prevStatus) => ({
      ...prevStatus,
      formAccepted: true,
    }));
    toast.success("Form Accepted");
  };

  const handleFormReject = () => {
    setCertificateStatus((prevStatus) => ({
      ...prevStatus,
      formAccepted: false,
    }));
    toast.error("Form Rejected");
  };

  return (
    <div className="px-4 sm:px-0 flex h-screen">
      <div className="w-1/3 border-r p-4">
        <h3 className="text-lg font-semibold mb-4">Second Tranche</h3>
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
                className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-colors duration-200"
                onClick={() => handleViewClick(user.id)}
              >
                View
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        {activeTab === "form" && selectedUserId && (
          <div>
            <div className="px-4 sm:px-0">
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Second Tranche Details
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <form onSubmit={formik.handleSubmit}>
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="px-7 text-sm font-medium leading-6 text-gray-900">
                      C.A Certified Utilization Certificate
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {formik.values.caCertifiedUtilizationCertificate || "N/A"}
                      <div className="flex mt-4 space-x-4">
                        {certificateStatus.caCertifiedUtilizationCertificate ===
                        true ? (
                          <span className="text-green-500 font-bold">
                            ✔ Accepted
                          </span>
                        ) : certificateStatus.caCertifiedUtilizationCertificate ===
                          false ? (
                          <span className="text-red-500 font-bold">
                            ✘ Rejected
                          </span>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                handleAccept(
                                  "caCertifiedUtilizationCertificate"
                                )
                              }
                              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                              ✔ Accept
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                handleReject(
                                  "caCertifiedUtilizationCertificate"
                                )
                              }
                              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                              ✘ Reject
                            </button>
                          </>
                        )}
                      </div>
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="px-7 text-sm font-medium leading-6 text-gray-900">
                      Status Report
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {formik.values.statusReport || "N/A"}
                      <div className="flex mt-4 space-x-4">
                        {certificateStatus.statusReport === true ? (
                          <span className="text-green-500 font-bold">
                            ✔ Accepted
                          </span>
                        ) : certificateStatus.statusReport === false ? (
                          <span className="text-red-500 font-bold">
                            ✘ Rejected
                          </span>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => handleAccept("statusReport")}
                              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                              ✔ Accept
                            </button>

                            <button
                              type="button"
                              onClick={() => handleReject("statusReport")}
                              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                              ✘ Reject
                            </button>
                          </>
                        )}
                      </div>
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="px-7 text-sm font-medium leading-6 text-gray-900">
                      Upload Self-Declared Second Tranche Expenditure Plan in
                      the Letter Head of Entity
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {formik.values.expenditurePlan || "N/A"}
                      <div className="flex mt-4 space-x-4">
                        {certificateStatus.expenditurePlan === true ? (
                          <span className="text-green-500 font-bold">
                            ✔ Accepted
                          </span>
                        ) : certificateStatus.expenditurePlan === false ? (
                          <span className="text-red-500 font-bold">
                            ✘ Rejected
                          </span>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => handleAccept("expenditurePlan")}
                              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                              ✔ Accept
                            </button>

                            <button
                              type="button"
                              onClick={() => handleReject("expenditurePlan")}
                              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                              ✘ Reject
                            </button>
                          </>
                        )}
                      </div>
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="px-7 text-sm font-medium leading-6 text-gray-900">
                      Bank Statement (Highlight the Fund Received and
                      Expenditure Made)
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {formik.values.bankStatement || "N/A"}
                      <div className="flex mt-4 space-x-4">
                        {certificateStatus.bankStatement === true ? (
                          <span className="text-green-500 font-bold">
                            ✔ Accepted
                          </span>
                        ) : certificateStatus.bankStatement === false ? (
                          <span className="text-red-500 font-bold">
                            ✘ Rejected
                          </span>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => handleAccept("bankStatement")}
                              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                              ✔ Accept
                            </button>

                            <button
                              type="button"
                              onClick={() => handleReject("bankStatement")}
                              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                              ✘ Reject
                            </button>
                          </>
                        )}
                      </div>
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="px-7 text-sm font-medium leading-6 text-gray-900">
                      Upload Expenditure Invoice
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {formik.values.expenditureInvoice || "N/A"}
                      <div className="flex mt-4 space-x-4">
                        {certificateStatus.expenditureInvoice === true ? (
                          <span className="text-green-500 font-bold">
                            ✔ Accepted
                          </span>
                        ) : certificateStatus.expenditureInvoice === false ? (
                          <span className="text-red-500 font-bold">
                            ✘ Rejected
                          </span>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => handleAccept("expenditureInvoice")}
                              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                              ✔ Accept
                            </button>

                            <button
                              type="button"
                              onClick={() => handleReject("expenditureInvoice")}
                              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                              ✘ Reject
                            </button>
                          </>
                        )}
                      </div>
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="px-7 text-sm font-medium leading-6 text-gray-900">
                      Upload Geo-Tagged Photos of Your Offices/Units
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {formik.values.geoTaggedPhotos || "N/A"}
                      <div className="flex mt-4 space-x-4">
                        {certificateStatus.geoTaggedPhotos === true ? (
                          <span className="text-green-500 font-bold">
                            ✔ Accepted
                          </span>
                        ) : certificateStatus.geoTaggedPhotos === false ? (
                          <span className="text-red-500 font-bold">
                            ✘ Rejected
                          </span>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => handleAccept("geoTaggedPhotos")}
                              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                              ✔ Accept
                            </button>

                            <button
                              type="button"
                              onClick={() => handleReject("geoTaggedPhotos")}
                              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                              ✘ Reject
                            </button>
                          </>
                        )}
                      </div>
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 sm:col-span-3">
                    <dt className="sr-only">Actions</dt>
                    <dd className="mt-1 text-sm leading-6 sm:mt-0 sm:col-span-2">
                      <div className="flex space-x-4">
                        {certificateStatus.formAccepted !== true && (
                          <button
                            type="button"
                            onClick={handleFormAccept}
                            className={`bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600`}
                          >
                            ✔ Accept Form
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={handleFormReject}
                          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                          ✘ Reject Form
                        </button>
                      </div>
                      {certificateStatus.formAccepted === true && (
                        <span className="text-green-500 font-bold mt-2 inline-block">
                          ✔ Form Accepted
                        </span>
                      )}
                      {certificateStatus.formAccepted === false && (
                        <span className="text-red-500 font-bold mt-2 inline-block">
                          ✘ Form Rejected
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>
              </form>
            </div>
          </div>
        )}
        <Toaster />
      </div>
    </div>
  );
}

export default SecondTrancheForm;
