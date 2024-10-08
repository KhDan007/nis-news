// articleRoutes.js
const express = require('express');
const router = express.Router();
const { createArticle } = require('../controllers/articleController');
const auth = require('../middleware/authMiddleware');

router.post('/create', auth, createArticle);

module.exports = router;