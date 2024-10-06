

const express = require('express');
const router = express.Router();

const postSeedFundController = require('../controllers/postSeedFundController');

// Setup Multer for file uploads


const { authenticateUser } = require('../middlewares/authenticateUser'); // Import JWT middleware
const upload = require('../config/multerconfig');

// Define route for Post Seed Fund submission
router.post(
  '/',authenticateUser,
  upload.fields([
    { name: 'auditedBalanceSheet', maxCount: 1 },
    { name: 'gstReturn', maxCount: 1 },
    { name: 'projectReport', maxCount: 1 }
  ]),
  postSeedFundController.submitPostSeedFund
);

module.exports = router;
