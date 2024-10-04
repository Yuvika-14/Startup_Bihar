

const express = require('express');


const documentRoutes = require('./routes/documentRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const trackRoutes  = require('./routes/trackRoutes');
const seedFundRoutes = require('./routes/seedFundRoutes');
const secondTrancheRoutes = require('./routes/secondTrancheRoutes')



const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use document routes
app.use('/api/StartupProfile', documentRoutes);

app.use('/api/userlogin', userRoutes);

app.use('/api/adminlogin', adminRoutes);

app.use('/api/admin/tracking', trackRoutes);

app.use('/api/seed-fund', seedFundRoutes);

app.use('/api/second-tranche', secondTrancheRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
