

const express = require('express');

const seedFundController = require('../controllers/seedFundController');
const {authenticateUser} = require('../middlewares/authenticateUser');

const router = express.Router();


const upload = require('../config/multerconfig');

router.post(
  '/',authenticateUser,
  upload.fields([
    { name: 'companyCertificate', maxCount: 1 },
    { name: 'cancelChequeOrPassbook', maxCount: 1 }
  ]),
  seedFundController.submitSeedFund
);

module.exports = router;
