// articleRoutes.js
const express = require('express');
const router = express.Router();
const { createArticle } = require('../controllers/articleController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, createArticle);

module.exports = router;