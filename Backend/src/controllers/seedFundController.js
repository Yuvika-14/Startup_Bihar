


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



// Seed fund form submission controller
exports.submitSeedFund = async (req, res) => {
  try {
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

    const companyCertificate = req.files.companyCertificate ? req.files.companyCertificate[0].path : null;
    const cancelChequeOrPassbook = req.files.cancelChequeOrPassbook ? req.files.cancelChequeOrPassbook[0].path : null;

    const seedFundEntry = await prisma.seedFund.create({
      data: {
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
      }
    });

    res.status(201).json({
      message: 'Seed fund entry created successfully',
      data: seedFundEntry
    });
  } catch (error) {
    console.error('Error creating seed fund entry:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
};
