
const express = require('express');
const { adminLogin } = require('../controllers/adminController');

const router = express.Router();

// POST route for admin login
router.post('/', adminLogin);

module.exports = router;
