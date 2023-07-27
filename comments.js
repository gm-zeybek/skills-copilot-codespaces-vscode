// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// Export router
module.exports = router;

// Routes
router.post('/posts/:id/comments', commentsCtrl.create);