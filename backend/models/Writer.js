const mongoose = require("mongoose");
const { Schema } = mongoose;

const writerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    articles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Article",
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Writer = mongoose.model("Writer", writerSchema);
module.exports = Writer;
