

const express = require('express');
const { userLogin } = require('../controllers/userController');

const router = express.Router();

// POST route for user login
router.post('/', userLogin);

module.exports = router;
