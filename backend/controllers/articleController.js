const Article = require('../models/Article');

const createArticle = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const authorId = req.writer.id; // This comes from the auth middleware

        const newArticle = new Article({
            title,
            content,
            authorId,
            tags,
            publishedAt: new Date(), // Set to current date if you want to publish immediately
        });

        await newArticle.save();

        res.status(201).json(newArticle);
    } catch (error) {
        console.error('Error creating article:', error);
        res.status(500).json({ message: 'Error creating article', error: error.message });
    }
};

module.exports = {
    createArticle,
    // ... other article-related controller functions
};