

// routes/documentRoutes.js
const express = require('express');
const { getDocumentStatus } = require('../controllers/trackController');
const {authenticateUser} = require('../middlewares/authenticateUser');

const router = express.Router();

// GET route to fetch document verification status
router.get('/', authenticateUser, getDocumentStatus);

module.exports = router;
