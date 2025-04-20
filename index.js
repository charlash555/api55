const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from Azure!' });
});

// Start the server
app.listen(port, () => console.log(`API running on port ${port}`));

