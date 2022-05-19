const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
    },
});

module.exports = mongoose.model('post', PostSchema);