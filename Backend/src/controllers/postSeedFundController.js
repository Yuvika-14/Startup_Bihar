


const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const JWT_SECRET = 'your_jwt_secret_key'; // Use your actual JWT secret

// Post Seed Fund form submission controller
exports.submitPostSeedFund = async (req, res) => {
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
      currentStage,
      technicalKnowledge,
      raisedFunds,
      employment
    } = req.body;

    // Handle file uploads
    const auditedBalanceSheet = req.files.auditedBalanceSheet ? req.files.auditedBalanceSheet[0].path : null;
    const gstReturn = req.files.gstReturn ? req.files.gstReturn[0].path : null;
    const projectReport = req.files.projectReport ? req.files.projectReport[0].path : null;

    // Upsert: Create or update the PostSeedFund entry
    const postSeedFundEntry = await prisma.postSeedFund.upsert({
      where: { userId }, // Use userId to find existing entry
      update: {
        currentStage,
        technicalKnowledge: technicalKnowledge === 'true', // Convert string to boolean
        auditedBalanceSheet,
        gstReturn,
        raisedFunds: raisedFunds === 'true', // Convert string to boolean
        employment: employment === 'true', // Convert string to boolean
        projectReport
      },
      create: {
        currentStage,
        technicalKnowledge: technicalKnowledge === 'true', // Convert string to boolean
        auditedBalanceSheet,
        gstReturn,
        raisedFunds: raisedFunds === 'true', // Convert string to boolean
        employment: employment === 'true', // Convert string to boolean
        projectReport,
        userId // Associate the entry with the user ID
      }
    });

    res.status(200).json({
      message: postSeedFundEntry ? 'Post Seed Fund entry updated successfully' : 'Post Seed Fund entry created successfully',
      data: postSeedFundEntry
    });
  } catch (error) {
    console.error('Error creating/updating Post Seed Fund entry:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
};
