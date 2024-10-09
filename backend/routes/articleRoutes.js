// articleRoutes.js
const express = require("express");
const router = express.Router();
const {
    createArticle,
    getArticles,
    getOneArticle,
    getMostReadArticles,
} = require("../controllers/articleController");
const auth = require("../middleware/authMiddleware");

router.get("/mostread/:limit", getMostReadArticles);
router.get("/", getArticles);
router.post("/create", auth, createArticle);
router.get("/:id", auth, getOneArticle);

module.exports = router;
