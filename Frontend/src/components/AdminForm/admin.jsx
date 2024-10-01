import React, { useState } from "react";
import { useFormik } from "formik";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "John Doe" },
  { id: 4, name: "Jane Smith" },
  { id: 5, name: "John Doe" },
  { id: 6, name: "Jane Smith" },
  { id: 7, name: "John Doe" },
  { id: 8, name: "Jane Smith" },
];

const userDetails = {
  1: {
    companyName: "ABC Corp",
    registrationNumber: "12345678",
    incorporationDate: "2020-01-01",
    businessEntityType: "Private Limited",
    companyCertificate: "certificate.pdf",
    rocDistrict: "Mumbai",
    companyAddress: "123 Street, City",
    pincode: "400001",
    bankName: "XYZ Bank",
    ifscCode: "XYZ1234",
    accountNumber: "987654321",
    accountHolderName: "John Doe",
    branchName: "XYZ Branch",
    branchAddress: "456 Bank Street, City",
    cancelCheque: "cheque.jpg",
    panNumber: "ABCDE1234F",
    gstNumber: "GST123456789",
  },
  2: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  3: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  4: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  5: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  6: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  7: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  8: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  9: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  10: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  2: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  2: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  2: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  2: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  2: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  2: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
  2: {
    companyName: "XYZ Pvt Ltd",
    registrationNumber: "87654321",
    incorporationDate: "2019-05-15",
    businessEntityType: "Partnership",
    companyCertificate: "xyz_certificate.pdf",
    rocDistrict: "Delhi",
    companyAddress: "456 Avenue, City",
    pincode: "110001",
    bankName: "ABC Bank",
    ifscCode: "ABC9876",
    accountNumber: "123456789",
    accountHolderName: "Jane Smith",
    branchName: "ABC Branch",
    branchAddress: "789 Bank Avenue, City",
    cancelCheque: "cancelled_cheque.jpg",
    panNumber: "XYZAB1234G",
    gstNumber: "GST987654321",
  },
};

function AdminForm() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [formAccepted, setFormAccepted] = useState(false); 

  const formik = useFormik({
    initialValues: selectedUserId
      ? userDetails[selectedUserId]
      : {
          companyName: "",
          registrationNumber: "",
          incorporationDate: "",
          businessEntityType: "",
          companyCertificate: "",
          rocDistrict: "",
          companyAddress: "",
          pincode: "",
          bankName: "",
          ifscCode: "",
          accountNumber: "",
          accountHolderName: "",
          branchName: "",
          branchAddress: "",
          cancelCheque: "",
          panNumber: "",
          gstNumber: "",
        },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("Submitted data:", values);
    },
  });

  const handleAccept = () => {
    alert("Form Accepted");
    setFormAccepted(true); 
  };

  const handleReject = () => {
    alert("Form Rejected");
    setFormAccepted(false); 
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r p-4">
        <h3 className="text-lg font-semibold mb-4">User List</h3>
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="cursor-pointer text-blue-500 hover:underline"
              onClick={() => setSelectedUserId(user.id)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/3 p-6">
        <h3 className="text-xl font-semibold mb-6">User Details</h3>
        {selectedUserId ? (
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-medium">Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                className="border border-black  p-2 font-mont  rounded-2xl" // Updated wiborder-blackth 'rounded-2xl'
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Registration Number/CIN:</label>
              <input
                type="text"
                name="registrationNumber"
                value={formik.values.registrationNumber}
                onChange={formik.handleChange}
                className="border border-black p-2 font-mont rounded-2xl" // Updated wiborder-blackth 'rounded-2xl'
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Date of Incorporation:</label>
              <input
                type="date"
                name="incorporationDate"
                value={formik.values.incorporationDate}
                onChange={formik.handleChange}
                className="border border-black p-2 font-mont rounded-2xl" // Updated wiborder-blackth 'rounded-2xl'
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Business Entity Type:</label>
              <input
                type="text"
                name="businessEntityType"
                value={formik.values.businessEntityType}
                onChange={formik.handleChange}
                className="border border-black p-2 font-mont rounded-2xl" // Updated wiborder-blackth 'rounded-2xl'
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <label className="font-medium">Company Certificate:</label>
                <input
                  type="text"
                  name="companyCertificate"
                  value={formik.values.companyCertificate}
                  onChange={formik.handleChange}
                  className="border border-black   p-2 font-mont rounded-2xl w-[600px]" // Updated wiborder-blackth 'rounded-2xl'
                />
              </div>

              <div className="flex justify-between mt-6">
                {!formAccepted && (
                  <button
                    type="button"
                    onClick={handleAccept}
                    className="bg-green-500 text-white px-4 pborder-blacky-2 rounded-2xl hover:bg-green-600" // Updated wiborder-blackth 'rounded-2xl'
                  >
                    Accept Company Certificate
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleReject}
                  className="bg-red-500 text-white px-4 pborder-blacky-2 rounded-2xl hover:bg-red-600" // Updated wiborder-blackth 'rounded-2xl'
                >
                  Reject Company Certificate
                </button>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleAccept}
                className="bg-green-500 text-white px-4 pborder-blacky-2 rounded-2xl hover:bg-green-600" // Updated wiborder-blackth 'rounded-2xl'
              >
                Accept
              </button>

              <button
                type="button"
                onClick={handleReject}
                className="bg-red-500 text-white px-4 pborder-blacky-2 rounded-2xl hover:bg-red-600" // Updated wiborder-blackth 'rounded-2xl'
              >
                Reject
              </button>
            </div>
          </form>
        ) : (
          <p className="text-gray-500">Please select a user to view details.</p>
        )}
      </div>
    </div>
  );
}

export default AdminForm;
