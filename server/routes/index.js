const router = require('express').Router();
const path = require('path');
const express = require('express');

// Serve the built React app in production
router.use(express.static(path.join(__dirname, '../../client/build')));

// All other routes will be handled by the React app
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
