

const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const JWT_SECRET = 'your_jwt_secret_key';

// Second Tranche form submission controller
exports.submitSecondTranche = async (req, res) => {
  try {
    // Ensure a token is provided in the request headers
    const token = req.headers.authorization?.split(' ')[1]; // Assuming Bearer <token> format
    if (!token) {
      return res.status(401).json({ error: 'Authorization token is required' });
    }

    // Decode the JWT to get the user ID
    const decoded = jwt.verify(token, JWT_SECRET); // Use your JWT secret
    const userId = decoded.user_id; // Adjust according to your token payload structure

    // Handle file uploads
    const utilizationCertificate = req.files.utilizationCertificate ? req.files.utilizationCertificate[0].path : null;
    const statusReport = req.files.statusReport ? req.files.statusReport[0].path : null;
    const expenditurePlan = req.files.expenditurePlan ? req.files.expenditurePlan[0].path : null;
    const bankStatement = req.files.bankStatement ? req.files.bankStatement[0].path : null;
    const expenditureInvoice = req.files.expenditureInvoice ? req.files.expenditureInvoice[0].path : null;
    const geoTaggedPhotos = req.files.geoTaggedPhotos ? req.files.geoTaggedPhotos[0].path : null;

    // Upsert: Create or update the second tranche entry
    const secondTrancheEntry = await prisma.secondTranche.upsert({
      where: { userId }, // Use userId to find existing entry
      update: {
        utilizationCertificate,
        statusReport,
        expenditurePlan,
        bankStatement,
        expenditureInvoice,
        geoTaggedPhotos,
      },
      create: {
        utilizationCertificate,
        statusReport,
        expenditurePlan,
        bankStatement,
        expenditureInvoice,
        geoTaggedPhotos,
        userId // Associate the entry with the user ID
      }
    });

    res.status(200).json({
      message: secondTrancheEntry ? 'Second tranche entry updated successfully' : 'Second tranche entry created successfully',
      data: secondTrancheEntry
    });
  } catch (error) {
    console.error('Error creating/updating second tranche entry:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
};
