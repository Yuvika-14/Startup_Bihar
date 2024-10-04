


const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const JWT_SECRET = 'your_jwt_secret_key'; // Store securely in env vars

// User login controller
const userLogin = async (req, res) => {
  try {
    const { user_id, password } = req.body;

    // Check if user_id and password are provided
    if (!user_id || !password) {
      return res.status(400).json({ error: 'user_id and password are required' });
    }

    // Find user by user_id
    const user = await prisma.user.findUnique({
      where: { user_id },
    });

    // If user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare provided password with the stored password
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { user_id: user.user_id },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Return token, user_id, and registration_no
    res.status(200).json({
      message: 'Login successful',
      token,
      user_id: user.user_id,
      registration_no: user.registration_no // Assuming 'registration_no' is a field in your user table
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
};

module.exports = {
  userLogin,
};
