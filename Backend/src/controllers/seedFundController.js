const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const JWT_SECRET = 'your_jwt_secret_key';

// Seed fund form submission controller
exports.submitSeedFund = async (req, res) => {
  try {
    // Ensure a token is provided in the request headers
    const token = req.headers.authorization?.split(' ')[1]; // Assuming Bearer <token> format
    if (!token) {
      return res.status(401).json({ error: 'Authorization token is required' });
    }

    // Decode the JWT to get the user ID
    const decoded = jwt.verify(token, JWT_SECRET); // Use your JWT secret
    const userId = decoded.user_id; // Adjust according to your token payload structure

    // Extract form data from the request body
    const {
      companyName,
      registrationNumber,
      dateOfIncorporation,
      businessEntityType,
      rocDistrict,
      companyAddress,
      pincode,
      bankName,
      ifscCode,
      currentAccountNumber,
      currentAccountHolderName,
      branchName,
      branchAddress,
      panNumber,
      gstNumber
    } = req.body;

    // Handle file uploads
    const companyCertificate = req.files.companyCertificate ? req.files.companyCertificate[0].path : null;
    const cancelChequeOrPassbook = req.files.cancelChequeOrPassbook ? req.files.cancelChequeOrPassbook[0].path : null;

    // Upsert: Create or update the seed fund entry
    const seedFundEntry = await prisma.seedFund.upsert({
      where: { userId }, // Use userId to find existing entry
      update: {
        companyName,
        registrationNumber,
        dateOfIncorporation: new Date(dateOfIncorporation),
        businessEntityType,
        companyCertificate,
        rocDistrict,
        companyAddress,
        pincode,
        bankName,
        ifscCode,
        currentAccountNumber,
        currentAccountHolderName,
        branchName,
        branchAddress,
        cancelChequeOrPassbook,
        panNumber,
        gstNumber
      },
      create: {
        companyName,
        registrationNumber,
        dateOfIncorporation: new Date(dateOfIncorporation),
        businessEntityType,
        companyCertificate,
        rocDistrict,
        companyAddress,
        pincode,
        bankName,
        ifscCode,
        currentAccountNumber,
        currentAccountHolderName,
        branchName,
        branchAddress,
        cancelChequeOrPassbook,
        panNumber,
        gstNumber,
        userId // Associate the entry with the user ID
      }
    });

    res.status(200).json({
      message: seedFundEntry ? 'Seed fund entry updated successfully' : 'Seed fund entry created successfully',
      data: seedFundEntry
    });
  } catch (error) {
    console.error('Error creating/updating seed fund entry:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
};
