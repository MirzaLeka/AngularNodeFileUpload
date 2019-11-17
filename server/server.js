const express = require('express');
const { join } = require('path');
const { imageUpload } = require('./services/uploadFile')

// Setup
const app = express();
app.disable('x-powered-by');
const port = 3000;
const distPath = join(__dirname, '../dist/Food-App/index.html');

// Body Parser JSON
app.use(express.json());

// Body Parser Forms
app.use(express.urlencoded({ extended: true }));

// Upload image
app.post('/api/upload', imageUpload.single('image'), (req, res) => {
  try {
    res.status(200).send(req.file);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Error page
app.get('*', (req, res) => {
  res.sendFile(join(distPath, '/index.html'));
});

// Server launch
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});