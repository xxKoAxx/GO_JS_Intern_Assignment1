const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema(
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

module.exports = mongoose.model('shoes', shoeSchema);
