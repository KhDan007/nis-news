const Article = require("../models/Article");

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
        console.error("Error creating article:", error);
        res.status(500).json({
            message: "Error creating article",
            error: error.message,
        });
    }
};

const getOneArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).send("Article not found");
        }

        // Increment the view count
        article.views += 1;
        await article.save();

        res.json(article);
    } catch (error) {
        res.status(500).send("Server error");
    }
};
const getArticles = async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            sort = "-createdAt",
            author,
            tag,
            search,
            startDate,
            endDate,
        } = req.query;

        const query = {};

        // Filter by author
        if (author) {
            query.authorId = author;
        }

        // Filter by tag
        if (tag) {
            query.tags = tag;
        }

        // Search in title and content
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { content: { $regex: search, $options: "i" } },
            ];
        }

        // Filter by date range
        if (startDate || endDate) {
            query.createdAt = {};

            if (startDate) {
                query.createdAt.$gte = new Date(startDate);
            }
            if (endDate) {
                query.createdAt.$lte = new Date(endDate);
            }
        }

        const articles = await Article.find(query)
            .sort(sort)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .populate("authorId", "name email")
            .exec();

        // Get total documents
        const count = await Article.countDocuments(query);

        res.json({
            articles,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        });
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({
            message: "Error fetching articles",
            error: error.message,
        });
    }
};

// Example function to get the most read articles
const getMostReadArticles = async (req, res) => {
    try {
        const mostReadArticles = await Article.find()
            .sort({ views: -1 }) // Sort by views in descending order
            .limit(req.params.limit); // Limit the number of articles returned
        return mostReadArticles;
    } catch (error) {
        console.error('Error fetching most read articles:', error);
        return [];
    }
}

module.exports = {
    createArticle,
    getArticles,
    getOneArticle,
    getMostReadArticles
};
