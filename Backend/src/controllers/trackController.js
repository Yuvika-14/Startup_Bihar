


const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken
const prisma = new PrismaClient();
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your actual JWT secret

const getDocumentStatus = async (req, res) => {
  try {
    // Extract the JWT from the request headers
    const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is in the format "Bearer <token>"

    // Verify and decode the JWT to get the user ID
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    let userId;
    try {
      const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
      userId = decoded.user_id; // Assuming the JWT payload contains the user ID as "user_id"
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // Check if userId is present
    if (!userId) {
      return res.status(400).json({ error: 'User ID is missing from request' });
    }

    // Retrieve the document associated with the user
    const document = await prisma.document.findUnique({
      where: { userId }, // Make sure userId is passed correctly
      select: {
        isCertVerified: true,
        isFounderDetailsverified: true,
        isCoFounderDetailsverified: true,
        isMobileNumbersVerified: true,
        isEmailVerified: true,
        isDpiitRecognitionNoVerified: true,
      },
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Return the verification statuses in the response
    return res.status(200).json({
      message: 'Document verification statuses retrieved successfully',
      verificationStatuses: document,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while processing the request' });
  }
};

module.exports = {
  getDocumentStatus,
};
