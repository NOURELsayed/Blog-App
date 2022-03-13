
const mongoose = require('mongoose');

const Blog = mongoose.model('Blog', {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date, default: Date.now,
        required: true
    }

})
module.exports = Blog;