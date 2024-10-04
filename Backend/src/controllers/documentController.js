


const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library
const prisma = new PrismaClient();

const JWT_SECRET = 'your_jwt_secret_key';

const uploadDocuments = async (req, res) => {
  try {
    // Extract the JWT from the request headers
    const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is in the format "Bearer <token>"

    // Verify and decode the JWT to get the user ID
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    let userId;
    try {
      const decoded = jwt.verify(token, JWT_SECRET); // Use your secret key
      userId = decoded.user_id; // Assuming the JWT payload contains the user ID as "id"
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // Prepare data to create or update a document
    const newDocumentData = {
      registrationNo: req.body.registrationNo,
      founderName: req.body.founderName,
      founderAadharNumber: req.body.founderAadharNumber,
      coFounderNames: req.body.coFounderNames ? req.body.coFounderNames.split(',') : [],
      coFounderAadharNumbers: req.body.coFounderAadharNumbers ? req.body.coFounderAadharNumbers.split(',') : [],
      sector: req.body.sector,
      businessConcept: req.body.businessConcept,
      mobileNumbers: req.body.mobileNumbers ? req.body.mobileNumbers.split(',') : [],
      email: req.body.email,
      websiteLink: req.body.websiteLink,
      category: req.body.category,
      gender: req.body.gender,
      dpiitRecognitionNo: req.body.dpiitRecognitionNo,
      appliedIPR: req.body.appliedIPR === 'true', // Convert string to boolean
    };

    // If a logo file is provided, include its path and name
    if (req.files.logo && req.files.logo.length > 0) {
      const logoFile = req.files.logo[0];
      newDocumentData.logoName = logoFile.filename; // Store logo file name
      newDocumentData.logoPath = logoFile.path; // Store logo file path
    }

    // If a certificate file is provided, include its path and name
    if (req.files.certificate && req.files.certificate.length > 0) {
      const certificateFile = req.files.certificate[0];
      newDocumentData.certName = certificateFile.filename; // Store certificate file name
      newDocumentData.certPath = certificateFile.path; // Store certificate file path
    }

    // Upsert: Create or update the document
    const document = await prisma.document.upsert({
      where: { userId }, // Check for existing document by userId
      update: newDocumentData, // Update existing document
      create: {
        ...newDocumentData,
        userId, // Associate the document with the authenticated user
        // Set verification fields to false when creating a new document
        isCertVerified: "pending",
        isFounderDetailsverified: "pending",
        isCoFounderDetailsverified: "pending",
        isMobileNumbersVerified: "pending",
        isEmailVerified: "pending",
        isDpiitRecognitionNoVerified: "pending",
      },
    });

    // Return the created or updated document in the response
    return res.status(200).json({
      message: document ? 'Document updated successfully' : 'Document created successfully',
      document,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
};

module.exports = {
  uploadDocuments,
};
