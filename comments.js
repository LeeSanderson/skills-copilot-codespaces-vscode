// Create web server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Use the public directory to serve static files
app.use(express.static('public'));

// Use the comments directory to serve static files
app.use(express.static('comments'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});