

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Second Tranche form submission controller
exports.submitSecondTranche = async (req, res) => {
  try {
    const utilizationCertificate = req.files.utilizationCertificate ? req.files.utilizationCertificate[0].path : null;
    const statusReport = req.files.statusReport ? req.files.statusReport[0].path : null;
    const expenditurePlan = req.files.expenditurePlan ? req.files.expenditurePlan[0].path : null;
    const bankStatement = req.files.bankStatement ? req.files.bankStatement[0].path : null;
    const expenditureInvoice = req.files.expenditureInvoice ? req.files.expenditureInvoice[0].path : null;
    const geoTaggedPhotos = req.files.geoTaggedPhotos ? req.files.geoTaggedPhotos[0].path : null;

    // Store the form data in the database using Prisma
    const secondTrancheEntry = await prisma.secondTranche.create({
      data: {
        utilizationCertificate,
        statusReport,
        expenditurePlan,
        bankStatement,
        expenditureInvoice,
        geoTaggedPhotos
      }
    });

    res.status(201).json({
      message: 'Second tranche entry created successfully',
      data: secondTrancheEntry
    });
  } catch (error) {
    console.error('Error creating second tranche entry:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form.' });
  }
};
