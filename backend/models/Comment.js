const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    articleId: {
        type: Schema.Types.ObjectId,
        ref: "Article",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
