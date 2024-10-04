

const express = require('express');
const multer = require('multer');
const secondTrancheController = require('../controllers/secondTrancheController');

const router = express.Router();

const { authenticateUser } = require('../middlewares/authenticateUser'); // Import JWT middleware
const upload = require('../config/multerconfig');

router.post(
  '/',authenticateUser,
  upload.fields([
    { name: 'utilizationCertificate', maxCount: 1 },
    { name: 'statusReport', maxCount: 1 },
    { name: 'expenditurePlan', maxCount: 1 },
    { name: 'bankStatement', maxCount: 1 },
    { name: 'expenditureInvoice', maxCount: 1 },
    { name: 'geoTaggedPhotos', maxCount: 1 }
  ]),
  secondTrancheController.submitSecondTranche
);

module.exports = router;
