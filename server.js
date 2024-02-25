const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  // Serve the index.html file for the Home/Welcome page
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact', (req, res) => {
  // Serve the contact.html file for the Contact Us page
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/about', (req, res) => {
  // Serve the about.html file for the About Us page
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
