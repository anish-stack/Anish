const express = require('express');
const app = express();

// Route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

// Route for "/about"
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route for "/contact"
app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});

// Route for "/api/data"
app.get('/api/data', (req, res) => {
  // You can send JSON data as a response
  res.json({ message: 'This is some JSON data from the API.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
