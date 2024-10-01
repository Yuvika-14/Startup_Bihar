

const express = require('express');
const upload = require('../config/multerconfig');
const { uploadDocuments } = require('../controllers/documentController');

const router = express.Router();

// Define the route for document uploads
router.post('/', upload.fields([{ name: 'logo' }, { name: 'certificate' }]), uploadDocuments);

module.exports = router;
