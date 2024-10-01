


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const uploadDocuments = async (req, res) => {
  try {
    // Check if both files were uploaded
    if (!req.files.logo || !req.files.certificate) {
      return res.status(400).json({ error: 'Both logo and certificate PDF files are required' });
    }

    // Extract the form data from the request body
    const {
      registrationNo,
      founderName,
      founderAadharNumber,
      coFounderNames,
      coFounderAadharNumbers,
      sector,
      businessConcept,
      mobileNumbers,
      email,
      websiteLink,
      category,
      gender,
      dpiitRecognitionNo,
      appliedIPR,
    } = req.body;

    // Handle arrays properly
    const coFounderNamesArray = coFounderNames ? coFounderNames.split(',') : [];
    const coFounderAadharNumbersArray = coFounderAadharNumbers ? coFounderAadharNumbers.split(',') : [];
    const mobileNumbersArray = mobileNumbers ? mobileNumbers.split(',') : [];

    // Access the first (and only) file in each array
    const logoFile = req.files.logo[0];
    const certificateFile = req.files.certificate[0];

    // Create a single document in the database
    const document = await prisma.document.create({
      data: {
        logoName: logoFile.filename, // Store logo file name
        logoPath: logoFile.path, // Store logo file path
        certName: certificateFile.filename, // Store certificate file name
        certPath: certificateFile.path, // Store certificate file path
        registrationNo,
        founderName,
        founderAadharNumber,
        coFounderNames: coFounderNamesArray,
        coFounderAadharNumbers: coFounderAadharNumbersArray,
        sector,
        businessConcept,
        mobileNumbers: mobileNumbersArray,
        email,
        websiteLink,
        category,
        gender,
        dpiitRecognitionNo,
        appliedIPR: appliedIPR === 'true', // Convert to boolean if necessary
      },
    });

    res.status(201).json({
      message: 'Logo and certificate files uploaded and saved to the database',
      document, // Return the created document
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while uploading the files and saving the data' });
  }
};

module.exports = {
  uploadDocuments,
};
