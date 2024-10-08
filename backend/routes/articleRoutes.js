// articleRoutes.js
const express = require('express');
const router = express.Router();
const { createArticle, getArticles } = require('../controllers/articleController');
const auth = require('../middleware/authMiddleware');

router.get('/', getArticles);
router.post('/create', auth, createArticle);

module.exports = router;