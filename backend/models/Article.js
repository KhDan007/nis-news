const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "Writer",
        required: true,
    },
    tags: [
        {
            type: String,
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    publishedAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

articleSchema.index({ title: "text", content: "text", tags: "text" });

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
