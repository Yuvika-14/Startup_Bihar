

const express = require('express');
const documentRoutes = require('./routes/documentRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use document routes
app.use('/api/documents', documentRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
