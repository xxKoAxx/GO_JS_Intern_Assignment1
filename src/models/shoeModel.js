const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        image: String,
        description: String,
        price: Number,
        color: String,
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model('course', courseSchema);
